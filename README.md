# Tokun X Growth

Tokun X Growth 是面向 Tokun X（Twitter）增长运营的 Codex Agent Skill 单仓库。项目以一个可发现的 Master Skill 为唯一入口，将账号研究、Founder Organic 运营、广告情报、创意生产、广告实验、数据归因与策略迭代组织为八阶段工作流，并通过统一数据契约、运行状态与非生产测试逐步集成。

当前版本为 **v0.1.0 — Master Skill Architecture + Organic Integration**。Phase 0 已完成基础架构与 Stage 4 集成；它不是完整广告投放系统。

> [!IMPORTANT]
> **Stage 4 已有真实业务执行记录，并已完成 Phase 0 非生产代码集成与回归测试。Stage 5–8 目前只有职责、接口和测试设计，不可执行。** 仓库不包含 X 发布器、X Ads 客户端、支付连接或 PostHog 写入器。

## 核心能力

- **单一 Master Skill 入口**：Codex 只需发现 [`.agents/skills/tokun-x-growth/SKILL.md`](.agents/skills/tokun-x-growth/SKILL.md)，再按任务渐进式加载对应 Workflow。
- **八阶段统一编排**：支持查看完整流程、规划单阶段或子任务、复用上游数据、记录断点与失败状态。
- **已验证 Organic 逻辑迁移**：保留账号核验、研究复用、候选筛选、竞品隔离、内容约束、去重、结果核验和 A–E 日报规则。
- **标准化数据交接**：Stage 4 研究信号通过 JSON Schema 交给 Stage 5，避免同一事件被重复采集或重复计数。
- **证据边界可追踪**：明确区分业务实操、代码集成、自动化测试与尚待验证的能力，不以 SOP 或 Prompt 的存在代替成功证据。
- **安全的人机协作边界**：公开发布、广告创建、预算变更、消费及破坏性分析写入均要求即时人工批准；Phase 0 测试不会触发外部生产操作。

## 八阶段完整 Workflow

```mermaid
flowchart TD
    S1["Stage 1 · 业务目标与增长约束<br/>配置基础"]
    S2["Stage 2 · 竞品与用户研究<br/>配置 / 参考"]
    S3["Stage 3 · 账号定位与 Profile<br/>配置基础"]
    S4["Stage 4 · Founder Organic 运营<br/>实操验证 + Phase 0 集成"]
    S5["Stage 5 · 广告情报与宣传角度<br/>契约待开发"]
    S6["Stage 6 · 文案、图片与素材库<br/>契约待开发"]
    S7["Stage 7 · 广告实验与投放<br/>契约待开发"]
    S8["Stage 8 · 数据归因与策略迭代<br/>契约待开发"]

    S1 --> S2
    S1 --> S3
    S2 --> S3
    S1 --> S4
    S2 --> S4
    S3 --> S4
    S4 -->|"标准化 signals"| S5
    S5 -->|"经审核的 angle cards"| S6
    S6 -->|"creative manifest"| S7
    S4 -->|"Organic 数据链"| S8
    S7 -->|"实验与平台数据链"| S8
    S8 -.->|"洞察与新假设反哺下一轮"| S5

    classDef config fill:#EFF6FF,stroke:#2563EB,stroke-width:1.5px,color:#1E3A8A
    classDef integrated fill:#DCFCE7,stroke:#16A34A,stroke-width:2px,color:#14532D
    classDef planned fill:#F8FAFC,stroke:#64748B,stroke-width:1.5px,stroke-dasharray:5 5,color:#334155
    class S1,S2,S3 config
    class S4 integrated
    class S5,S6,S7,S8 planned
```

### 状态口径

项目用三条状态线描述完成度，避免把“做过”“接入代码”和“测试通过”混为一谈：

| 状态维度 | 含义 |
| --- | --- |
| 业务验证 | 是否存在可核查的实际运行记录，以及记录证明了哪些动作 |
| 代码集成 | 对应模块是否已有可调用实现，而不只是文档或接口 |
| 自动化测试 | 是否有固定样本、断言和非生产测试覆盖 |

