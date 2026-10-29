# Architecture

## Shape

`tokun-x-growth` is one repository and one discoverable Master Skill. The Master Skill routes to six workflow files, while executable code, contracts, fixtures, and reports remain outside the skill prompt surface.

```text
.agents/skills/tokun-x-growth/SKILL.md
  -> workflows/{research,organic,ad-intelligence,creative,ads-execution,analytics}.md
  -> config/stages.json + docs/skill-registry.md
src/orchestrator -> Stage 4 modules -> shared contracts -> schemas
tests/fixtures -> non-production regression
```

Stage 4 internally separates research normalization, organic eligibility/selection, and reporting. The same normalized signal is reused by Stage 5; Stage 4 does not repeat research solely for handoff.

## Status model

- `configuration_only`: business context exists but is not reimplemented.
- `integrated_regression_passed_non_production`: code and historical-fixture regression pass; live external mutations are not implied.
- `contract_only`: responsibility and interface exist, but no executable module exists.
- Run states distinguish completed, failed, skipped, blocked approval, not implemented, and unknown.

## Safety boundaries

The repository contains no publisher, ads client, payment integration, or PostHog writer. Live external state must be re-read before uncertain retries. Old operational notes may contain credentials and are never imported.

