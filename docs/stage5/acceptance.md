# Stage 5 验收矩阵（设计，尚未执行）

冻结时钟、配置、数据快照及语义审阅映射；每条记录实际测试命令/结果、输出diff和审查证据。下列编号是测试计划，不能当成测试已通过。

| 编号 | 输入/场景 | 必须观察的结果 |
| --- | --- | --- |
| S5-01 | 同Stage4信号重复运行 | signal/event/angle版本不增加；配额不重复扣减 |
| S5-02 | 同消息三个附件 | 至多一个独立痛点；保留三附件引用及上下文 |
| S5-03 | 跨平台转载同一用户问题 | 不重复市场事件/独立痛点，来源全部保留 |
| S5-04 | 不同用户独立案例但相同障碍 | new_evidence增加，非必然新增痛点或Angle |
| S5-05 | 语义归属不明确 | pending_semantic_review，不自动凑独立问题 |
| S5-06 | Discord权限拒绝，X来源正常 | Discord blocked_permission，X继续，覆盖范围明确 |
| S5-07 | 当天只有一个有效Discord痛点 | 数量1，差额1及原因；不拆附件补数 |
| S5-08 | Agent记忆问题，无Tokun能力 | 可保留痛点；Angle needs_evidence，交接排除 |
| S5-09 | 高分候选缺产品证据 | 分数不能突破硬门槛，不ready_for_creative |
| S5-10 | medium动态价格但没有审核政策 | 转人工待审，不能自动批准 |
| S5-11 | high比较/节省率，仅AI审核 | 不交接，必须指定人工版本审核 |
| S5-12 | ANG-integration仅换hook | 不新建Angle，留给Stage6变体 |
| S5-13 | 核心承诺从便宜变模型自由 | 重新判断Angle/主类，保留派生及历史映射 |
| S5-14 | ANG-model-price没有确认主承诺 | pending_mapping，保留ID，不交接 |
| S5-15 | 新Family提案 | proposed，不修改正式taxonomy或旧实验 |
| S5-16 | 同日三次run分别新增1个Angle | 前两个可入库，第三进入backlog；不按run重置 |
| S5-17 | 配额已满但证据撤回 | 仍撤销资格并输出影响清单，不被配额阻止 |
| S5-18 | 价格24小时到期边界 | as_of达到expires_at即无效；消费者重复检查 |
| S5-19 | 有审核v1但提交Angle v2 | v1审核不能批准v2 |
| S5-20 | 合格低风险事实+已核验入口 | 生成完整固定引用交接，launch_authorized=false |
| S5-21 | 无合格Angle/全部来源失败 | 合法空交接；分别解释无合格角度或无法判断 |
| S5-22 | 未见Home Ads/更换账号 | 可研究起草，entry_unverified，不冒称资格 |
| S5-23 | 下游注册表部分缺失 | impact_scope=incomplete；不宣称全部资产已通知 |
| S5-24 | Notion投影失败 | 主库成功不丢失，sync_pending，重试不重复生成Angle |
| S5-25 | 两个写者使用同base_snapshot | 只一个成功提交，另一个重读，不覆盖 |
| S5-26 | Stage6重复消费同decision_key | 不重复创建制作任务 |
| S5-27 | 运行中途文件写失败 | current仍指向上次完整快照，无半份交接 |
| S5-28 | 附件包含密钥/用户信息 | 隔离或脱敏，公共产物无敏感内容 |
| S5-29 | 下游要求改变核心承诺 | change_request回Stage5，不由Stage6自行批准 |
| S5-30 | 模板/fixture有示例事实 | 明确synthetic，不能进入生产资格或业务完成数 |

真实接入验收：获准来源读取/上下文及附件权限、实际产品事实核验、证据与落地页一致性、持久资产可读、Notion写入授权与回执分别记录。没有真实来源不能将code/regression通过当business_verified。