| 阶段 | 业务验证 | 代码集成 | 自动化测试 | 当前可执行性 |
| --- | --- | --- | --- | --- |
| Stage 1 | 现有业务配置可供引用 | 配置基础，未重新实现 | 结构与依赖校验 | 不可独立执行 |
| Stage 2 | 现有研究可供引用 | 配置 / 参考，未重新实现 | 结构与依赖校验 | 不可独立执行 |
| Stage 3 | 现有定位信息可供引用 | 配置基础，未重新实现 | 结构与依赖校验 | 不可独立执行 |
| **Stage 4** | **已验证 3 条回复、2 次点赞、账号核验、竞品隔离、日报与去重更新；其他动作仍待验证** | **研究、Organic 决策、Reporting 与非生产调度已集成；无在线发布器** | **历史样本回归 3/3 通过** | **仅可运行非生产 dry-run 回归** |
| Stage 5 | 未验证 | 仅接口契约 | 状态与依赖校验 | `not_implemented` |
| Stage 6 | 未验证 | 仅接口契约 | 状态与依赖校验 | `not_implemented` |
| Stage 7 | 未验证 | 仅接口契约；无支付或广告连接 | 状态与依赖校验 | `not_implemented` |
| Stage 8 | 未验证 | 仅接口契约；未连接 PostHog / X Ads | 状态与依赖校验 | `not_implemented` |

完整节点登记与验收标准见 [`docs/skill-registry.md`](docs/skill-registry.md)，状态机定义见 [`config/stages.json`](config/stages.json)。

## 阶段职责、输入输出与依赖

| 阶段 | 主要职责 | 核心输入 | 标准输出 | 依赖与批准 |
| --- | --- | --- | --- | --- |
| 1. 业务目标 | 固化产品、受众、增长目标、漏斗与预算约束 | Tokun 产品事实、账号清单、业务目标 | Goal Card、未知项清单 | 无上游；业务负责人确认预算 |
| 2. 竞品研究 | 构建竞品、用户问题和市场信号证据 | Stage 1、已核验 X 账号、原帖 / 评论、产品来源 | Evidence Cards、痛点、内容机会 | Stage 1；保留访问范围与证据限制 |
| 3. 账号定位 | 定义 Founder 账号角色、Profile 与置顶内容方案 | Stage 1–2、品牌素材、当前 Profile | Bio / 视觉 / Profile 方案 | 身份与 Profile 写入需人工批准 |
| 4. Organic | 研究热点、筛选互动、生成内容、核验结果、输出日报 | Stage 1–3、账号状态、账号池、竞品排除、去重索引、X 证据 | 决策与动作记录、A–E 日报、标准化 Signals | 公开动作需当前授权、账号核验与结果复核 |
| 5. 广告情报 | 聚类需求与事件，生成可追溯宣传角度 | Stage 4 Signals、产品事实、受众定义 | Angle Cards 与优先级 | Stage 4；所有 Claim 必须有证据 |
| 6. 创意生产 | 生成文案、图片、落地页 / UTM 对齐与素材清单 | 已批准 Angle Cards、品牌与落地页快照 | Creative Variants、Creative Manifest | Stage 5；事实、视觉与文案审核 |
| 7. 广告实验 | 规划并在授权后执行广告实验 | 账户资格、Creative Manifest、定向、预算、排期、止损规则 | 平台 ID、状态时间线、配置与数据快照 | Stage 6；金额和时间窗需即时人工批准 |
| 8. 分析迭代 | 分开核验 X 与 PostHog 数据链，完成归因与下一轮假设 | Stage 4 / 7 数据、事件字典、UTM 映射、归因窗口 | 指标、归因覆盖、报告、下一轮假设 | Stage 4 和 / 或 Stage 7；先验证来源与事件定义 |

更完整的触发条件与上下游关系见 [`docs/workflow-dependencies.md`](docs/workflow-dependencies.md)。

## 各阶段执行说明

### 1. 业务目标与增长约束

