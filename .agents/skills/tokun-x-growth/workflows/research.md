# Research workflow

Load for source discovery, competitor research, account-pool verification, or signal normalization.

1. Reuse source records with a still-valid `captured_at`, coverage statement, and dedup key.
2. Prefer the latest 24 hours for interaction discovery; expand to 72 hours only when needed and label it. Competitor research normally uses seven days; historical examples need a separate window label.
3. Read the original post and actually visible comments. Record source URL, author, published/captured times, visible metrics, comment sort, sampled count, and access limitations. Search summaries are discovery aids, not post/comment evidence.
4. Separate interaction candidates from competitor research. Competitor official/founder accounts and their entire threads are research-only. Unverified suspected competitors are paused, not treated as safe.
5. Deduplicate by platform post/comment ID, event ID, and semantic event key. One market event may have multiple sources but must not be counted twice.
6. Normalize results to `schemas/signal.schema.json`. Unsupported claims remain `unverified` or `unknown`.

