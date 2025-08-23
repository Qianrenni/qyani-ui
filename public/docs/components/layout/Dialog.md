# Dialog 组件文档

## Props 参数

| 参数                | 类型      | 默认值    | 必填 | 说明                     |
|---------------------|-----------|-----------|------|--------------------------|
| `visible`           | `boolean` | `false`   | 否   | 控制对话框是否可见        |
| `title`             | `string`  | `''`      | 否   | 对话框标题                |
| `showClose`         | `boolean` | `true`    | 否   | 是否显示关闭按钮          |
| `showFooter`        | `boolean` | `true`    | 否   | 是否显示底部区域          |
| `showCancel`        | `boolean` | `true`    | 否   | 是否显示取消按钮          |
| `confirmText`       | `string`  | `'确定'`  | 否   | 确认按钮的文本            |
| `cancelText`        | `string`  | `'取消'`  | 否   | 取消按钮的文本            |
| `closeOnClickOverlay` | `boolean` | `true`  | 否   | 是否允许点击遮罩关闭对话框 |
| `width`             | `string`  | `undefined` | 否 | 对话框宽度                |
| `customClass`       | `string`  | `''`      | 否   | 自定义类名                |

---

## Events 事件

| 事件名       | 回调参数 | 说明                         |
|--------------|----------|------------------------------|
| `update:visible` | `value: boolean` | 当对话框可见状态变化时触发 |
| `confirm`    | —        | 点击确认按钮时触发           |
| `cancel`     | —        | 点击取消按钮时触发           |
| `close`      | —        | 对话框关闭时触发             |

---

## Slots 插槽

| 插槽名       | 说明             | 示例                                      |
|--------------|------------------|-------------------------------------------|
| `default`    | 对话框主体内容   | `<template #default><p>内容</p></template>` |
| `header`     | 自定义头部内容   | `<template #header><h1>自定义标题</h1></template>` |
| `footer`     | 自定义底部内容   | `<template #footer><button>自定义操作</button></template>` |

---

## Expose 方法

| 方法名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| —      | —    | —      | 无暴露方法 |