**目标**：把产品事实、核心受众、转化事件、内容边界和预算约束固化为后续阶段可引用的配置，避免不同节点各自猜测业务目标。

**执行要点**：

1. 明确 Tokun 当前可证明的能力、目标用户与禁止使用的宣传表述。
2. 定义 X 运营的 CTA、目标事件、漏斗位置与未知项。
3. 为预算或身份相关信息保留人工确认点。

**Phase 0 边界**：只保留配置依赖，没有独立可执行模块，不应被调度器标记为已完成。

### 2. 竞品、用户与市场研究

**目标**：从已核验的 X 原帖、评论及产品来源中提取可追溯证据，形成用户问题、竞品信号和内容机会。

**执行要点**：

1. 记录原始链接、作者、发布时间、采集时间、可见指标与实际访问范围。
2. 将搜索摘要只作为发现入口，结论必须回到实际可见的原帖或评论。
3. 隔离竞品官方 / Founder 账号及其完整讨论串；不确定的竞品身份进入待核验状态。
4. 按平台 ID、事件 ID 和语义事件键去重。

详细研究规则见 [`workflows/research.md`](.agents/skills/tokun-x-growth/workflows/research.md)。

### 3. Founder 账号定位与 Profile

**目标**：基于 Stage 1–2 定义账号身份、内容角色、Bio、视觉与置顶内容方向，为 Stage 4 提供稳定的表达边界。

**执行要点**：

1. 将品牌事实与 Founder 身份分开核验。
2. 输出 Profile 方案，而不是自动写入线上账号。
3. 任何身份、Bio、头像、Banner 或置顶内容修改都需人工批准。

**Phase 0 边界**：配置基础，没有 Profile 写入实现或独立回归样本。

### 4. Founder Organic 冷启动与日常互动

Stage 4 是 Phase 0 唯一完成代码集成的业务阶段，内部拆分为 **Research、Organic Decision、Reporting**，三者共享同一批规范化信号，不会为了交接 Stage 5 重新执行整轮研究。

```mermaid
flowchart LR
    A["Preflight<br/>时区、账号、健康状态、历史索引"] --> B{"当日研究<br/>仍新鲜且覆盖充分?"}
    B -->|"是"| C["复用上游研究"]
    B -->|"否"| D["定向补充研究"]
    C --> E["候选筛选与竞品隔离"]
    D --> E
    E --> F["内容草拟与事实 / 长度 / 语气检查"]
    F --> G{"是否具备当前授权<br/>与在线执行能力?"}
    G -->|"否"| H["保留决策或进入非生产回归"]
    G -->|"是：未来适配器"| I["执行后核验 URL、正文、账号、线程"]
    H --> J["A–E 日报、去重索引、Signals"]
    I --> J
    J --> K["Stage 5 数据交接"]

    classDef read fill:#EFF6FF,stroke:#2563EB,stroke-width:1.5px,color:#1E3A8A
    classDef decision fill:#FEF3C7,stroke:#D97706,stroke-width:1.5px,color:#78350F
    classDef output fill:#DCFCE7,stroke:#16A34A,stroke-width:1.5px,color:#14532D
    class A,B,C,D read
    class E,F,G,H,I decision
    class J,K output
```

**保留的已验证执行路径**：

1. 核验日期、时区、实际登录 Handle、账号健康、当日运行状态、历史 ID / 主题和产品事实新鲜度。
2. 在覆盖范围足够时复用同日研究；不足时只做定向补充。
3. 从多个账号中筛选最多 5 个候选，区分回复原帖与回复具体评论，并保留直接目标链接。
4. 排除竞品讨论串、机器人、空洞赞美、广告、求职、纯推广和低价值冲突，不为凑数量强行互动。
5. 最多草拟 1 条原创内容和 3 条实质互动；不虚构经验、测试、客户、身份或结果。
6. 线上动作前复核事实、日期、语气、长度、目标、账号、去重和来源；动作后核验公开结果。结果不确定时先查询外部状态，不盲目重试。
7. 输出 A–E 日报，再更新候选、竞品、主题和去重索引；缺失信息保持 `unknown`。

