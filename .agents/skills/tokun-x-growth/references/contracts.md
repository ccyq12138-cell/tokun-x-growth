# 跨阶段统一执行与数据契约

## 来源与优先级

业务来源为上传《X Workflow.pdf》。同一文档中的明确后续修订/定稿优先于旧描述：Stage4使用2026-10-30配额及执行限制；Family采用5.3A六类正式分类，6.3A旧“待确认”不推翻定稿。历史实跑/能力/授权不可继承为今日事实。用户本次仅要求编写skill，Stage7暂缓。

各阶段references/workflow.md保留对应来源文字；PDF中的截图、内嵌ZIP/XLSX未提供为独立可用资源，不能宣称已经恢复。若来源不一致无法依修订关系解决，记录conflict并请求必要澄清。

## 存储与可追溯

生产数据和原图保存在已授权持久库；仓库只放执行规则、代码/Schema、脱敏样本。不得提交Cookie/Token、个人资料、受限Discord原附件、支付及敏感经营明细。Notion用于团队审阅但写入需当前授权；本地路径不能冒充团队可访问云端资源。

稳定ID与版本覆盖signal/event、pain、evidence、angle、copy、image、creative、experiment、round/cell、performance、learning。保存来源引用、published_at、observed_at/collected_at、时区、负责人、状态；引用上游事实而非重复维护。新输入先校验、再执行、结构化交付、日志/异常、下游读取。既有ID与共享接口向后兼容，历史发布/投放版本冻结，更新不覆盖。

## 交接约定（字段要求，不宣称已有可执行JSON Schema）

所有交接包含run_id、stage、owner、created_at（ISO8601带时区）、input_refs、output_refs、dependencies、status、warnings、gaps、next_actions及validation_evidence。为每个节点分别记录business_verified、code_integrated、regression_passed（true/false/null=未验证）、live_enabled、permissions和各自证据；PDF历史通过不可将当前字段改true。

Stage4→5：signal_id、event_id、source_platform、post/comment_id、source_url、published_at、collected_at、read_scope、comment_sort、question、audience、evidence_status、dedup_key。Home广告另含observed_handle、ad_label_seen、screenshot_ref、observed_at。

Discord痛点：pain_id、source_platform、channel、message_id/thread_id、source_url（如有）、published_at、observed_at、user_context、problem、expected_outcome、attempted_actions、resolution_status、attachment_refs、evidence_status、normalized_topic、duplicate_of、privacy_check。附件不是独立痛点，新增独立问题与新增证据分列。

Stage5→6：handoff_id、created_at、items、handoff_status、empty_reason、launch_authorized=false。items中包含angle_id、angle_version、taxonomy_version、primary_family、mapping_status、evidence_ids、claim、audience、cta、landing_url、primary_event、creative_direction、required_qualifiers、risk_level、review_method、approval_status、reviewed_at、expires_at及ready_for_creative状态。空items合法，须有原因；无证据、过期、未映射、不合风险审批均不得制作。审核只绑定指定angle_version。

Stage6→未来Stage7：copy/image独立版本、creative配对冻结快照、真实file_ref/校验和/规格/审校、CTA/落地页/UTM、事实有效期、resource-reference-map、待补项。广告目标与资格必须核验；素材ready_for_test不是付费授权。Stage7本次not_implemented，不生成正式工作簿，不伪造Media/Post/Card或Campaign ID。

Stage8→5/6：learning_id及假设版本、原报告/窗口/指标定义/样本/数据质量、angle/creative/experiment/round/cell引用、事实与解释分列、复核状态；只提交保留/修改/停用建议，不覆盖冻结配置。新支出、排期和新卖点均需适用的独立人工批准。

## 状态、时间与验收

执行状态区分drafted、awaiting_manual、attempted、verified、failed、blocked、not_implemented；原因可用input_missing、source_unavailable、blocked_permission、needs_evidence、expired、empty_handoff、pending_manual_action。不得把交付报告等同业务KPI达成。

报告和周配额用Asia/Shanghai，并保留源时区。UTM source=x，Organic medium=organic_social，广告medium=paid_social；content关联唯一内容/creative，campaign关联实验。价格默认24小时到期且生产/投放前重查。

测试只用脱敏固定样本或授权只读查询，不触发真实X互动、广告创建、付款或账户改动。skill文件检查、自动化回归、真实业务审核、当前权限分别记录；不能用一种通过替代另一种。本次只验收skill结构、引用与规则覆盖，没有自动化执行代码与真实业务结果。
