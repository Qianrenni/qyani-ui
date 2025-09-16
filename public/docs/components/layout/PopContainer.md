# Props 参数

| 参数      | 类型                                                          | 默认值         | 必填 | 说明           |
|---------|-------------------------------------------------------------|-------------|----|--------------|
| `visible`  | `boolean`                                                   | `false`     | 否  | 控制弹出内容是否可见     |
| `hoverShow`| `boolean`                                                   | `true`      | 否  | 是否在悬停时显示弹出内容  |
| `position` | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right' \| 'left-center' \| 'right-center'` | `'bottom-center'` | 否  | 弹出内容的位置       |

---

# Slots 插槽

| 插槽名       | 说明         | 示例                        |
|-----------|------------|---------------------------|
| `default` | 容器内的主内容插槽 | `<template #default>内容</template>` |
| `pop`     | 弹出内容插槽     | `<template #pop>内容</template>`   |

---

# Expose 方法

当前组件未定义 `defineExpose`，因此无暴露方法。