**验证结果与边界**：2026-10-29 的实操记录证明了 `@jjaywil` 账号核验、同日研究复用、3 条实质回复、3 个可访问结果 URL、2 次来源点赞、竞品隔离、日报及去重更新。原创 Post、Quote、Repost、回复特定评论的实际结果、连续多日调度、受限恢复、后续跟进及 PostHog 归因仍待验证。Phase 0 回归没有执行任何新的公开动作。

执行细节见 [`workflows/organic.md`](.agents/skills/tokun-x-growth/workflows/organic.md)，证据与测试结论见 [`docs/phase-0-validation-report.md`](docs/phase-0-validation-report.md)。

### 5. 广告情报与宣传角度

**目标**：复用 Stage 4 Signals，聚类行业事件与用户问题，将其转化为有证据、有效期和优先级的宣传角度。

**计划流程**：Signals 去重与聚类 → 对齐目标受众 → 匹配 Tokun 产品证据 → 记录反证与有效期 → 输出 `ready | needs_evidence | rejected` Angle Cards。

**当前状态**：仅有输入输出契约和验收定义，没有聚类或 Angle Card 生成实现，不会被调度器执行。详见 [`workflows/ad-intelligence.md`](.agents/skills/tokun-x-growth/workflows/ad-intelligence.md)。

### 6. 广告文案、图片与素材库

**目标**：从已批准的 Angle Card 生成版本化文案、图片 Brief / 素材、CTA、落地页与 UTM 映射，并形成 Creative Manifest。

**计划流程**：角度批准 → 文案与视觉变体 → 事实及图中文字检查 → 落地页一致性检查 → UTM / ID 分配 → 版本化 Manifest。

**当前状态**：仅有契约，没有素材生成流水线或发布能力。详见 [`workflows/creative.md`](.agents/skills/tokun-x-growth/workflows/creative.md)。

### 7. 广告实验、定向与授权投放

**目标**：在账户资格、创意、受众、预算、排期、追踪和止损规则齐备后，执行可审计的广告实验。

**计划流程**：读取最新账户资格 → 生成 Approval Card → 人工确认金额与时间窗 → Mock 验证 → 幂等提交 → 记录平台 ID、状态时间线与数据快照。

**当前状态**：仅有契约；没有连接 X Ads、支付或广告消费。未来实现也必须先使用 Mock，并在每次真实花费前取得即时授权。详见 [`workflows/ads-execution.md`](.agents/skills/tokun-x-growth/workflows/ads-execution.md)。

### 8. PostHog 归因、复盘与策略迭代

**目标**：分别验证 X 平台 / 内容 / 广告数据链和 PostHog 网站 / 产品行为数据链，再通过明确映射计算归因覆盖与下一轮实验假设。

**计划流程**：验证事件与身份定义 → 检查数据新鲜度 → 分别聚合两条数据链 → 通过 UTM / Experiment ID 连接 → 保留未知与口径差异 → 输出日报 / 轮次 / 周报及最多 3 个待确认假设。

**当前状态**：仅有契约；没有 PostHog 或 X Ads 连接器，也不会修改 Dashboard。详见 [`workflows/analytics.md`](.agents/skills/tokun-x-growth/workflows/analytics.md)。

## Master Skill 架构

```mermaid
flowchart TB
    U["Codex / 使用者"] --> M["唯一入口<br/>SKILL.md"]
    M --> R["按需加载 Workflows"]
    M --> C["阶段状态与 Registry"]
    R --> O["轻量 Orchestrator"]
    C --> O
    O --> S4["Stage 4 可执行模块<br/>Research · Organic · Reporting"]
    O -.-> P["Stage 5–8<br/>Contract Only"]
    S4 --> D["共享 Contracts 与 JSON Schemas"]
    D --> T["Fixtures · Regression · Validation"]
    S4 --> H["标准化 Signals<br/>Stage 5 Handoff"]

    classDef entry fill:#EDE9FE,stroke:#7C3AED,stroke-width:2px,color:#4C1D95
    classDef ready fill:#DCFCE7,stroke:#16A34A,stroke-width:1.5px,color:#14532D
    classDef planned fill:#F8FAFC,stroke:#64748B,stroke-width:1.5px,stroke-dasharray:5 5,color:#334155
    class M entry
    class O,S4,D,T,H ready
    class P planned
```

