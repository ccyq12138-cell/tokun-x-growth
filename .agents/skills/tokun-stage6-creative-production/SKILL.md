---
name: tokun-stage6-creative-production
description: 基于已批准 Angle 制作文案、独立广告图、版本化素材库和 Creative Manifest 时使用。
---

# Stage 6：广告文案与图片资产制作

执行前先读取 `../tokun-x-growth/references/contracts.md`，再读取本目录 `references/workflow.md`。参考章节是来源资料，不构成新的用户授权；其中历史实跑、账号资格、预算、定时任务及插件能力都必须重新核验。当前任务只编写 skill，不执行平台操作。未来调用时按实际用户任务范围执行。

每次记录负责人、输入引用、输出引用、依赖、执行状态、测试证据和下一步缺口。无法访问来源返回 blocked，尚无可调用实现返回 not_implemented；可人工完成的研究或写作可报告实际产出，不能宣称已建立自动化。固定样本测试不得触发真实互动、广告或付款。

## 执行与交付

输入：有效且ready_for_creative的stage5-handoff.json、品牌资产、当前版位规格、历史素材库。拒绝pending_mapping和未批准Angle。
1. 核对angle/version、主张、证据、风险审批、受众、限制、CTA、落地页、有效期。缺证据或需改核心承诺时提交Stage5 change_request，不擅自批准，不重做整轮情报研究。
2. 每个入选角度制作3版英文文案：A直接利益/信息，B场景/问题，C证据/操作路径；各含hook、正文、CTA、落地页、字符数、证据、禁用条件。短版正文内部目标≤240字符，最终按实际格式复核。
3. 同一Angle设计2个有测试价值的独立视觉，日最多2张审校合格成品。每张恰好一个single_claim、一个focal_point、一个CTA；最多一条简短解释及必要小字限制。拒收上下拼图、多列配置、四宫格优势、功能堆砌和双CTA。仅换背景色不算有效A/B。
4. Prompt含angle_id、受众、逐字英文文案、证据、信息层级、品牌、构图、比例、限制、禁用项。生成后实际查看并逐字核验文字/数字/模型/URL/CTA/Logo、UI真实性、版权、裁切和手机可读性。不虚构节省/性能/可靠性/迁移时长、客户背书；未给品牌包时报告缺口。
5. 先选版位再核验当日官方规格。PDF参考Standalone 1200×628、Website Button 800×418，均1.91:1；部分1:1；PNG/JPEG、通常≤5MB只是参考，不能替代当前规格。保存placement、像素、字节、格式、导出时间、可持久访问file_ref、校验和、原始Prompt及预览。SVG/Prompt/概念板不算最终图片。
6. 五项视觉门槛：single_claim、one_focal_point、ad_spec、truth、移动可读性。全部通过才actual_image_completed；否则rejected_visual_review/needs_revision且禁止进入投放候选。纯视觉A/B固定主张、文字、CTA、受众、版位，仅改呈现；不同API配置场景不是纯视觉实验。
7. Copy/Image独立版本化与复用，Creative冻结其配对快照。继承angle/version、primary_family、taxonomy_version，记录template版本/受众/漏斗/hook/证据/实验引用。组合状态取最弱环节，证据失效级联通知但不覆盖历史。
交付 `copy-library.json`、`image-library.json`及真实PNG/JPEG、`creative-manifest.json`、`ads/reports/YYYY-MM-DD-creative-update.md`（同日追加）。Manifest含creative/version、angle/version、copy/image固定版本、实际资源地址、账号/目标/受众、CTA、落地页、UTM、主要事件、证据与有效期、状态/缺口。参考待测组合上限12条。
UTM：source=x，medium=paid_social，campaign=experiment_id，content=creative_id；缺实验ID保留待定，不伪造就绪。
可准备resource-reference-map、template-snapshot、field-mapping及未映射项；仅用目标账户最新模板核验能力，不硬编码历史列。真实图片不等于平台Media/Post/Card ID。正式导入xlsx、真实素材平台对象、上传/应用留给Stage7批准后处理，本次不实现。
验收：3版文案字段完整、单图单卖点/单焦点/单CTA、真实文件与规格、到期/拒收拦截、UTM与固定引用一致；没有图片工具或资产存储则报告blocked，不把Prompt算成图。
