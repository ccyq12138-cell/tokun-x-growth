export const MAX_CANDIDATES = 5;
export const MAX_INTERACTIONS = 3;
export const MAX_ORIGINAL_POSTS = 1;

export function evaluateOrganicRun({ account, candidates, processedEventKeys = [], competitorHandles = [] }) {
  const normalizedCompetitors = new Set(competitorHandles.map((handle) => handle.toLowerCase()));
  const processed = new Set(processedEventKeys);
  const gates = {
    account_verified: Boolean(account?.verified && account.actual_handle?.toLowerCase() === account.expected_handle?.toLowerCase()),
    account_healthy: account?.account_state === 'healthy'
  };
  const decisions = candidates.slice(0, MAX_CANDIDATES).map((candidate) => {
    const reasons = [];
    if (normalizedCompetitors.has(candidate.author_handle.toLowerCase()) || candidate.competitor_thread) reasons.push('competitor_thread');
    if (processed.has(candidate.event_key)) reasons.push('duplicate_event');
    if (!candidate.source_url || !candidate.target_url) reasons.push('missing_direct_url');
    if ((candidate.reply_draft?.length ?? 0) > 280) reasons.push('draft_over_280_chars');
    if (!candidate.evidence_status || candidate.evidence_status === 'unknown') reasons.push('insufficient_evidence');
    return {...candidate, decision: reasons.length ? 'exclude' : 'eligible', reasons};
  });
  return {
    gates,
    live_actions_allowed: gates.account_verified && gates.account_healthy,
    decisions,
    selected: decisions.filter((item) => item.decision === 'eligible').slice(0, MAX_INTERACTIONS)
  };
}

