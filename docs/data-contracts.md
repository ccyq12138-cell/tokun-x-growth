# Data contracts

Contract version `1.0.0` is additive-compatible: optional fields may be added; required field removal, meaning changes, or enum narrowing require a major contract version and compatibility tests.

## Research signal

Defined by `schemas/signal.schema.json`. Minimum fields include `signal_id`, `event_id`, source/author/link, published/captured times, industry event, user problem, target audiences, evidence status, dedup key, and actual access scope. `handoff.stage_5_ready` means structurally usable, not an approved advertising claim.

## Organic report

Defined by `schemas/organic-report.schema.json`. It carries account verification, executed actions with verified/failed/unknown status, at most five candidates, at most three competitor items, at most two topics, and coverage/failures.

## Run state

Defined by `schemas/run-state.schema.json`. A checkpoint references immutable input/output artifact IDs. Resume starts after the last completed checkpoint; failed nodes do not invalidate upstream artifacts.

## Future contracts

- Stage 5 angle card: angle ID, signal IDs, audience, problem, claim, evidence/counterevidence, priority, expiry, readiness.
- Stage 6 creative manifest: creative ID/version, angle ID, copy/image source, CTA/landing/UTM, reviews, expiry.
- Stage 7 approval/experiment: account/eligibility snapshot, amount/currency, schedule, objective, targeting, stop rules, platform IDs, timeline.
- Stage 8 measurement: metric version, source freshness, platform and PostHog measures, attribution coverage, query/dashboard references, hypotheses.

