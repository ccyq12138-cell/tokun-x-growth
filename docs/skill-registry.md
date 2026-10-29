# Skill registry

| Skill ID | Skill Name | Stage | Purpose | Input | Output | Dependencies | Tools | Status | Version | Acceptance Criteria |
|---|---|---:|---|---|---|---|---|---|---|---|
| TXG-001 | Goal configuration | 1 | Freeze business target and funnel | Product/account facts | Goal card | None | Notion/local files | Configuration only | 0.1.0 | Audience, CTA, event and unknowns explicit |
| TXG-002 | Competitor research | 2 | Evidence-backed competitor/user analysis | Verified sources | Evidence cards | TXG-001 | Web/X read | Configuration/reference | 0.1.0 | Source, coverage and unknown paid status retained |
| TXG-003 | Profile positioning | 3 | Define account role/profile | TXG-001/002, brand | Profile plan | TXG-001/002 | Browser/image tools | Configuration only | 0.1.0 | Identity and write approval explicit |
| TXG-004R | Organic research | 4 | Discover, read, exclude and normalize signals | Pools, exclusions, dedup, X evidence | Signals/candidates | TXG-001/002/003 | Web/X read | Integrated regression passed | 0.1.0 | Required fields, coverage, dedup, competitor isolation |
| TXG-004O | Founder organic | 4 | Select/draft/verify permitted interactions | Candidates, account gate | Decisions/action records | TXG-004R | X read; future gated write | Historical live replies verified; live module absent | 0.1.0 | Three historical replies retained; unsafe gates block |
| TXG-004P | Organic reporting | 4 | A–E daily report and handoff | Decisions/actions/signals | Report + Stage 5 input | TXG-004R/O | Local files | Integrated regression passed | 0.1.0 | Limits, failures, URLs and unknowns preserved |
| TXG-005 | Ad intelligence | 5 | Cluster needs and generate evidence-backed angles | Signals/product facts | Angle cards | TXG-004P | X/product read | Contract only | 0.1.0 | Traceable evidence and expiry |
| TXG-006 | Creative | 6 | Build copy/images/manifests | Approved angles | Creative manifest | TXG-005 | Image/local files | Contract only | 0.1.0 | Fact, text, landing and ID checks |
| TXG-007 | Ads execution | 7 | Submit approved experiments | Eligibility, approval, manifest | Platform timeline/snapshots | TXG-006 | Future X Ads | Contract only | 0.1.0 | Mock tests; explicit spend approval |
| TXG-008 | Analytics | 8 | Join platform and product evidence | X/PostHog/mappings | Metrics/reports/hypotheses | TXG-004P, TXG-007 | Future X/PostHog read/write | Contract only | 0.1.0 | Freshness, unknowns and double-count checks |

