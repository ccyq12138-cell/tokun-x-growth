# Workflow dependency map

| Stage | Goal and trigger | Inputs / source | Output | Dependency / approval | Phase 0 evidence |
|---|---|---|---|---|---|
| 1 | Freeze product, audience, market, goal, budget | Tokun facts, account inventory, business owner | X goal card | None; owner confirms budget | Configuration only |
| 2 | Build competitor/user evidence | Verified X accounts, original posts/comments, product sources | Evidence cards, pain points, content opportunities | Stage 1; public evidence limits | Existing research referenced, not rebuilt |
| 3 | Position account/profile | Stages 1–2, brand assets, current profile | Bio, visual/profile plan, pinned content | Human approves identity/profile writes | Configuration only |
| 4 | Daily Founder research and organic interaction | Verified handle/state, product facts, account pool, exclusions, dedup, prior report, current X evidence | Verified actions, daily report, normalized signals | Stages 1–3; live action authorization and identity gate | Three replies + two likes verified 2026-10-29; other action types pending |
| 5 | Turn reused signals into ad angles when Ads is visible | Stage 4 signals, product evidence, audiences | Angle cards and priorities | Stage 4; claim evidence | Contract only |
| 6 | Produce copy/images/manifests | Approved angle cards, brand, landing, UTM | Versioned creative manifest | Stage 5; factual/visual review | Contract only |
| 7 | Run approved ad experiments | Eligible account, manifest, targeting, budget/schedule, stop rules | Platform IDs, timeline, snapshots, Stage 8 handoff | Stage 6; explicit amount/schedule approval | Contract only; no payment connection |
| 8 | Attribute and iterate | X data, PostHog events, metric/UTM/experiment maps | Dashboard references, reports, next hypotheses | Stage 4 and/or 7; source/event validation | Contract only |

## Shared collection policy

Source evidence is collected once into a versioned signal with timestamps, coverage, evidence status, and dedup key. Consumers reuse it until freshness, coverage, or product-claim requirements demand a targeted refresh. Unknown and inaccessible data remain explicit.

