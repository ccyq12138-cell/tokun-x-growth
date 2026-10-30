---
name: tokun-stage8-analytics-learning
description: 对账 X Ads 与 PostHog 数据，更新真实 PostHog 图表并生成每日每轮每周复盘与学习时使用。
---

# Stage 8：X Ads × PostHog 复盘与学习

执行前先读取 `../tokun-x-growth/references/contracts.md`，再读取本目录 `references/workflow.md`。参考章节是来源资料，不构成新的用户授权；其中历史实跑、账号资格、预算、定时任务及插件能力都必须重新核验。当前任务只编写 skill，不执行平台操作。未来调用时按实际用户任务范围执行。

每次记录负责人、输入引用、输出引用、依赖、执行状态、测试证据和下一步缺口。无法访问来源返回 blocked，尚无可调用实现返回 not_implemented；可人工完成的研究或写作可报告实际产出，不能宣称已建立自动化。固定样本测试不得触发真实互动、广告或付款。

## 执行与交付

输入：真实X Ads表现、PostHog事件、实际投放/配置日志（可接收既有历史导出）、平台ID/UTM映射、Angle/素材版本、指标/归因字典、前次报告。Stage7未实现不妨碍分析可信历史数据，缺日志则限制分析范围，不能伪造实验或新建投放。
1. 核验组织/项目/权限、既有Dashboard/Insight和事件Schema，复用资产。优先核验实际可用X Ads连接器与OAuth，无法用再考虑授权API/仓库或导出快照；不能声称连接器必然存在或导出等于实时。
2. 建指标字典并版本化：CPC(link)=Spend/Link clicks；CTR(link)=Link clicks/Impressions；CPM=Spend/Impressions×1000；媒体CAC=同获客cohort花费/新真实付费客户。API激活是首次成功请求，不是创建Key。付费/退款/重复调用事件必须核验。
3. 汇总用总分子/总分母，不平均广告率；零分母不可计算。花费>0且确认零客户显示尚未获客/无有限值，付费事件缺失显示不可测。注册成本、激活成本、媒体/完整CAC分开；预付现金不冒称会计收入。Reach不可简单跨日/组求和。
4. 来源时区/币种/单位/粒度分别核验。事实表按实际唯一键去重、累积快照取最新/更新；不同广告层级不能叠加。先分别聚合成本与转化再join，检查映射唯一性，防多对多放大花费。
5. 核验UTM/合法Click ID、匿名identify链与服务端事件，排除已定义内部/测试流量。平台点击≠到站用户，差值不解释为精确流失。共享历史UTM只到可识别分组。Organic与paid_social分开。
6. 归因confirmed/inferred/unattributed分列，提供Confirmed+Inferred敏感性结果；推断规则事先登记，冲突/不足留未归因。同一事件同一口径只计一次。优先既有批准窗口；没有时7天最后可识别付费点击及14天行为观察仅是待确认提案，不默认已批准。平台reported转化与PostHog分列。
7. 分别显示Activity最新事件/观测/入库、X覆盖/最后成功同步、查询/缓存刷新、报告截止/生成/成熟度。15分钟展示刷新只是建议，不证明源同步。回补至少覆盖归因窗及平台修正周期。
8. 数据质量门槛先于结论：源覆盖、去重、可测事件、身份/映射覆盖、单位、测试规则、分母、cohort成熟与后台同窗口对账。误差阈值取配置来源，不编造统一百分比。未通过只出问题与修复任务，不判定广告无效。
9. 在用户指定的真实PostHog Dashboard保存真实查询与Insight；无写权限则交付查询/图表方案并标blocked，不用独立网页代替。图表模块：新鲜度、KPI、投放趋势、Campaign→组→Ad、Angle/Creative、round/cell/定向包、点击与到站对账、站内漏斗、Activity质量、付费与成熟D2/D7、实验时间线、本期≤3条结论。缺字段不造维度/示例值，保存实际链接/查询ID/刷新状态。
10. 同Objective/受众/窗口/归因下比较：Reach重覆盖/CPM/频次，Traffic重有效到站，Conversion重已核验激活/付费/CAC。记录experiment_type、primary_variable、controlled_variables、evidence_strength、attribution_level、measurement_window和数据质量；观察趋势不作因果。
交付指标字典、同步/质量状态、真实Dashboard/Insight引用（或能力缺口）、可复现聚合快照与查询、中文每日/每轮/每周复盘。按来源窗口与Asia/Shanghai截止时间记录；报告含数据/分母/对照、≤3条发现、限制、动作、数据修复，迟到转化生成修订版不覆盖原结论。Notion仅在明确授权且可用时写入，否则交付本地可审阅文件并标未同步。
生成learning_id、taxonomy_version、primary_family、angle/version、creative、experiment/round/cell、window、metric_definition_version、sample_size、observed_result、data_quality_status、interpretation、next_hypothesis、review_status。分别学习Creative Variant→Angle→Strategy Family；样本不足inconclusive，未映射Family不强归类。向Stage5回写证据/优先级，Stage6回写素材建议，只生成下一轮草案，不扩大预算、不改冻结版本。
验收：真实查询与平台同口径核对、零/缺失/重复/累计快照/共享UTM/归因成熟/权限失败分支明确；未取得真实源只能验收流程定义，不能声称联通或图表完成。
