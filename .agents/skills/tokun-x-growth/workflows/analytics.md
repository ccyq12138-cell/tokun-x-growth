# Stage 8 analytics contract

Status: `contract_only`.

Keep two data chains distinct: X platform/content/ad performance and PostHog website/product behavior. Trigger after event/identity definitions, UTM/platform/experiment mappings, source freshness rules, timezone/currency, and attribution windows are approved.

Input: Stage 7 experiment/configuration records, X snapshots, PostHog events, metric dictionary, UTM mapping, and prior report. Output: validated metrics, source freshness, attribution coverage, dashboard/insight references, daily/round/weekly report, and up to three next hypotheses requiring confirmation.

Unknown sources are not zero. Aggregate before joining to prevent duplicated spend. Platform-reported and PostHog-attributed conversions remain separate. Phase 0 neither connects sources nor mutates dashboards.

