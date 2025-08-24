# Props 参数

| 参数               | 类型                                                                 | 默认值      | 必填 | 说明                            |
|--------------------|----------------------------------------------------------------------|-----------|----|-------------------------------|
| `visible`          | `boolean`                                                            | `false`   | 否  | 控制抽屉是否可见                  |
| `title`            | `string`                                                             | `''`      | 否  | 抽屉的标题                       |
| `direction`        | `'top' \| 'right' \| 'bottom' \| 'left'`                             | `'right'` | 否  | 抽屉展开方向                     |
| `showClose`        | `boolean`                                                            | `true`    | 否  | 是否显示关闭按钮                   |
| `closeOnClickOverlay` | `boolean`                                                         | `true`    | 否  | 是否点击遮罩层可关闭抽屉            |
| `overlay`          | `boolean`                                                            | `true`    | 否  | 是否展示遮罩层                     |
| `appendToBody`     | `boolean`                                                            | `true`    | 否  | 是否将抽屉附加到 `body` 元素上     |

---

# Events 事件

| 事件名           | 回调参数                   | 说明                        |
|----------------|------------------------|---------------------------|
| `update:visible` | `(value: boolean): void` | 抽屉可见状态变化时触发，用于双向绑定      |
| `close`          | —                        | 抽屉关闭时触发                   |

---

# Slots 插槽

| 插槽名       | 说明              | 示例                                      |
|-----------|-----------------|-----------------------------------------|
| `default` | 默认插槽，抽屉主体内容   | `<template><div>内容</div></template>`     |
| `header`  | 自定义抽屉头部内容     | `<template #header><h2>标题</h2></template>` |

---

# Expose 方法

无 `defineExpose` 定义的公开方法，未暴露任何方法供外部调用。