Master Skill 先读取阶段状态，再只加载与当前任务相关的 Workflow 和 Schema。详细 SOP 不复制进主入口，从而保持上下文精简并避免未开发模块被误调用。调度器对 Stage 5–8 返回 `not_implemented`；对不符合 Phase 0 条件的 Stage 4 执行请求返回 `blocked_pending_approval`。

架构设计见 [`docs/architecture.md`](docs/architecture.md)，数据兼容规则见 [`docs/data-contracts.md`](docs/data-contracts.md)。

## 目录结构

```text
tokun-x-growth/
├── .agents/skills/tokun-x-growth/
│   ├── SKILL.md                 # 唯一对外 Master Skill 入口
│   └── workflows/               # 六类按需加载的执行 / 契约文档
├── src/
│   ├── modules/
│   │   ├── research/            # Stage 4 信号规范化与去重
│   │   ├── organic/             # Stage 4 资格门控与候选决策
│   │   ├── reporting/           # Stage 4 日报和交接
│   │   └── {intelligence,creative,ads,analytics}/
│   │                               # Stage 5–8 契约占位，不可执行
│   ├── orchestrator/            # 状态、规划与 dry-run 调度
│   └── shared/                  # ID 与契约辅助逻辑
├── schemas/                     # Signal、Organic Report、Run State
├── config/                      # 阶段状态与竞品排除配置
├── tests/                       # Stage 4 历史样本回归
├── scripts/                     # 仓库结构与契约验证
├── docs/                        # 架构、依赖、Registry、Roadmap 与报告
└── .github/workflows/validate.yml
                                    # 非生产 GitHub Actions
```

### 数据契约

- [`schemas/signal.schema.json`](schemas/signal.schema.json)：研究信号，至少包含 `signal_id`、`event_id`、来源 / 作者 / 链接、发布时间与采集时间、行业事件、用户问题、目标受众、证据状态、去重键和实际访问范围。
- [`schemas/organic-report.schema.json`](schemas/organic-report.schema.json)：账号核验、动作结果、候选、竞品研究、选题、覆盖范围与失败项。
- [`schemas/run-state.schema.json`](schemas/run-state.schema.json)：运行状态、不可变输入输出 Artifact ID 和恢复检查点。

契约版本 `1.0.0` 允许新增可选字段；删除必填字段、改变字段语义或收窄枚举需要提升主版本并增加兼容性测试。`handoff.stage_5_ready` 只表示结构可被 Stage 5 读取，不代表宣传 Claim 已获批准。

## 安装与 Codex 调用

### 环境要求

- Git
- Node.js 22 或更高版本
- 可读取项目内 `.agents/skills/` 的 Codex 环境

### 克隆与验证

```powershell
git clone https://github.com/ccyq12138-cell/tokun-x-growth.git
cd tokun-x-growth
npm test
npm run validate
```

仓库是私有项目，克隆前需要获得对应 GitHub 访问权限。

### 在 Codex 中调用

在 Codex 中打开仓库根目录。Codex 会从 `.agents/skills/tokun-x-growth/SKILL.md` 发现唯一入口；可以显式引用 Skill，也可以用自然语言指定阶段或子任务。

```text
$tokun-x-growth 查看当前八阶段状态和可执行边界。

$tokun-x-growth 规划 Stage 4 Organic 运行，但不要执行任何公开操作。

$tokun-x-growth 使用历史 fixture 执行 Stage 4 非生产回归，并检查 Stage 5 handoff signals。

$tokun-x-growth 说明 Stage 5 的输入输出契约和待开发项，不要实现或执行广告操作。
```

### Orchestrator 命令

