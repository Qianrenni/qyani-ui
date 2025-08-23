# CollapseItem 组件文档

## Props 参数

| 参数     | 类型      | 默认值  | 必填 | 说明         |
|--------|---------|-------|----|------------|
| name   | `string` | —     | 是  | 当前项标识符     |
| title  | `string` | `''`  | 否  | 面板标题，默认显示 name |
| disabled | `boolean` | `false` | 否  | 是否禁用当前项     |

---

## Events 事件

当前组件未显式定义事件。

---

## Slots 插槽

| 插槽名       | 说明         | 示例                      |
|-----------|------------|--------------------------|
| `default` | 面板内容插槽     | `<template #default>内容</template>` |

---

## Expose 方法

当前组件未使用 `defineExpose` 暴露方法。