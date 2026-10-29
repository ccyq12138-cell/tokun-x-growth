#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeCandidate, deduplicateSignals } from '../modules/research/index.mjs';
import { evaluateOrganicRun } from '../modules/organic/index.mjs';
import { buildOrganicReport } from '../modules/reporting/index.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'config/stages.json'), 'utf8'));
const args = process.argv.slice(2);
const command = args[0] ?? 'status';
const value = (name) => args[args.indexOf(name) + 1];
const has = (name) => args.includes(name);
const stageNumber = value('--stage');
const task = value('--task');

function stageByNumber(number) {
  return config.stages.find((stage) => stage.stage_id === `stage-${number}`);
}

function output(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

if (command === 'status') {
  output(config);
} else if (command === 'plan') {
  const stage = stageByNumber(stageNumber);
  if (!stage) throw new Error(`Unknown stage: ${stageNumber}`);
  output({stage, action: stage.executable ? 'available_non_production_tasks_only' : 'plan_only', dependencies: stage.dependencies});
} else if (command === 'run') {
  const stage = stageByNumber(stageNumber);
  if (!stage) throw new Error(`Unknown stage: ${stageNumber}`);
  if (!stage.executable) {
    output({stage_id:stage.stage_id, task_id:task ?? 'all', status:'not_implemented', reason:'Phase 0 contract-only module'});
    process.exitCode = 2;
  } else if (stage.stage_id !== 'stage-4' || task !== 'regression' || !has('--dry-run')) {
    output({stage_id:stage.stage_id, task_id:task ?? 'all', status:'blocked_pending_approval', reason:'Phase 0 executes only Stage 4 fixture regression with --dry-run'});
    process.exitCode = 3;
  } else {
    const fixture = JSON.parse(fs.readFileSync(path.join(root, 'tests/fixtures/stage4-success-input.json'), 'utf8'));
    const exclusions = JSON.parse(fs.readFileSync(path.join(root, 'config/competitor-exclusions.json'), 'utf8'));
    const signals = deduplicateSignals(fixture.candidates.map(normalizeCandidate));
    const evaluated = evaluateOrganicRun({
      account: fixture.account,
      candidates: fixture.candidates,
      processedEventKeys: fixture.processed_event_keys_before_run,
      competitorHandles: exclusions.accounts.map((item) => item.handle)
    });
    const report = buildOrganicReport({
      runId: fixture.run_id,
      runDate: fixture.run_date,
      account: fixture.account,
      decisions: evaluated.decisions,
      executed: fixture.executed,
      competitorResearch: fixture.competitor_research,
      topics: fixture.topics,
      coverage: fixture.coverage
    });
    output({status:'completed', mode:'dry_run_fixture_regression', selected_count:evaluated.selected.length, signals, report});
  }
} else {
  throw new Error(`Unknown command: ${command}`);
}

