import { CONTRACT_VERSION } from '../../shared/contracts.mjs';

export function buildOrganicReport({ runId, runDate, account, decisions, executed = [], competitorResearch = [], topics = [], coverage = {} }) {
  return {
    contract_version: CONTRACT_VERSION,
    run_id: runId,
    run_date: runDate,
    account_verification: account,
    executed,
    candidates: decisions.slice(0, 5),
    competitor_research: competitorResearch.slice(0, 3),
    topics: topics.slice(0, 2),
    coverage_and_failures: coverage
  };
}

