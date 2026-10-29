import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const required=['README.md','AGENTS.md','CHANGELOG.md','.agents/skills/tokun-x-growth/SKILL.md','config/stages.json','schemas/signal.schema.json','schemas/organic-report.schema.json','schemas/run-state.schema.json','docs/architecture.md','docs/workflow-dependencies.md','docs/skill-registry.md','docs/data-contracts.md','docs/roadmap.md','docs/phase-0-validation-report.md','.github/workflows/validate.yml'];
const errors=[];
for(const file of required) if(!fs.existsSync(path.join(root,file))) errors.push(`missing ${file}`);

const files=[];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){if(entry.name==='.git'||entry.name==='node_modules')continue;const full=path.join(dir,entry.name);if(entry.isDirectory())walk(full);else files.push(full);}}
walk(root);
for(const file of files.filter((f)=>f.endsWith('.json'))) {try{JSON.parse(fs.readFileSync(file,'utf8'));}catch(error){errors.push(`invalid JSON ${path.relative(root,file)}: ${error.message}`);}}

const stages=JSON.parse(fs.readFileSync(path.join(root,'config/stages.json'),'utf8')).stages;
const ids=new Set();
for(const stage of stages){if(ids.has(stage.stage_id))errors.push(`duplicate stage id ${stage.stage_id}`);ids.add(stage.stage_id);for(const dep of stage.dependencies)if(!stages.some((s)=>s.stage_id===dep))errors.push(`${stage.stage_id} missing dependency ${dep}`);if(stage.status==='contract_only'&&stage.executable)errors.push(`${stage.stage_id} contract_only cannot be executable`);}

const registry=fs.readFileSync(path.join(root,'docs/skill-registry.md'),'utf8');
const registryIds=registry.split(/\r?\n/).map((line)=>line.match(/^\| (TXG-[A-Z0-9]+) \|/)?.[1]).filter(Boolean);
if(new Set(registryIds).size!==registryIds.length)errors.push('duplicate registry skill ID');

const secretPatterns=[/BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY/i,/\b(?:ghp|github_pat|sk)-[A-Za-z0-9_-]{16,}\b/,/\b(?:password|passwd|2fa|cookie|token)\s*[:=]\s*(?!example|unknown|none|\[)/i];
for(const file of files.filter((f)=>!f.endsWith('.png')&&!f.endsWith('.jpg')&&!f.endsWith('.zip'))){const text=fs.readFileSync(file,'utf8');for(const pattern of secretPatterns)if(pattern.test(text))errors.push(`possible secret in ${path.relative(root,file)} (${pattern})`);}

const skill=fs.readFileSync(path.join(root,'.agents/skills/tokun-x-growth/SKILL.md'),'utf8');
if(!skill.startsWith('---\nname: tokun-x-growth\n'))errors.push('invalid Master Skill frontmatter');
const otherSkills=files.filter((f)=>f.endsWith(`${path.sep}SKILL.md`)&&!f.endsWith(path.join('.agents','skills','tokun-x-growth','SKILL.md')));
if(otherSkills.length)errors.push(`multiple skill entrypoints: ${otherSkills.map((f)=>path.relative(root,f)).join(', ')}`);

if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`Validated ${files.length} files: structure, JSON, IDs, dependencies, statuses, single entrypoint, and secret patterns.`);

