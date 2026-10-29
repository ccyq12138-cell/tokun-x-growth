# tokun-x-growth

Tokun X Growth is a Codex Agent Skill monorepo for the eight-stage X growth workflow. Phase 0 establishes the master skill, shared contracts, a non-production orchestrator, and a regression-tested integration of the verified Stage 4 Founder organic workflow.

## Phase 0 status

- Stages 1–3: configuration/reference only; not reimplemented.
- Stage 4: research, organic decisioning, reporting, and dry-run regression are integrated. Live publishing remains permission- and environment-gated.
- Stages 5–8: contracts and module plans only; not executable.

## Use

Codex discovers the single entrypoint at `.agents/skills/tokun-x-growth/SKILL.md`.

```powershell
npm test
npm run validate
node src/orchestrator/index.mjs status
node src/orchestrator/index.mjs plan --stage 4
node src/orchestrator/index.mjs run --stage 4 --task regression --dry-run
```

No command in this repository publishes to X, creates ads, spends money, or mutates PostHog.

## Evidence boundary

The Stage 4 integration is based on the 2026-10-29 successful operating record: verified `@jjaywil`, three published replies with public URLs, two source likes, competitor-thread exclusion, and updated report/dedup indexes. Original posts, Quotes, reposts, scheduled-run continuity, and downstream attribution remain pending validation.

