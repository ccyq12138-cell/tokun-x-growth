# Repository instructions

- Treat `.agents/skills/tokun-x-growth/SKILL.md` as the only public skill entrypoint.
- Load only the workflow needed for the requested stage or subtask.
- Never read credentials from legacy operational documents into prompts, logs, fixtures, or commits.
- Do not publish, reply, like, repost, create ads, change budgets, spend money, or mutate analytics without the current user's explicit authorization and all workflow gates.
- Phase 0 execution is dry-run only. Stages 5–8 are contract-only and must return `not_implemented`.
- Preserve unknown values as `unknown` or `null`; never convert missing evidence to zero or success.
- New executable behavior requires tests and a registry status update.