```powershell
# 查看全部阶段状态
node src/orchestrator/index.mjs status

# 查看单阶段依赖与可用性
node src/orchestrator/index.mjs plan --stage 4
node src/orchestrator/index.mjs plan --stage 5

# 唯一允许的 Phase 0 执行路径：历史 fixture 非生产回归
node src/orchestrator/index.mjs run --stage 4 --task regression --dry-run
```

调度器不会把契约占位模块当成可执行功能，也不会通过这些命令发布 X 内容、创建广告、消费预算或写入 PostHog。

## 测试与质量检查

```powershell
# Stage 4 回归测试
npm test

# 仓库结构、Schema、ID、依赖、状态、唯一入口和密钥模式检查
npm run validate
```

当前 Stage 4 回归覆盖：

1. 历史成功样本能选出 3 个合格互动，排除竞品讨论串，保留 3 个已核验公开回复 URL，并生成可供 Stage 5 读取的信号。
2. 登录账号与预期 Handle 不一致时阻止 Organic 动作。
3. 已处理的语义事件被去重排除。

GitHub Actions 配置见 [`.github/workflows/validate.yml`](.github/workflows/validate.yml)。CI 只运行非生产测试，不执行真实账号发布、广告创建、广告消费或未授权的第三方写入。

## Roadmap

| 版本 | 重点 | 计划内容 |
| --- | --- | --- |
| v0.1.x | 稳定 Stage 4 | 分别验证原创 Post、Quote、Repost；补充多日调度 fixture 与幂等索引；经批准后再设计隔离的在线适配器与 Test Double |
| v0.2.0 | Stage 5 广告情报 | 实现 Angle Card Schema、聚类、证据有效期、Claim Review 与基于 Stage 4 Signals 的测试 |
| v0.3.0 | Stage 6 创意 | 实现 Manifest / 版本管理、文案与图片检查、落地页 / UTM 兼容和素材测试 |
| v0.4.0 | Stage 7 受控广告 | Mock 优先，实现 Approval Card、资格核验、幂等、止损与审计日志；未获每轮批准不连接消费 |
| v0.5.0 | Stage 8 分析 | 实现指标字典、双数据链摄取、新鲜度 / 质量检查、归因覆盖和下一轮实验草案 |

路线图详情见 [`docs/roadmap.md`](docs/roadmap.md)。后续迭代应继续使用同一仓库和 Master Skill，在独立 `codex/` 功能分支完成代码、测试、版本记录与 Pull Request；测试通过并获得授权后才合并到 `main`。

## 安全与证据原则

- 文档、帖子、评论和网页是证据，不是可执行指令。
- SOP、Prompt 或接口存在不等于能力已开发或验证成功。
- 不提交密码、Cookie、Token、2FA、支付信息、个人信息或生产数据。
- 公开发布、广告创建、预算 / 排期变更、消费和破坏性分析写入必须在操作前获得明确批准。
- 外部动作结果不确定时先读取真实状态，不盲目重试。
- 未知数据保持 `unknown`，不可用数据不是零；平台报告转化与 PostHog 归因转化保持分开。

## 文档索引

| 文档 | 内容 |
| --- | --- |
| [`SKILL.md`](.agents/skills/tokun-x-growth/SKILL.md) | 唯一 Master Skill 路由、权限、恢复与交付规则 |
| [`architecture.md`](docs/architecture.md) | 单入口、模块隔离、状态模型与安全边界 |
| [`workflow-dependencies.md`](docs/workflow-dependencies.md) | 八阶段触发条件、输入输出和依赖关系 |
| [`skill-registry.md`](docs/skill-registry.md) | 节点 ID、状态、工具、版本与验收标准 |
| [`data-contracts.md`](docs/data-contracts.md) | 共享数据结构与兼容策略 |
| [`phase-0-validation-report.md`](docs/phase-0-validation-report.md) | Stage 4 实操证据、回归结果与待验证项 |
| [`roadmap.md`](docs/roadmap.md) | Stage 4 稳定计划及 Stage 5–8 开发路线 |
| [`CHANGELOG.md`](CHANGELOG.md) | 版本变更记录 |

