# Props 参数

| 参数  | 类型         | 默认值 | 必填 | 说明       |
|-------|--------------|--------|------|------------|
| `node`  | `TreeNodeData` | -      | 是  | 节点数据对象 |
| `level` | `number`       | -      | 是  | 节点层级，用于缩进控制 |

`TreeNodeData` 类型说明：
```ts
interface TreeNodeData {
  id: string | number
  label: string
  children?: TreeNodeData[]
  expanded?: boolean
  selected?: boolean
  disabled?: boolean
}
```

---

# Events 事件

| 事件名      | 回调参数           | 说明           |
|-----------|------------------|--------------|
| `node-click`  | `(node: TreeNodeData)` | 当节点被点击时触发 |
| `node-toggle` | `(node: TreeNodeData)` | 当节点展开/折叠时触发 |

---

# Slots 插槽

当前组件未定义插槽。

---

# Expose 方法

当前组件未通过 `defineExpose` 暴露任何方法。