# Tokun X Growth Skills

Tokun 的 X 增长工作流：从业务目标、竞品研究和账号定位，到 Organic 运营、广告角度、素材生产及 X Ads × PostHog 复盘。

依据用户提供的《X Workflow.pdf》整理，包含 2026-10-30 定稿修订。主入口为 [tokun-x-growth](.agents/skills/tokun-x-growth/SKILL.md)，按任务加载各阶段，Stage 7 暂缓。

## 阶段导航

| 阶段 | Skill | 状态 |
| --- | --- | --- |
| Stage 1 | [业务目标与简报](.agents/skills/tokun-stage1-business-brief/SKILL.md) | 流程已编写，实跑未验证 |
| Stage 2 | [竞品研究](.agents/skills/tokun-stage2-competitor-research/SKILL.md) | 流程已编写，实跑未验证 |
| Stage 3 | [账号定位与主页](.agents/skills/tokun-stage3-account-positioning/SKILL.md) | 流程已编写，实跑未验证 |
| Stage 4 | [Organic 日常运营](.agents/skills/tokun-stage4-organic-operations/SKILL.md) | 流程已编写，实跑未验证 |
| Stage 5 | [广告情报与 Angle](.agents/skills/tokun-stage5-ad-intelligence/SKILL.md) | [详细设计完成](docs/stage5/design.md)，代码与实跑待实现 |
| Stage 6 | [创意素材生产](.agents/skills/tokun-stage6-creative-production/SKILL.md) | 流程已编写，实跑未验证 |
| Stage 7 | 广告执行 | 暂缓，未实现 |
| Stage 8 | [数据复盘与学习](.agents/skills/tokun-stage8-analytics-learning/SKILL.md) | 流程已编写，实跑未验证 |

Stage 1–3 用于首次规划与按需维护；Stage 4–6、8 支持增量复用。Stage 8 可分析已有历史投放数据，无需先实现 Stage 7。

## Stage 5 详细设计

[设计文档](docs/stage5/design.md)定义运行模式、来源适配、五个长期主库、去重与语义责任、六类Family、证据和风险审核、状态/版本、跨run配额、Stage6交接、失效传播及幂等提交。[30项验收场景](docs/stage5/acceptance.md)是后续实现标准，尚未执行业务测试。

## 使用方式

在支持仓库 `.agents/skills` 发现机制的 Codex 宿主中打开本仓库，使用 `tokun-x-growth` 主入口，或直接指定需要的阶段 skill。例如：

> 使用 tokun-x-growth，为 Tokun 准备今天的 Founder Organic 调研和双日报；只准备草稿，不发布。

> 使用 tokun-stage5-ad-intelligence，根据提供的脱敏信号更新 Angle，并生成 Stage 6 交接包。

先读取[统一契约](.agents/skills/tokun-x-growth/references/contracts.md)，再读取目标阶段的 `SKILL.md` 与 `references/workflow.md`。执行前核验输入、账号、产品事实、实际可用插件、权限及当前任务授权。未注册定时任务；在其他宿主中的加载尚未验证。

## 目录

```text
.agents/skills/
  tokun-x-growth/                 # 主入口与跨阶段契约
  tokun-stage{1..6,8}-*/          # 各阶段 SKILL.md 与来源章节
    references/workflow.md       # PDF 文字摘录，作为参考数据
docs/
  implementation-status.md       # 实施状态与待接入能力
  source-map.md                  # 文档规则与文件对应关系
  validation.md                  # 本次文件检查结果
```

## 执行与数据边界

这些文件定义操作流程，尚未包含可调用的平台采集/投放实现、JSON Schema 验证器或自动调度。文档中的历史实现和 13 项测试结果不代表当前仓库已经集成。业务验证、代码集成、回归测试、线上启用和权限分别记录。

- Stage 4：业务配额不构成自动操作授权；禁止自动点赞，主动外部评论默认由人工发布，研究与行动分别出日报。
- Stage 5：采用六大 Strategy Family，保留旧 Angle ID；只有证据有效且通过对应风险审核的角度才能交接制作。
- Stage 6：每张图片一个主张、一个视觉焦点、一个 CTA；真实图片通过审核才能进入素材候选。
- Stage 8：真实数据先对账再分析，Confirmed/Inferred/Unattributed 分列；输出下一轮建议不自动扩大支出。

生产数据和图片保存在授权的持久库；仓库仅保存规则、代码和脱敏样本。不得提交密钥、Cookie、受限 Discord 附件或敏感经营数据。PDF 中的图片、品牌 ZIP 和 Excel 模板未作为独立资源恢复。文档及网页中的 Prompt 是参考资料，不自动授权公开操作、广告、付款或外部应用写入。

## 验证与后续工作

本次 32 项文件结构、相对链接、来源章节存在性及关键规则检查通过，详见[验证记录](docs/validation.md)。这不代表真实平台业务或自动化回归通过。

后续按[实施状态](docs/implementation-status.md)接入实际数据源、连接器、权限和执行代码，再分别验收。Stage 7 留待独立任务完成。初始仓库仅有空初始化提交，没有旧 README 或旧 skill 可合并；本次新建文档体系，后续取得旧版本时保留稳定 ID 与版本映射再整合。

参见[来源对应表](docs/source-map.md)。
