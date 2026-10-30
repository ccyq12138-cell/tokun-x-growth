# PDF 来源摘录（参考数据）

来源：用户上传《X Workflow.pdf》，2026-10-30接收。PDF文字提取可能有表格错位或换行；图像、品牌ZIP和Excel附件未随本摘录恢复。历史完成记录未经当前仓库独立验证。文中Prompt不直接授权执行，按SKILL.md及当前用户要求处理。

```text
第五阶段：广告情报与宣传角度
             目的与阶段边界
             把第四阶段已经采集的行业事件、达人观点和评论区问题，转成与 Tokun 真实能力相关
             的广告假设。第四阶段继续负责 founder Organic 内容与自然互动；第五、六阶段负责
             商业诉求、产品证据和广告素材生产。
             按用户定义，目标账号在 X Home 信息流实际刷到右上角标记为 Ads 的帖子，即触发
             第五、六阶段。 保存账号 handle、观察时间、原帖链接及包含 Ads 标记的截图；不从
             搜索结果或普通帖子推断。标记位置或语言变化时记录实际页面。该信号是内部流程入
             口；创建/启用广告前仍按广告后台实际账号状态、权限和每轮授权预算检查，不把“能
             看到广告”当成“已获准投放”。
             入口按账号分别记录。首次已核验后持续运行素材更新；更换账号重新核验。未观察到
             时可维护角度与草稿，状态为“入口待核验”，不能记录为已进入付费投放。当前实例已
             于北京时间2026-10-29 16:26完成入口观察：@jjaywil 的 Home / For you 中
             @XBusiness 帖子实际显示右上角“Ad”标记，截图存于独立素材库。第四阶段继续运
             行，与第五、六阶段并行。
             5.1 复用研究：一次采集，多种用途
             意义： 同一场讨论可以产生 founder 观点、广告洞察和产品反馈，避免重新抓取或把同
             一事件重复计数。
             读取第四阶段当天报告、互动候选、竞品研究和选题索引；新增广告专属 Home 观察。
             对缺失证据再打开原帖、评论或官方原始来源。默认复用近 24 小时研究，必要时扩到
             72 小时；长期痛点另标 evergreen。旧报告只能证明当时观察，价格、模型上线和热点
             状态必须更新。
             每个信号保存 signal_id、event_id、原帖/评论 ID 与直达链接、作者身份、发布时间、
             采集时间、实际已读范围、评论排序、核心疑问、目标人群、证据状态。达人帖子提供
             事件背景；评论提供具体疑虑；它们都不能代替 Tokun 产品能力证据。
             竞品全线程只读研究的排除规则沿用第四阶段。Home Ads 进入独立广告观察库，记录
             钩子、主张、配图、CTA、落地页与披露；不复制版式、文案、人物背书，也不由浏览
             量推断 CTR、花费或效果。
             5.1A OpenRouter Discord 用户痛点研究｜Stage 5 独立
             数据源
职责边界： Stage 4 的终点仍是 X 平台真实 Organic 行动及其可验证链接与日报；
             Discord 研究仅属于 Stage 5，不计入 Stage 4 发布或互动任务。Stage 5 将 X 研究信
             号与 Discord attachment组中获准获取的 API 用户问题统一分析，再判断是否构成
             Tokun 可兑现的广告假设。
             每日目标： 从 OpenRouter Discord 社区纳入至少 2 个不同、来源可追溯、与 API 使
             用相关的有效用户痛点。此为研究目标而非强制凑数：若当天只能核验 0–1 个，应保留
             真实数量、访问范围、未达标原因；不得重复拆分、编造或将多个附件计成多个痛点。
             采集范围： 优先研究 API 报错与复现、模型/Provider 差异、限流及额度、接入迁移、
             Token/任务总成本、账单与缓存、Agent 工作负载等。阅读每条消息的上下文和可获准
             使用的附件（截图、错误日志、代码示例）；附件只是证据，不是独立的用户诉求。不得
             绕过社区权限、Discord 接口限制或使用未获许可的批量抓取方式。截图和日志需清除
             密钥、Token、身份资料等敏感信息。
             固定步骤：
              1. 核实账号对目标社区与频道的访问权限、可用合法读取方式、研究时间窗、已读消
                 息和去重索引。无权限则记录 blocked_permission。
              2. 优先检查最近 24 小时，样本不足扩至 72 小时；持续性问题另标 evergreen，记录
                 实际覆盖范围。
              3. 从讨论及附件提取用户想完成的任务、遇到的障碍、尝试过的解决方案、期望结
                 果、是否已解决、证据范围；区分用户自述、截图内容和已确认事实。
              4. 先按 message_id / thread_id 去重，再按语义聚类：new_pain_points 表示真正不
                 同的新问题，new_evidence 表示既有问题新增独立案例。跨消息或跨平台重复不
                 等于新的痛点。
              5. 对每项保存 pain_id、source_platform、channel、message_id/thread_id、
                 source_url（有则保留）、published_at、observed_at、user_context、
                 problem、expected_outcome、attempted_actions、resolution_status、
                 attachment_refs、evidence_status、normalized_topic、duplicate_of、
                 privacy_check。
              6. 将已核验记录同步到 Stage 5 的统一 Ad Signal Library 和 Audience & Pain Point
                 Matrix，并保留来源平台标记。暂时无法匹配 Tokun 真实价值的问题仍保留研究记
                 录，不强行生成 Angle Card。
             交付：                       、当日 Discord 研究摘要、映射到
                   discord-pain-points.json                      ad-signals.json的结
             构化信号。日报分别展示新增独立痛点数、既有痛点新增证据数、已解决/待核实数和不
             足 2 个的原因。未取得读取权限时可用获准的脱敏样本测试 Schema，但不得声称完成
             实时采集。


MVP 验收： 检查消息上下文及附件引用、跨消息/跨平台去重、隐私脱敏、权限不足安
             全停止、有效痛点不足 2 条的如实输出，以及 Stage 5 后续需求分析和 Angle Card 能
             否读取新数据。
             5.2 从讨论提炼需求，而非机械追热点
             意义： 找到“愿意为什么点击”的问题，并判断 Tokun 是否适合回答。
             将 X 实质评论与获准采集的 Discord 有效痛点统一聚类为：价格/总成本、指定模型获
             取、接入迁移、Agent 工作负载、账单与供应商透明度、试用门槛、API 报错及
             Provider 差异等。跨平台去重但保留各来源独立证据。保留原意及来源；一个人的评论
             记为单个观察，不称为普遍需求。热度与购买相关性分开评分，支持记录反证。
             优先面向已有 LLM API 支出的开发者，其次是即将部署 Agent 的建设者。不要把仅有
             聊天订阅的用户都当成 API 付费用户。图中“WHO → WHAT → HOW → 转化”的逻辑
             用于 X：明确人群 → 具体承诺与证据 → 适合的素材 → 对应产品页 → 注册/充值/首个
             成功请求/重复使用；图中的 Reddit 渠道设定不转成 X 执行指令。
             不能自然连接 Tokun 能力的行业事件只留在 Organic 库。例如 Agent 记忆回滚讨论不
             能直接变成“Tokun 提供记忆安全”的广告。
             5.3 建立 Angle Card
             意义： 把宣传点写成可验证假设，而不是把 Price-led 等标签当成广告策略。
             每个 angle_id 固定记录：主要人群与使用情境、来源信号、用户问题、单一核心承诺、
             Tokun 证据及日期、反证/限制、英文主张、素材形式、CTA、落地页、主要转化事件、
             有效期、待验证问题、优先级和状态。一个角度可以累积多个版本；同义换句不算新角
             度。
             初始八个角度标签覆盖 Price-led、Model + Price-led、Integration-led、Model
             choice-led、Pricing clarity-led、Agent workload cost-led、Provider
             transparency-led、Small paid trial-led。这些是已有种子Angle/卖点标签，不是已定
             稿的一级Advertising Family分类。 保留全部既有angle_id及版本，不为了调整分类而
             重新生成Angle或让历史素材失去引用。根据新需求增删，不为了数量凑新角度。
             5.3A Advertising Taxonomy：正式分类与动态演化（15题访谈定稿）
             三个层级： Strategy Family（核心用户说服逻辑）→ Angle（单一可测试主张、受众
             及证据）→ Creative Format（独立的文字/视觉表达）。Angle只有一个
             primary_family，允许secondary_tags/use_case；仅换Hook、颜色或格式不生成新
             Angle。
             六大Family： Price-led（经济价格、计费、预算、Agent全任务成本）；Friction-led
             （接入、配置、迁移、操作阻力）；Trust-led（Transparency/透明计费与Provider可解

释性；Reliability/稳定性与错误处理，必须有适用实测）；Value-led（效率、任务产
             出、开发体验等非价格收益）；Choice-led（Model/Provider Choice、Ecosystem
             Flexibility、Vendor Independence，须确实有相应选择能力）；Trial-led（首次付费、
             试用及验证风险）。按主要购买动机判别，不能根据产品名称直接分类。
             交叉边界： Model+Price允许结合；价格是主承诺→Price，选择是主承诺→Choice，
             另一个作为辅助标签；不同主承诺才能拆成关联新Angle。Pricing Clarity若强调信息可
             信归Trust、若强调便宜归Price；Provider信息透明归Trust、可自主选择归Choice。统
             一API的接入便利归Friction、跨生态选择自由可归Choice、非价格的工作成果才归
             Value。
             八个原Angle映射与兼容： ANG-price→Price；ANG-model-
             price→pending_mapping(Price/Choice按实际主张)；ANG-integration→Friction；
             ANG-model-choice→Choice；ANG-pricing-clarity→Trust/Transparency；ANG-
             agent-cost→Price；ANG-provider→Trust/Transparency；ANG-paid-trial→Trial。
             保留所有旧ID、素材、发布版本和历史记录；Value暂无种子，不为了填满类别而创
             造。维护angle_version、taxonomy_version、mapping_history、mapping_status、
             derived_from_angle_id。
             三层准入： Pain Point保存真实可追溯且去重的X/Discord问题；Candidate Angle需明
             确受众、商业关联、独立承诺及待补证据，但可以尚无Tokun能力证明；Approved
             Angle（ready_for_creative）需来源、产品能力、限制条件、证据有效期和落地页均核
             验，并通过风险审批才能交给Stage6。相似新案例追加evidence或确需的版本变化，
             不创建重复Angle。Discord尽量每天发现≥2个真实独立痛点，不够时如实说明，不强制
             生成两张Angle；每日Angle配额另见5.4。
             风险审批： low＝可直接核验且未过期的纯事实型主张，满足硬门槛可自动交接
             Stage6；medium＝动态模型/价格和有附加条件的内容，须可靠实时核验及既定规则否
             则转人工；high＝优惠/节省率、性能、可靠性、竞品比较、客户成果，必须人工核验；
             unknown默认人工。存储risk_level、review_method、approval_status、
             evidence_ids、reviewed_at、expires_at，审核绑定特定angle_version。Stage5批准
             不等于Stage7投放授权。
             新Family： AI可随时提出proposed_family，附独立购买动机、与六大类的差异、真实
             需求证据和至少一个可测试候选Angle；人工批准/合并/延期/拒绝后才发布
             taxonomy_version，不能自行改正式分类或覆盖旧实验。
             价格优势必须采用同日、同模型版本、相同计费单位和条件对比；分别列输入/输出、缓
             存、上下文档位、批处理等条件。实际任务成本还受重试、token 用量和成功率影响。
             缺实测时可提出评估问题，不能写成节省结论。新模型热点只有在 Tokun 当日目录确认
             可用时才能进入 Model + Price 广告。
             5.4 排序与更新


Candidate Angle只需受众、具体痛点、商业关联与可测试假设，允许产品能力证据待
             补，标记needs_evidence。只有申请ready_for_creative时才过四项硬门槛：受众相
             关、产品能力证据可核验、来源可追溯、落地页兑现主张；依风险等级执行自动/人工审
             核。合格候选按受众相关度、问题具体性、产品匹配、时效、素材差异各0–2分排序；
             评分不代表效果。
             每日最多新增或实质更新 2 个角度，优先生产其中 1 个角度；无新信息只检查有效期。
             实时价格与目录在生产和投放前复核；对外价格快照默认 24 小时后过期，投放前仍须
             重查。模型/接口下架、条件变化或证据撤回时，使相关所有文案、图片与组合素材失
             效。保留历史，不覆盖旧承诺。
             本阶段交付： 信号增量、受众痛点矩阵、Tokun价值证据映射、宣传角度主库、Stage
             6创意交接包与当天变更日志。只有通过硬门槛的角度才能进入制作队列；每个进入制
             作的角度必须回答“谁的问题、Tokun哪项证据、承诺什么、点击后看什么”。
             5.5 标准交付体系：五个数据集 + 一份增量报告
             交付原则： 长期主库采用结构化记录，日报只描述增量；不将同一原始事实复制为多个
             独立来源。所有数据带稳定ID、版本、证据链接、采集时间与状态；GitHub仓库保留
             Schema、生成逻辑和脱敏样本，生产数据存放在授权的数据目录或已有Notion素材
             库。
             交付资产               最低字段                                   用途
                                pain_id、source_platform、channel、       Stage 5独立Discord研
             Discord Pain Point
                                message_id、source_url、problem、         究数据，映射到统一信
             Library（discord-
                                resolution_status、attachment_refs、     号库，不混入Stage 4
             pain-points.json）
                                evidence_status、duplicate_of           互动指标
                                signal_id、event_id、source_type、
                                source_url、post/comment_id、author、     统一Stage 4研究复用
             Ad Signal Library  published_at、collected_at、read_scope、 与Home Ads独立观
             （ad-signals.json） question、audience、evidence_status、 察；保存来源和是否真
                                dedup_key；Home广告另存ad_label_seen、 正看见广告标记
                                screenshot_ref、observed_handle
             Audience & Pain    insight_id、audience、usage_context、     将具体问题聚类，分离
             Point Matrix       pain_point、desired_outcome、            讨论热度与商业意图；
             （audience-         buying_relevance、trend_relevance、      说明观察样本规模和局
             insights.json）     signal_ids、counter_evidence、confidence 限
             Tokun Value &      evidence_id、capability、
             Evidence Map       supported_claim、source_url、
                                                                       将需求映射到真实产品
             （product-          verified_at、scope_or_limit、expires_at、
                                                                       能力；动态价格/模型目
             evidence.json）     approval_status、affected_angle_ids
                                                                       录变化时推动下游失效



交付资产                 最低字段                                  用途
                                  angle_id、version、audience、context、
                                  pain_point、signal_ids、insight_id、
                                  evidence_ids、single_claim、            Stage 5核心策略资
             Angle Card Library
                                  english_message、creative_direction、   产；供Stage 6生成文
             （angles.json）        cta、landing_url、primary_event、        案与视觉方案
                                  score_breakdown、status、verified_at、
                                  expires_at

             当日增量报告                                     供人工审核和运营复
             （stage5-daily-       运行时间和数据窗口、新增/更新/失效记录、 盘；没有变化可只记录
             report.md）
                                  证据缺口、已排序角度、推荐交接及跳过原因 运行状态，不强行产生
                                                        新角度
             Stage 6接口： 除上述长期主库外，每次交接输出 stage5-handoff.json ，这是从 angles
             主库筛出的引用清单而非第五份重复主库。至少包括 handoff_id、created_at、
             angle_id/version、evidence_ids、claim、audience、CTA、landing_url、
             primary_event、creative_direction、required_qualifiers、expires_at、
             handoff_status。只有状态为ready_for_creative且证据仍有效、落地页兑现承诺的角
             度可以列入制作任务；若为0项则输出空数组与原因。Stage 6不得自行把
             needs_evidence变为已批准。

             5.6 Angle Card模板与评分规则
             每张Angle Card应能独立解释完整商业假设，使用以下可读字段：
              1. 身份：稳定angle_id、angle_version、taxonomy_version、primary_family、
                 secondary_tags、mapping_history、来源signal_ids、是否从旧Angle派生及其映
                 射状态。
              2. WHO / WHY：主要人群、具体工作负载/场景、原始用户问题、想达到的结果、购
                 买相关性、与泛AI热点的区别。
              3. VALUE / PROOF：Tokun可兑现能力、单一核心承诺、证据ID/来源/核验时间、反
                 例与适用范围、尚待产品确认项。
              4. HOW / CTA：一句英文核心信息（宣传方向，不是三版正式文案）、视觉信息结构
                 建议、CTA、能兑现承诺的具体落地链接、主要下游事件。
              5. PRIORITY / LIFECYCLE：硬门槛判定、五维分数、排名、状态、到期时间、影响
                 的文案/图片ID、版本变更说明。
             两步排序： 第一步检查四项硬条件：目标受众相关、Tokun证据已核验、来源可追溯、
             落地页可兑现。未满足任一项保留Candidate并标记needs_evidence，不参与
             ready_for_creative排名；具备证据后按low/medium/high风险审查是否允许交接。第



二步仅在合格集合内按五维评分：受众相关度、问题具体性、产品匹配度、时效性、与
             已有素材差异性，各0–2分，总分10分。每个评分须附简短依据。评分是待制作队列的
             相对优先级，不代表广告效果，不设未经验证的“8分必胜”门槛；同分时优先证据更完整
             且更近期者。
             生命周期： new/needs_evidence → ready_for_creative → handed_off → testing →
             retained/revise/retired；证据过期、目录/条件变动时标记expired并关联需要复核的下
             游素材。历史版本不可覆盖。仅改变同义词不创建新angle_id；核心人群、承诺或使用
             场景发生实质变化时记录版本依据并评估是否应新建角度。
             5.7 固定运行顺序与异常处理
             1. Preflight：读取目标账号、上次Home Ads入口核验证据、Stage 4最新Signals与
                索引、产品事实版本和Angle旧库。广告入口按账号管理；未观察到Ads标记可继续
                研究/草稿，但不得登记为“入口已核验”。
             2. 数据读取：优先读取24小时Stage 4研究，不足扩展72小时，evergreen单列；
                Home实际Ads观察另存证据卡。并行执行5.1A的Discord补充研究（目标每日2个独
                立有效痛点），记录实际数量、来源和权限情况。只有缺少关键证据才定向补采，不
                重复全量爬取。
             3. 信号清洗与归类：按平台帖子/评论ID、event_id、语义事件去重；竞品帖子只读，
                来源明确区分原帖事实、评论观点、官方产品事实与推测。
             4. 聚类需求：保留独立作者/讨论数与反例；对价格/成本、模型可用性、接入、Agent
                使用、账单、试用等进行分类，分开判断热度、购买相关性与目标人群。
             5. 匹配证据：核对最新Tokun官网/docs或产品负责人确认的证据。动态价格、模型和
                限制需核对采集时间；无法验证就转needs_evidence，不作性能/省钱承诺。
             6. 更新Angle：检索同义旧角度，优先做版本化更新；硬门槛检查后五维评分，保留评
                分理由、反证和失效条件。每日最多新增或实质更新2个Angle，优先交接1个。
             7. 交接：对ready_for_creative角度生成handoff文件，验证字段、证据、链接、有效
                期；再更新主库和日报。任何生成/上传失败均保留已成功的上游成果，不将失败当
                作无需求。
             8. 变更传播：模型下架、价格更新、证据撤回或落地页失效时，输出
                affected_asset_ids与复核任务；不要静默替换已经投放的冻结素材版本。
             异常状态： Stage 4缺数据→input_missing，可回退经标明时效的历史资料；来源打不
             开→source_unavailable；证据不足→needs_evidence；产品条件过期→expired；同
             义重复→merged_into_existing；没有合格角度→empty_handoff。以上都不是自动投
             放授权。不得因来源抓取失败将缺失改为0或伪造依据。


5.8 MVP验证与完成标准
             使用真实且可访问的Stage 4历史研究样本作为输入，并配置脱敏固定样本进行自动回
             归；本轮无需公开发帖、制作广告图或启动投放。
             测试           验收
             复用与去重        输入已采集信号，不重复抓取或重复创建相同event_id；支持增量重跑
             Discord社区采   经授权读取消息与附件、提取上下文、隐私检查、跨消息去重；不足2个有效
             集            痛点时如实记录而非凑数
             需求聚类         相似需求合并但保留每条来源，不将单条评论称为普遍需求
             无依据主张        无Tokun证据、虚构性能或不匹配产品能力时不能进入ready_for_creative
             重复角度         同义表达更新旧角度，不新增无意义angle_id
             过期传播         价格或目录过期时能识别对应Angle和受影响下游资产
             Stage 6交接    handoff满足JSON Schema；允许合法空输出并解释原因
             入口状态         Home Ads证据缺失时不虚报已核验，更不能推断Ads账户可投
             完成标准： Stage 5可独立接收Stage 4的新输入，生成并维护以上结构化资产；可以输
             出至少一张通过审查的Angle Card（前提是存在合格候选），也可以合理地输出零张；
             记录来源、评分、证据缺口、失效状态、版本和Stage 6交接结果。自动化测试通过与
             业务内容审核分别记录，广告CTR/CAC等效果留待Stage 7–8真实实验验证。
             5.9 MVP实跑验收记录
             @2026年10月29日 完成Stage 5 MVP实现与验证。本轮未发帖、未制作新图片、未启
             动投放，未改变现有定时任务。
               自动化：13项固定回归全部通过，覆盖5.8的7类验收；去重重跑、保留来源的聚
               类、无依据主张拦截、同义角度沿用、过期关联文案/图片/组合、合法空交接与
               JSON Schema、Home入口隔离均已验证。
               真实复用：10月28–29日Stage 4记录生成33条信号（含1条独立Home Ads观察）、
               5个需求簇；保留8个原有angle ID，仅integration、agent-cost更新至v2。真实复
               跑四个主库不变，无新角度版本。未重新抓取X。
               业务审核通过1项：ANG-integration v2，7/10，仅宣传公开文档提供的
               OpenAI/Anthropic客户端接入路径，限支持模型及端点、需预付余额。证据为本日
               重新读取的Tokun公开文档，未做认证API测试；不承诺全功能兼容、迁移时长、性
               能或节省。Stage 6交接1项，CTA为Read the quickstart。
               业务拦截：ANG-agent-cost v2缺少相同质量门槛下的真实账单/任务实测，保持
               needs_evidence；其余6个种子角度仍未批准。DPP和Agent记忆讨论不包装成
               Tokun能力。


入口复用16:26的账号Home截图；已见Ad只证明内部流程入口，不证明广告资格和
               预算授权。交接launch_authorized=false。
               本地四主库、交接和日报已保存；实现、Schema、脱敏回归样本与测试日志位于
               项目ads/stage5，详细报告为ads/reports/2026-10-29-stage5-mvp.md。未推送
               GitHub。
               MVP边界：语义聚类、semantic_key和产品主张来自经过审阅的输入映射；未知信
               号保留待分类。未实现自主语义判断、自动官网变更发现或持续调度。文档内部复
               核期7天，价格/目录仍须同日核验；测试通过不等于广告效果成立。
             结果同步至 广告宣传点与素材库｜每日更新。
```
