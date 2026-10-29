import { CONTRACT_VERSION, assertRequired, assertIsoDate } from '../../shared/contracts.mjs';
import { stableId, xStatusId } from '../../shared/ids.mjs';

export function normalizeCandidate(candidate) {
  assertRequired(candidate, ['source_url','author_handle','published_at','captured_at','event_key','industry_event','user_problem','target_audience','sampled_comments'], 'candidate');
  assertIsoDate(candidate.published_at, 'published_at');
  assertIsoDate(candidate.captured_at, 'captured_at');
  const eventId = candidate.event_id ?? candidate.event_key;
  const platformId = xStatusId(candidate.source_url);
  return {
    contract_version: CONTRACT_VERSION,
    signal_id: stableId('sig', candidate.source_url, candidate.event_key),
    event_id: eventId,
    source: {
      url: candidate.source_url,
      author_handle: candidate.author_handle,
      source_type: candidate.source_type ?? 'post',
      parent_url: candidate.parent_url ?? null,
      platform_id: platformId
    },
    published_at: candidate.published_at,
    captured_at: candidate.captured_at,
    industry_event: candidate.industry_event,
    user_problem: candidate.user_problem,
    target_audience: candidate.target_audience,
    evidence_status: candidate.evidence_status ?? 'verified_source_observed',
    dedup_key: candidate.event_key,
    access_scope: {
      comment_sort: candidate.comment_sort ?? null,
      sampled_comments: candidate.sampled_comments,
      full_thread_coverage: candidate.full_thread_coverage ?? false,
      limitations: candidate.limitations ?? []
    },
    competitor_excluded: Boolean(candidate.competitor_excluded),
    handoff: {
      stage_5_ready: !candidate.competitor_excluded && candidate.evidence_status !== 'unknown',
      product_claim_status: 'not_assessed'
    }
  };
}

export function deduplicateSignals(signals) {
  const seen = new Set();
  return signals.filter((signal) => {
    const keys = [signal.source.platform_id, signal.dedup_key, signal.event_id].filter(Boolean);
    if (keys.some((key) => seen.has(key))) return false;
    keys.forEach((key) => seen.add(key));
    return true;
  });
}

