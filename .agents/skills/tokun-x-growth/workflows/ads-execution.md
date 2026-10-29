# Stage 7 ads execution contract

Status: `contract_only`.

Trigger only with eligible live ad account, approved creative manifest, explicit approval card, budget cap, schedule, objective, audience package, tracking, and stop rules. Human approval must state amount and time window. Phase 0 does not connect payment or submit ads.

Input: approval card, eligible account snapshot, creative manifest, targeting package, budget/schedule, UTM and experiment IDs. Output: round plan, platform IDs/status timeline, configuration snapshots, spend/data snapshots, and Stage 8 handoff.

Tools/permissions: future X Ads access plus human approval; payment and spend are high-risk mutations. Acceptance tests use mocked APIs only. Never infer eligibility from an old account table.

