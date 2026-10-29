import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeCandidate, deduplicateSignals } from '../src/modules/research/index.mjs';
import { evaluateOrganicRun } from '../src/modules/organic/index.mjs';
import { buildOrganicReport } from '../src/modules/reporting/index.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relative) => JSON.parse(fs.readFileSync(path.join(root, relative), 'utf8'));
const fixture = read('tests/fixtures/stage4-success-input.json');
const expected = read('tests/fixtures/stage4-expected.json');
const exclusions = read('config/competitor-exclusions.json');

test('Stage 4 successful record preserves selection, exclusion, reporting, and Stage 5 handoff', () => {
  const signals = deduplicateSignals(fixture.candidates.map(normalizeCandidate));
  const evaluated = evaluateOrganicRun({account:fixture.account,candidates:fixture.candidates,processedEventKeys:fixture.processed_event_keys_before_run,competitorHandles:exclusions.accounts.map((item)=>item.handle)});
  const report = buildOrganicReport({runId:fixture.run_id,runDate:fixture.run_date,account:fixture.account,decisions:evaluated.decisions,executed:fixture.executed,competitorResearch:fixture.competitor_research,topics:fixture.topics,coverage:fixture.coverage});

  assert.equal(evaluated.live_actions_allowed, true);
  assert.equal(evaluated.selected.length, expected.selected_count);
  assert.equal(signals.length, expected.signal_count);
  assert.equal(evaluated.selected.some((item)=>item.author_handle.toLowerCase()==='openrouter'), expected.competitor_selected);
  assert.equal(signals.filter((signal)=>signal.handoff.stage_5_ready).length, expected.stage5_ready_noncompetitor_signals);
  assert.deepEqual(report.executed.filter((item)=>item.action==='reply').map((item)=>item.result_url), expected.published_reply_urls);
});

test('Stage 4 blocks live action when the actual handle differs', () => {
  const evaluated = evaluateOrganicRun({account:{...fixture.account,actual_handle:'different'},candidates:fixture.candidates,competitorHandles:[]});
  assert.equal(evaluated.live_actions_allowed, false);
});

test('Stage 4 excludes duplicate semantic events', () => {
  const evaluated = evaluateOrganicRun({account:fixture.account,candidates:fixture.candidates,processedEventKeys:[fixture.candidates[0].event_key],competitorHandles:[]});
  assert.equal(evaluated.decisions[0].decision, 'exclude');
  assert.ok(evaluated.decisions[0].reasons.includes('duplicate_event'));
});

