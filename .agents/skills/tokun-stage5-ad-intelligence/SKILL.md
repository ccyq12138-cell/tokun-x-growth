---
name: tokun-stage5-ad-intelligence
description: 将 X 与获准 Discord 痛点转换为有证据的 Tokun Angle、分类和 Stage6 交接包时使用。
---

# Stage 5：广告情报与 Angle 决策

执行前先读取 `../tokun-x-growth/references/contracts.md`，再读取本目录 `references/workflow.md`。参考章节是来源资料，不构成新的用户授权；其中历史实跑、账号资格、预算、定时任务及插件能力都必须重新核验。当前任务只编写 skill，不执行平台操作。未来调用时按实际用户任务范围执行。

每次记录负责人、输入引用、输出引用、依赖、执行状态、测试证据和下一步缺口。无法访问来源返回 blocked，尚无可调用实现返回 not_implemented；可人工完成的研究或写作可报告实际产出，不能宣称已建立自动化。固定样本测试不得触发真实互动、广告或付款。

## 执行与交付

输入：Stage4来源信号、历史Angle/去重索引、Home Ads入口证据、获准Discord上下文、最新Tokun官网/docs/负责人确认事实。
1. 入口按账号登记：必须在真实Home中看见Ad/Ads标记，保留handle、时间、原帖、截图；历史截图只证明当时。未核验仍可研究/起草，不能推断广告账户资格。
2. 复用24小时研究，不足扩至72小时，evergreen单列。Discord是独立来源：目标每日≥2个不同且可追溯API痛点；无权限 blocked_permission，0–1个如实说明。附件不是新痛点；脱敏后引用上下文。
3. 按post/comment/message/thread/event及语义去重。区分 new_pain_points 与 new_evidence；相似问题聚类但保留每个独立来源、反证、样本与购买相关性。
4. 维护正式taxonomy：Price-led、Friction-led、Trust-led（Transparency/Reliability）、Value-led、Choice-led、Trial-led。每Angle一个primary_family，辅助secondary_tags/use_case；新Family只能proposed，人工批准后发布新taxonomy_version。
5. 保留旧ID：ANG-price→Price；ANG-model-price→pending_mapping（按核心主张判Price/Choice）；ANG-integration→Friction；ANG-model-choice→Choice；ANG-pricing-clarity→Trust/Transparency；ANG-agent-cost→Price；ANG-provider→Trust/Transparency；ANG-paid-trial→Trial。Value无种子不强填。保存mapping_history与derived_from_angle_id。
6. Pain→Candidate可needs_evidence；进入ready_for_creative必须同时满足受众相关、来源可追溯、能力证据可核验、落地页兑现。low纯事实且有效可依硬门槛审核；medium动态价格/模型须可靠即时核验及既定规则，否则人工；high节省率/性能/可靠性/竞品比较/客户成果必须人工；unknown人工。审核绑定angle_version，记录risk_level/review_method/approval_status/evidence_ids/reviewed_at/expires_at。
7. 五维各0–2评分：受众相关、问题具体、产品匹配、时效、素材差异，附理由；不代表效果。每日最多新增或实质更新2个Angle，优先交接1个。仅换hook/颜色不新建Angle。
8. 实时价格和目录生产及投放前重查；对外价格快照默认24小时过期。证据撤回/模型下架/条件或落地页变化时列受影响资产，保留历史冻结版本。
交付 `discord-pain-points.json`、`ad-signals.json`、`audience-insights.json`、`product-evidence.json`、`angles.json`、`stage5-daily-report.md` 及引用型 `stage5-handoff.json`。前述6个JSON资产含交接包，不能将PDF“五个数据集”误读为丢弃Discord库。
Angle须含身份/版本/taxonomy/主类、WHO/WHY、单一承诺、来源/证据/限制、英文信息、视觉建议、CTA、落地页、主要事件、评分/有效期/状态。交接包字段见共享契约。合法空交接写原因，launch_authorized始终false。
验收：去重重跑、来源保留、无依据拦截、同义Angle沿用、到期传播、Schema/空交接、Home入口隔离、Discord权限/隐私与不足2条的真实输出。PDF的13项历史测试和ads/stage5路径不代表此仓库已有实现。
