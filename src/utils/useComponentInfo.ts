export interface ComponentInfo{
    category:string,
    name:string,
    displayName:string,
    vuePath:string,
    docPath:string,
    docContent:string,
    displayPath:string
}
export const useComponentInfo:ComponentInfo[] = [
    {
        "category": "components/basic",
        "name": "Icon",
        "displayName": "Icon",
        "vuePath": "/src/components/basic/Icon.vue",
        "docPath": "/docs/components/basic/Icon.md",
        "docContent": "# Props 参数\r\n\r\n| 参数  | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 默认值  | 必填 | 说明             |\r\n|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|------|------------------|\r\n| `icon` | `'Aim' \\| 'Bell' \\| 'Card' \\| 'ChatDotRound' \\| 'ChatLineSquare' \\| 'CircleMinus' \\| 'CirclePlus' \\| 'Clock' \\| 'Close' \\| 'Copy' \\| 'Down' \\| 'Download' \\| 'Edit' \\| 'Emotion' \\| 'EyeClose' \\| 'EyeOpen' \\| 'Female' \\| 'Find' \\| 'ForbiddenBell' \\| 'FullScreen' \\| 'History' \\| 'House' \\| 'Larger' \\| 'Left' \\| 'Link' \\| 'Loading' \\| 'Location' \\| 'Lock' \\| 'Male' \\| 'Menu' \\| 'Message' \\| 'Minus' \\| 'Moon' \\| 'More' \\| 'Picture' \\| 'Plus' \\| 'Position' \\| 'RectangularClose' \\| 'Refresh' \\| 'Right' \\| 'Save' \\| 'Scissor' \\| 'Search' \\| 'Select' \\| 'Service' \\| 'Setting' \\| 'Share' \\| 'Smaller' \\| 'Star' \\| 'Sun' \\| 'svg' \\| 'Switch' \\| 'Trash' \\| 'Unlock' \\| 'Up' \\| 'Upload' \\| 'User' \\| 'VideoPause' \\| 'VideoPlay' \\| 'Warning' \\| 'Wifi'` | —      | 是  | 图标名称，对应 SVG 文件名 |\r\n| `size` | `string \\| number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `\"32\"` | 否  | 图标尺寸，设置 SVG 的宽高 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前组件未暴露任何事件。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未使用插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未通过 `defineExpose` 暴露任何方法。",
        "displayPath": "/display/components/basic/Icon.vue"
    },
    {
        "category": "components/basic",
        "name": "IconGroups",
        "displayName": "IconGroups",
        "vuePath": "/src/components/basic/IconGroups.vue",
        "docPath": "/docs/components/basic/IconGroups.md",
        "docContent": "# Props 参数\r\n\r\n| 参数  | 类型   | 默认值 | 必填 | 说明     |\r\n|-------|--------|--------|------|----------|\r\n| `size` | `String` | `\"32\"` | 否   | 图标尺寸大小 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n暂无内容\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n暂无内容\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n暂无内容",
        "displayPath": "/display/components/basic/IconGroups.vue"
    },
    {
        "category": "components/basic",
        "name": "Pagination",
        "displayName": "Pagination",
        "vuePath": "/src/components/basic/Pagination.vue",
        "docPath": "/docs/components/basic/Pagination.md",
        "docContent": "# Props 参数\r\n\r\n| 参数              | 类型     | 默认值            | 必填 | 说明                 |\r\n|-------------------|----------|-------------------|------|----------------------|\r\n| `currentPage`     | `number` | —                 | 是   | 当前页码              |\r\n| `totalPages`      | `number` | —                 | 是   | 总页数                |\r\n| `maxVisiblePages` | `number` | `5`               | 否   | 最多显示的页码数量      |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名  | 回调参数      | 说明             |\r\n|---------|-------------|------------------|\r\n| `change`| `page: number` | 页码变化时触发，返回新的页码 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未使用插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法（未使用 `defineExpose`）。",
        "displayPath": "/display/components/basic/Pagination.vue"
    },
    {
        "category": "components/display",
        "name": "Avatar",
        "displayName": "Avatar",
        "vuePath": "/src/components/display/Avatar.vue",
        "docPath": "/docs/components/display/Avatar.md",
        "docContent": "# Props 参数\r\n\r\n| 参数   | 类型     | 默认值                  | 必填 | 说明       |\r\n|--------|----------|-------------------------|------|------------|\r\n| `url`  | `string` | `https://picsum.photos/200/` | 否   | 图片地址   |\r\n| `size` | `string` | `'64px'`                | 否   | 头像尺寸   |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n暂无事件\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n暂无插槽\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n暂无方法",
        "displayPath": "/display/components/display/Avatar.vue"
    },
    {
        "category": "components/display",
        "name": "Badge",
        "displayName": "Badge",
        "vuePath": "/src/components/display/Badge.vue",
        "docPath": "/docs/components/display/Badge.md",
        "docContent": "# Props 参数\r\n\r\n| 参数  | 类型                                                          | 默认值  | 必填 | 说明           |\r\n|-------|-------------------------------------------------------------|--------|----|----------------|\r\n| `type`  | `'primary' \\| 'success' \\| 'warning' \\| 'danger' \\| 'gray' \\| 'info'` | `'info'` | 否  | 徽章类型，影响颜色     |\r\n| `value` | `number \\| string`                                          | `1`    | 否  | 显示的值          |\r\n| `max`   | `number`                                                    | `99`   | 否  | 最大值，超过显示 `99+` |\r\n| `dot`   | `boolean`                                                   | `false`| 否  | 是否以小红点形式展示    |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前组件未定义任何事件。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明         | 示例                     |\r\n|-----------|------------|--------------------------|\r\n| `default` | 默认插槽，用于包裹需要显示的内容 | `<template #default>内容</template>` |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法。",
        "displayPath": "/display/components/display/Badge.vue"
    },
    {
        "category": "components/display",
        "name": "Carousel",
        "displayName": "Carousel",
        "vuePath": "/src/components/display/Carousel.vue",
        "docPath": "/docs/components/display/Carousel.md",
        "docContent": "# Props 参数\r\n\r\n| 参数              | 类型                                                                 | 默认值              | 必填 | 说明                                                         |\r\n|-------------------|----------------------------------------------------------------------|-------------------|----|------------------------------------------------------------|\r\n| `vertical`        | `boolean`                                                            | `false`           | 否  | 是否垂直方向轮播                                               |\r\n| `autoplay`        | `boolean`                                                            | `true`            | 否  | 是否自动播放                                                   |\r\n| `duration`        | `number`                                                             | `500`             | 否  | 动画持续时间（毫秒）                                            |\r\n| `indicator`       | `boolean`                                                            | `true`            | 否  | 是否显示指示器                                                 |\r\n| `indicatorPosition` | `'center-bottom' \\| 'center-top' \\| 'left-bottom' \\| 'left-top' \\| 'left-center' \\| 'right-bottom' \\| 'right-top' \\| 'right-center'` | `'center-bottom'` | 否  | 指示器位置                                                    |\r\n| `width`           | `number`                                                             | —                 | 是  | 轮播容器宽度（px）                                             |\r\n| `height`          | `number`                                                             | —                 | 是  | 轮播容器高度（px）                                             |\r\n| `interval`        | `number`                                                             | `1500`            | 否  | 自动播放间隔时间（毫秒）                                        |\r\n| `direction`       | `'next' \\| 'prev'`                                                   | `'next'`          | 否  | 自动播放方向                                                    |\r\n| `showButton`      | `boolean`                                                            | `true`            | 否  | 是否显示左右切换按钮                                             |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前组件未显式定义自定义事件。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明           | 示例 |\r\n|-----------|--------------|------|\r\n| `default` | 轮播内容插槽，每个 `CarouselItem` 为一个轮播项 | —    |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法（未使用 `defineExpose`）。",
        "displayPath": "/display/components/display/Carousel.vue"
    },
    {
        "category": "components/display",
        "name": "CarouselItem",
        "displayName": "CarouselItem",
        "vuePath": "/src/components/display/CarouselItem.vue",
        "docPath": "/docs/components/display/CarouselItem.md",
        "docContent": "# 暂无内容",
        "displayPath": "/display/components/display/CarouselItem.vue"
    },
    {
        "category": "components/display",
        "name": "DemoBlock",
        "displayName": "DemoBlock",
        "vuePath": "/src/components/display/DemoBlock.vue",
        "docPath": "/docs/components/display/DemoBlock.md",
        "docContent": "# Props 参数\r\n\r\n| 参数   | 类型     | 默认值 | 必填 | 说明       |\r\n|--------|----------|--------|------|------------|\r\n| `title`| `string` | `''`   | 否   | 示例标题   |\r\n| `code` | `string` | `''`   | 否   | 可复制代码内容 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数 | 说明           |\r\n|-----------|--------|----------------|\r\n| `click`   | —      | 点击复制按钮时触发 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明             | 示例                        |\r\n|-----------|------------------|-----------------------------|\r\n| `default` | 示例内容插槽       | `<div>页面示例内容</div>`    |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未使用 `defineExpose`，暂无对外暴露的方法。",
        "displayPath": "/display/components/display/DemoBlock.vue"
    },
    {
        "category": "components/display",
        "name": "Divider",
        "displayName": "Divider",
        "vuePath": "/src/components/display/Divider.vue",
        "docPath": "/docs/components/display/Divider.md",
        "docContent": "# 暂无内容",
        "displayPath": "/display/components/display/Divider.vue"
    },
    {
        "category": "components/display",
        "name": "MarkdownRender",
        "displayName": "MarkdownRender",
        "vuePath": "/src/components/display/MarkdownRender.vue",
        "docPath": "/docs/components/display/MarkdownRender.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型        | 默认值    | 必填 | 说明                |\r\n|------------|-----------|--------|----|-------------------|\r\n| `content`  | `string`  | `''`   | 是  | 需要渲染的 Markdown 内容 |\r\n| `showCopy` | `boolean` | `true` | 否  | 是否显示复制按钮          |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前组件未显式定义自定义事件。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未使用插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n| 方法名          | 参数           | 返回值                                                  | 说明                  |\r\n|--------------|--------------|------------------------------------------------------|---------------------|\r\n| `getTOC`     | —            | `Array<{ id: string, text: string, level: number }>` | 获取解析出的目录结构          |\r\n| `scrollTo`   | `id: string` | —                                                    | 滚动到指定标题 ID 的位置      |\r\n| `getContent` | —            | `string`                                             | 获取原始传入的 Markdown 内容 |\r\n",
        "displayPath": "/display/components/display/MarkdownRender.vue"
    },
    {
        "category": "components/display",
        "name": "MobileFrame",
        "displayName": "MobileFrame",
        "vuePath": "/src/components/display/MobileFrame.vue",
        "docPath": "/docs/components/display/MobileFrame.md",
        "docContent": "# Props 参数\r\n\r\n| 参数    | 类型       | 默认值 | 必填 | 说明           |\r\n|-------|----------|-----|----|--------------|\r\n| `src` | `string` | —   | 是  | iframe 的加载地址 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前组件未定义自定义事件。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未定义自定义插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未通过 `defineExpose` 暴露任何方法。\r\n",
        "displayPath": "/display/components/display/MobileFrame.vue"
    },
    {
        "category": "components/display",
        "name": "ProgressBar",
        "displayName": "ProgressBar",
        "vuePath": "/src/components/display/ProgressBar.vue",
        "docPath": "/docs/components/display/ProgressBar.md",
        "docContent": "# Props 参数\r\n\r\n| 参数      | 类型                                              | 默认值         | 必填 | 说明                      |\r\n|---------|-------------------------------------------------|-------------|----|-------------------------|\r\n| `percent`  | `string`                                        | `undefined` | 是  | 进度条百分比，例如：'50%'       |\r\n| `color`    | `string`                                        | `'var(--primary-color)'` | 否  | 进度条颜色，支持 CSS 变量或颜色值 |\r\n| `direction`| `'horizontal' \\| 'vertical'`                  | `'horizontal'` | 否  | 进度条方向，水平或垂直           |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前组件未定义任何事件。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未定义任何插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法。",
        "displayPath": "/display/components/display/ProgressBar.vue"
    },
    {
        "category": "components/display",
        "name": "RainFigure",
        "displayName": "RainFigure",
        "vuePath": "/src/components/display/RainFigure.vue",
        "docPath": "/docs/components/display/RainFigure.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型       | 默认值 | 必填 | 说明             |\r\n|------------|----------|-----|----|----------------|\r\n| `imageUrl` | `string` | —   | 是  | 图片地址，用于显示雨景背景图 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前组件未定义自定义事件。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未定义插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未通过 `defineExpose` 暴露任何方法。\r\n",
        "displayPath": "/display/components/display/RainFigure.vue"
    },
    {
        "category": "components/display",
        "name": "ScrollNotice",
        "displayName": "ScrollNotice",
        "vuePath": "/src/components/display/ScrollNotice.vue",
        "docPath": "/docs/components/display/ScrollNotice.md",
        "docContent": "# Props 参数\r\n\r\n| 参数   | 类型     | 默认值 | 必填 | 说明         |\r\n|--------|----------|--------|------|--------------|\r\n| `width`| `number` | —      | 是   | 容器的宽度（px） |\r\n| `text` | `string` | —      | 是   | 要滚动显示的文本内容 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前组件未定义自定义事件。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未使用插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未通过 `defineExpose` 暴露任何方法。",
        "displayPath": "/display/components/display/ScrollNotice.vue"
    },
    {
        "category": "components/form",
        "name": "FormButton",
        "displayName": "FormButton",
        "vuePath": "/src/components/form/FormButton.vue",
        "docPath": "/docs/components/form/FormButton.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                                                          | 默认值         | 必填 | 说明         |\r\n|------------|-------------------------------------------------------------|-------------|----|------------|\r\n| `type`     | `'button' \\| 'submit' \\| 'reset'`                           | `'button'`  | 否  | 按钮的原生类型   |\r\n| `disabled` | `boolean`                                                   | `false`     | 否  | 是否禁用按钮     |\r\n| `autofocus`| `boolean`                                                   | `false`     | 否  | 是否自动获取焦点  |\r\n| `size`     | `'small' \\| 'middle' \\| 'large'`                            | `'middle'`  | 否  | 按钮尺寸       |\r\n\r\n> 💡 提示：支持原生 `button` 的所有属性（如 `autofocus`, `type=\"submit\"` 等）\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数 | 说明         |\r\n|----------|------|------------|\r\n| `click`  | —    | 用户点击按钮时触发，会阻止禁用状态下的默认行为 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明         |\r\n|-----------|------------|\r\n| `default` | 按钮的默认内容插槽，支持自定义内容和样式 |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n| 方法名 | 参数 | 返回值 | 说明 |\r\n|------|----|-----|----|\r\n| 无暴露方法 | —  | —   | —  |",
        "displayPath": "/display/components/form/FormButton.vue"
    },
    {
        "category": "components/form",
        "name": "FormCheckboxGroup",
        "displayName": "FormCheckboxGroup",
        "vuePath": "/src/components/form/FormCheckboxGroup.vue",
        "docPath": "/docs/components/form/FormCheckboxGroup.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                            | 默认值      | 必填 | 说明                            |\r\n|------------|-------------------------------|-----------|----|-------------------------------|\r\n| `label`    | `string`                      | `''`      | 否  | 复选框组的标签文本                  |\r\n| `modelValue` | `string[]`                    | `[]`      | 否  | 绑定的选中值数组                    |\r\n| `options`  | `Options[]`                   | `[]`      | 是  | 复选框选项数组，每个选项需包含 `value` 和 `label` |\r\n| `required` | `boolean`                     | `true`    | 否  | 是否必填                        |\r\n| `direction`| `'horizontal' \\| 'vertical'` | `'horizontal'` | 否  | 复选框排列方向                     |\r\n| `disabled` | `boolean`                     | `false`   | 否  | 是否禁用整个复选框组                 |\r\n| `autofocus`| `boolean`                     | `false`   | 否  | 是否自动聚焦（未实际使用）              |\r\n| `readonly` | `boolean`                     | `false`   | 否  | 是否只读（未实际使用）                |\r\n| `size`     | `'small' \\| 'middle' \\| 'large'` | `'middle'` | 否  | 控制复选框组内文字大小                 |\r\n| `placeholder` | `string`                   | `''`      | 否  | 占位符（未实际使用）                 |\r\n| `clearable`| `boolean`                     | `true`    | 否  | 是否可清除（未实际使用）               |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数 | 说明                        |\r\n|----------|------|---------------------------|\r\n| `update:modelValue` | `(value: string[]) => void` | 当复选框组选中值变化时触发，返回新的值数组 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未使用插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法。",
        "displayPath": "/display/components/form/FormCheckboxGroup.vue"
    },
    {
        "category": "components/form",
        "name": "FormColorPicker",
        "displayName": "FormColorPicker",
        "vuePath": "/src/components/form/FormColorPicker.vue",
        "docPath": "/docs/components/form/FormColorPicker.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                                                                 | 默认值         | 必填 | 说明                                                                 |\r\n|------------|--------------------------------------------------------------------|-------------|----|----------------------------------------------------------------------|\r\n| `label`    | `string`                                                          | `undefined` | 否  | 标签文字                                                               |\r\n| `name`     | `string`                                                          | `undefined` | 是  | 表单字段名称                                                             |\r\n| `direction`| `'horizontal' \\| 'vertical'`                                      | `'horizontal'` | 否  | 布局方向，影响 label 排列方式                                             |\r\n| `disabled` | `boolean`                                                         | `false`     | 否  | 是否禁用输入                                                             |\r\n| `size`     | `'small' \\| 'middle' \\| 'large'`                                  | `'middle'`  | 否  | 控件尺寸，影响 label 字体大小                                             |\r\n| `modelValue`| `string`                                                         | `'#fff'`    | 否  | 绑定的颜色值                                                             |\r\n| `required` | `boolean`                                                         | `true`      | 否  | 是否为必填项                                                             |\r\n| `autofocus`| `boolean`                                                         | `false`     | 否  | 是否自动聚焦                                                             |\r\n| `clearable`| `boolean`                                                         | `true`      | 否  | 是否可清除颜色值                                                          |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数       | 说明             |\r\n|----------|------------|----------------|\r\n| `update:modelValue` | `(value: string)` | 输入颜色值发生变化时触发 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未使用插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法。",
        "displayPath": "/display/components/form/FormColorPicker.vue"
    },
    {
        "category": "components/form",
        "name": "FormContainer",
        "displayName": "FormContainer",
        "vuePath": "/src/components/form/FormContainer.vue",
        "docPath": "/docs/components/form/FormContainer.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型   | 默认值  | 必填 | 说明     |\r\n|------------|------|------|----|--------|\r\n| `title`    | `string` | `undefined` | 否  | 表单标题    |\r\n| `description` | `string` | `undefined` | 否  | 表单描述信息 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数 | 说明        |\r\n|----------|------|-----------|\r\n| `submit` | —    | 当表单提交时触发   |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明      | 示例                     |\r\n|-----------|---------|--------------------------|\r\n| `default` | 默认插槽，用于表单内容 | `<template #default><input type=\"text\" /></template>` |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n| 方法名 | 参数 | 返回值 | 说明 |\r\n|------|----|-----|----|\r\n| 无暴露方法 | —  | —   | 当前组件未通过 `defineExpose` 暴露任何方法 |",
        "displayPath": "/display/components/form/FormContainer.vue"
    },
    {
        "category": "components/form",
        "name": "FormDatalist",
        "displayName": "FormDatalist",
        "vuePath": "/src/components/form/FormDatalist.vue",
        "docPath": "/docs/components/form/FormDatalist.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                     | 默认值     | 必填 | 说明                                                                 |\r\n|------------|------------------------|---------|----|----------------------------------------------------------------------|\r\n| `label`    | `string`               | `''`    | 否  | 表单项标签文本                                                         |\r\n| `size`     | `'small' \\| 'middle' \\| 'large'` | `'middle'` | 否  | 控件尺寸，影响字体大小                                                     |\r\n| `disabled` | `boolean`              | `false` | 否  | 是否禁用输入框                                                           |\r\n| `required` | `boolean`              | `true`  | 否  | 是否必填项                                                             |\r\n| `direction`| `'horizontal' \\| 'vertical'` | `'horizontal'` | 否  | 表单控件布局方向，`vertical`为竖直布局，`horizontal`为水平布局 |\r\n| `name`     | `string`               | `''`    | 是  | 表单字段名称，同时作为 `input` 的 `name` 属性                             |\r\n| `id`       | `string`               | `''`    | 否  | 表单字段 ID，用于 `label` 的 `for` 属性                                  |\r\n| `placeholder` | `string`            | `''`    | 否  | 输入框占位符文本                                                         |\r\n| `autofocus`| `boolean`              | `false` | 否  | 是否自动获取焦点                                                         |\r\n| `readonly` | `boolean`              | `false` | 否  | 输入框是否只读                                                           |\r\n| `clearable`| `boolean`              | `true`  | 否  | 是否可清除输入内容                                                         |\r\n| `options`  | `string[]`             | `[]`    | 是  | 数据列表，用于 `<datalist>` 提供自动补全选项                              |\r\n| `modelValue`| `string`              | `''`    | 是  | 绑定的输入值，支持 `v-model`                                           |\r\n\r\n> 💡 提示：支持原生 `input` 的所有属性（如 `autocomplete`, `maxlength` 等）\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数 | 说明             |\r\n|----------|------|------------------|\r\n| `input`  | `(value: string)` | 输入时触发，用于支持 `v-model` 绑定 |\r\n| `change` | `(value: string)` | 值改变时触发                        |\r\n| `focus`  | —                 | 输入框获得焦点时触发                  |\r\n| `blur`   | —                 | 输入框失去焦点时触发                  |\r\n| `clear`  | —                 | 当用户点击清除按钮时触发（如果启用）     |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未定义任何插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未通过 `defineExpose` 暴露任何方法。",
        "displayPath": "/display/components/form/FormDatalist.vue"
    },
    {
        "category": "components/form",
        "name": "FormDatePicker",
        "displayName": "FormDatePicker",
        "vuePath": "/src/components/form/FormDatePicker.vue",
        "docPath": "/docs/components/form/FormDatePicker.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                                                          | 默认值     | 必填 | 说明         |\r\n|------------|-------------------------------------------------------------|---------|----|------------|\r\n| `type`     | `'date' \\| 'time' \\| 'datetime-local' \\| 'month' \\| 'week'` | `'date'` | 否  | 日期选择器的类型   |\r\n| `label`    | `string`                                                      | —       | 否  | 标签文字       |\r\n| `size`     | `'small' \\| 'middle' \\| 'large'`                            | `'middle'` | 否  | 输入框尺寸      |\r\n| `disabled` | `boolean`                                                   | `false` | 否  | 是否禁用输入框    |\r\n| `required` | `boolean`                                                   | `true`  | 否  | 是否为必填项     |\r\n| `direction`| `'horizontal' \\| 'vertical'`                                | `'horizontal'` | 否  | 表单控件排列方向 |\r\n| `placeholder` | `string`                                               | `'请选择日期'` | 否  | 输入框占位符     |\r\n| `autofocus`| `boolean`                                                   | `false` | 否  | 是否自动获取焦点  |\r\n| `readonly` | `boolean`                                                   | `false` | 否  | 是否只读       |\r\n| `clearable`| `boolean`                                                   | `true`  | 否  | 是否显示清除按钮  |\r\n| `modelValue`| `string`                                                  | —       | 否  | 绑定的日期值     |\r\n\r\n> 💡 提示：支持原生 `input` 的所有属性（如 `name`, `id`, `placeholder` 等）\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数 | 说明           |\r\n|----------|------|--------------|\r\n| `update:modelValue` | `string` | 当日期值发生变化时触发 |\r\n| `input`  | `string` | 原生输入事件，返回输入框的值 |\r\n| `change` | `string` | 值发生变化且输入框失去焦点时触发 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明         | 示例 |\r\n|-----------|------------|------|\r\n| `default` | 默认插槽，用于扩展内容 | —    |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n| 方法名 | 参数 | 返回值 | 说明 |\r\n|------|----|-----|----|\r\n| —    | —  | —   | —  |",
        "displayPath": "/display/components/form/FormDatePicker.vue"
    },
    {
        "category": "components/form",
        "name": "FormFileUpload",
        "displayName": "FormFileUpload",
        "vuePath": "/src/components/form/FormFileUpload.vue",
        "docPath": "/docs/components/form/FormFileUpload.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                                                                 | 默认值      | 必填 | 说明                                                                 |\r\n|------------|--------------------------------------------------------------------|----------|----|----------------------------------------------------------------------|\r\n| `modelValue` | `File \\| FileList \\| null`                                        | `null`   | 否  | 绑定的文件对象或文件列表                                                   |\r\n| `label`      | `string`                                                          | `''`     | 否  | 标签文字                                                               |\r\n| `name`       | `string`                                                          | `''`     | 是  | 表单字段的 `name` 属性，同时也是 `id` 和 `for` 的值                          |\r\n| `multiple`   | `boolean`                                                         | `false`  | 否  | 是否支持多文件上传                                                       |\r\n| `accept`     | `string`                                                          | `'*'`    | 否  | 接受的文件类型（如 `'image/*'` 或 `'application/pdf'`）                      |\r\n| `required`   | `boolean`                                                         | `true`   | 否  | 是否为必填项                                                             |\r\n| `direction`  | `'vertical' \\| 'horizontal'`                                      | `'vertical'` | 否  | 表单标签与控件排列方向                                                      |\r\n| `disabled`   | `boolean`                                                         | `false`  | 否  | 是否禁用上传控件                                                         |\r\n| `autofocus`  | `boolean`                                                         | `false`  | 否  | 是否自动聚焦                                                            |\r\n| `readonly`   | `boolean`                                                         | `false`  | 否  | 是否只读                                                               |\r\n| `size`       | `'small' \\| 'middle' \\| 'large'`                                  | `'middle'`   | 否  | 控件尺寸，影响字体大小                                                     |\r\n| `placeholder`| `string`                                                          | `'选择文件'` | 否  | 占位符文本                                                             |\r\n| `clearable`  | `boolean`                                                         | `true`   | 否  | 是否显示清除按钮                                                         |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名             | 回调参数                          | 说明                       |\r\n|------------------|-------------------------------|--------------------------|\r\n| `update:modelValue` | `(value: File \\| FileList \\| null): void` | 当文件选择发生变化时触发，返回选中的文件 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未使用插槽功能，因此无插槽定义。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未通过 `defineExpose` 暴露任何方法，因此无对外方法可调用。",
        "displayPath": "/display/components/form/FormFileUpload.vue"
    },
    {
        "category": "components/form",
        "name": "FormRadioGroup",
        "displayName": "FormRadioGroup",
        "vuePath": "/src/components/form/FormRadioGroup.vue",
        "docPath": "/docs/components/form/FormRadioGroup.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                                                                 | 默认值      | 必填 | 说明                                                                 |\r\n|------------|--------------------------------------------------------------------|----------|----|----------------------------------------------------------------------|\r\n| `options`  | `{ value: string \\| number, label: string }[]`                     | `[]`     | 是  | 选项列表，每个选项包含 `value` 和 `label` 字段                                  |\r\n| `modelValue` | `string \\| number`                                                | `''`     | 否  | 绑定的选中值，用于 `v-model` 控制选中项                                        |\r\n| `label`    | `string`                                                          | `''`     | 否  | 单选组的标签文本                                                           |\r\n| `direction`| `'horizontal' \\| 'vertical'`                                      | `'horizontal'` | 否  | 设置单选组排列方向，`'horizontal'` 横向排列，`'vertical'` 纵向排列            |\r\n| `name`     | `string`                                                          | `''`     | 否  | 原生 `name` 属性，用于表单提交或关联多个单选按钮                                 |\r\n| `size`     | `'small' \\| 'middle' \\| 'large'`                                  | `'middle'`   | 否  | 设置单选组大小，影响字体大小（`text-12rem` / `text-05rem`）                    |\r\n| `disabled` | `boolean`                                                         | `false`  | 否  | 是否禁用整个单选组，禁用后不可操作                                               |\r\n| `required` | `boolean`                                                         | `true`   | 否  | 是否为必填项，原生 `required` 属性                                          |\r\n| `autofocus`| `boolean`                                                         | `false`  | 否  | 自动聚焦属性，原生支持                                                       |\r\n| `readonly` | `boolean`                                                         | `false`  | 否  | 是否为只读状态，原生支持                                                     |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名     | 回调参数 | 说明                      |\r\n|---------|------|---------------------------|\r\n| `update:modelValue` | `(value: string \\| number)` | 当用户选择一个选项时触发，用于更新 `v-model` 绑定值 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明         | 示例 |\r\n|-----------|------------|-----|\r\n| —         | 不支持插槽内容 | —   |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未使用 `defineExpose`，因此无暴露方法。",
        "displayPath": "/display/components/form/FormRadioGroup.vue"
    },
    {
        "category": "components/form",
        "name": "FormRangeSlider",
        "displayName": "FormRangeSlider",
        "vuePath": "/src/components/form/FormRangeSlider.vue",
        "docPath": "/docs/components/form/FormRangeSlider.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                                                                 | 默认值         | 必填 | 说明                                                                 |\r\n|------------|--------------------------------------------------------------------|-------------|----|----------------------------------------------------------------------|\r\n| `name`     | `string`                                                          | —           | 是  | 原生 input 的 `name` 属性                                           |\r\n| `modelValue` | `number`                                                         | `0`         | 是  | 双向绑定的数值，表示当前滑块的值                                            |\r\n| `min`      | `number`                                                          | `0`         | 否  | 最小值                                                               |\r\n| `max`      | `number`                                                          | `100`       | 否  | 最大值                                                               |\r\n| `step`     | `number`                                                          | `1`         | 否  | 步长                                                                 |\r\n| `label`    | `string`                                                          | `undefined` | 否  | 标签文本                                                              |\r\n| `valueText`| `string`                                                          | `undefined` | 否  | 自定义显示值文本（用于 ARIA 和 output）                              |\r\n| `formatter`| `(value: number) => string`                                      | `(val: number) => String(val)` | 否  | 自定义输出显示格式 |\r\n| `required` | `boolean`                                                         | `true`      | 否  | 是否为必填项                                                           |\r\n| `direction`| `'horizontal' \\| 'vertical'`                                     | `'horizontal'` | 否  | 滑块方向                                                             |\r\n| `disabled` | `boolean`                                                         | `false`     | 否  | 是否禁用组件                                                         |\r\n| `readonly` | `boolean`                                                         | `false`     | 否  | 是否只读                                                             |\r\n| `size`     | `'small' \\| 'middle' \\| 'large'`                                 | `'middle'`  | 否  | 组件尺寸，影响标签和输出值的字体大小                                         |\r\n| `id`       | `string`                                                          | `undefined` | 否  | 原生 input 的 `id` 属性，未提供时使用 `name` 生成                      |\r\n| `clearable`| `boolean`                                                         | `false`     | 否  | 虽然不适用，但保留接口统一                                               |\r\n\r\n> 💡 提示：支持原生 `input` 的所有属性（如 `autofocus`, `required`, `readonly` 等）\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数 | 说明                   |\r\n|----------|------|------------------------|\r\n| `update:modelValue` | `(value: number)` | 当滑块值改变时触发双向绑定更新 |\r\n| `change` | `(value: number)` | 当用户结束拖动并更改值时触发 |\r\n| `input`  | `(value: number)` | 滑块值变化时实时触发        |\r\n| `focus`  | `(event: FocusEvent)` | 输入框获得焦点时触发       |\r\n| `blur`   | `(event: FocusEvent)` | 输入框失去焦点时触发       |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未使用插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法（无 `defineExpose` 定义）。",
        "displayPath": "/display/components/form/FormRangeSlider.vue"
    },
    {
        "category": "components/form",
        "name": "FormSelect",
        "displayName": "FormSelect",
        "vuePath": "/src/components/form/FormSelect.vue",
        "docPath": "/docs/components/form/FormSelect.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                                                                 | 默认值      | 必填 | 说明                             |\r\n|------------|--------------------------------------------------------------------|----------|----|--------------------------------|\r\n| `label`    | `string`                                                          | `''`     | 否  | 表单选择器的标签文本                   |\r\n| `options`  | `Array<{ label: string, [key: string]: any }>`                    | `[]`     | 是  | 选项列表，每个选项必须包含 `label` 字段 |\r\n| `placeholder` | `string`                                                       | `'请选择'` | 否  | 未选择时显示的占位符                   |\r\n| `required` | `boolean`                                                       | `true`   | 否  | 是否为必填项                         |\r\n| `direction`| `'horizontal' \\| 'vertical'`                                      | `'horizontal'` | 否  | 布局方向，影响子元素排列方式         |\r\n| `disabled` | `boolean`                                                       | `false`  | 否  | 是否禁用选择器                       |\r\n| `autofocus`| `boolean`                                                       | `false`  | 否  | 是否自动聚焦                         |\r\n| `readonly` | `boolean`                                                       | `false`  | 否  | 是否只读                             |\r\n| `size`     | `'small' \\| 'middle' \\| 'large'`                                  | `'middle'` | 否  | 控件尺寸                             |\r\n| `clearable`| `boolean`                                                       | `false`  | 否  | 是否可清除已选项                       |\r\n| `searchable`| `boolean`                                                      | `false`  | 否  | 是否可搜索选项                        |\r\n| `multiple` | `boolean`                                                       | `true`   | 否  | 是否支持多选                          |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数             | 说明                     |\r\n|----------|--------------------|--------------------------|\r\n| `update:modelValue` | `(selected: string[])` | 当选项改变时触发，返回选中项的值数组 |\r\n| `change` | `(selected: string[])` | 当选项改变时触发，与 `update:modelValue` 类似 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未定义具名插槽，所有内容通过 props 控制。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法，无法通过 ref 调用。",
        "displayPath": "/display/components/form/FormSelect.vue"
    },
    {
        "category": "components/form",
        "name": "FormTable",
        "displayName": "FormTable",
        "vuePath": "/src/components/form/FormTable.vue",
        "docPath": "/docs/components/form/FormTable.md",
        "docContent": "# Props 参数\r\n\r\n| 参数 | 类型 | 默认值 | 必填 | 说明 |\r\n|------|------|------|------|------|\r\n| `data` | `Record<string, any>[]` | - | 是 | 表格数据 |\r\n| `columns` | `TableColumn[]` | - | 是 | 列配置，格式：`{ value: string, label: string, width?: string }` |\r\n| `selectable` | `boolean` | `false` | 否 | 是否显示选择列 |\r\n| `selectionMode` | `\"single\" \\| \"multiple\" \\| null` | `'multiple'` | 否 | 选择模式：单选/多选/不可选 |\r\n| `sortable` | `boolean` | `true` | 否 | 是否允许列排序 |\r\n| `pagination` | `boolean` | `true` | 否 | 是否启用分页 |\r\n| `pageSize` | `number` | `10` | 否 | 每页显示的行数 |\r\n| `pageSizeOptions` | `number[]` | `[5, 10, 20, 50, 100]` | 否 | 可选的每页行数选项 |\r\n| `modelValue` | `Record<string, any>[]` | - | 否 | 双向绑定选中行数据 |\r\n| `required` | `boolean` | `false` | 否 | 是否为必填项 |\r\n| `direction` | `\"horizontal\" \\| \"vertical\"` | `\"horizontal\"` | 否 | 表单方向布局 |\r\n| `disabled` | `boolean` | `false` | 否 | 是否禁用组件 |\r\n| `readonly` | `boolean` | `false` | 否 | 是否只读 |\r\n| `size` | `\"small\" \\| \"middle\" \\| \"large\"` | `\"middle\"` | 否 | 控件尺寸 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名 | 回调参数 | 说明 |\r\n|-------|----------|------|\r\n| `update:modelValue` | `(value: Record<string, any>[]) => void` | 数据变化时触发，用于同步选中行数据 |\r\n| `change` | `(value: Record<string, any>[]) => void` | 数据变化时触发（表单通用事件） |\r\n| `input` | `(value: Record<string, any>[]) => void` | 输入时触发（表单通用事件） |\r\n| `focus` | `(event: FocusEvent) => void` | 聚焦时触发 |\r\n| `blur` | `(event: FocusEvent) => void` | 失焦时触发 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名 | 说明 | 示例 |\r\n|--------|------|------|\r\n| `default` | 默认插槽，用于自定义单元格内容 | `<template #default=\"{ row, column }\">{{ row[column.value] }}</template>` |\r\n| `empty` | 无数据时的自定义内容 | `<template #empty>暂无数据</template>` |\r\n| `header` | 自定义表头内容 | `<template #header>自定义表头</template>` |\r\n| `footer` | 表格底部插槽 | `<template #footer>表格底部内容</template>` |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n无 expose 暴露方法。\r\n\r\n---\r\n\r\n# 依赖引入\r\n\r\n- `Icon` 组件：用于显示排序图标\r\n- `Pagination` 组件：用于分页控制\r\n- `useFormEvents`：提供通用表单事件处理逻辑（focus、blur、input、change）\r\n\r\n---\r\n\r\n# 其他特性\r\n\r\n- 支持本地选中状态管理（不直接修改 `modelValue`）\r\n- 支持按列排序（点击表头切换升序/降序）\r\n- 支持分页展示（可配置每页行数）\r\n- 支持响应式尺寸（small/middle/large）\r\n- 支持样式隔离（`scoped`）\r\n- 支持无障碍属性（如 `role=\"none\"`）",
        "displayPath": "/display/components/form/FormTable.vue"
    },
    {
        "category": "components/form",
        "name": "FormText",
        "displayName": "FormText",
        "vuePath": "/src/components/form/FormText.vue",
        "docPath": "/docs/components/form/FormText.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                                                          | 默认值         | 必填 | 说明              |\r\n|------------|-------------------------------------------------------------|-------------|----|-----------------|\r\n| `type`     | `'text' \\| 'email' \\| 'password' \\| 'number' \\| 'tel' \\| 'url'` | `'text'`    | 否  | 输入框类型           |\r\n| `pattern`  | `string`                                                      | `undefined` | 否  | 正则表达式验证输入内容   |\r\n| `required` | `boolean`                                                     | `true`      | 否  | 是否为必填项         |\r\n| `direction`| `'horizontal' \\| 'vertical'`                                 | `'horizontal'` | 否  | 标签排列方向         |\r\n| `disabled` | `boolean`                                                     | `false`     | 否  | 是否禁用输入框        |\r\n| `autofocus`| `boolean`                                                     | `false`     | 否  | 自动获取焦点          |\r\n| `readonly` | `boolean`                                                     | `false`     | 否  | 是否只读            |\r\n| `size`     | `'small' \\| 'middle' \\| 'large'`                             | `'middle'`  | 否  | 输入框尺寸           |\r\n| `placeholder` | `string`                                                  | `''`        | 否  | 输入框占位符          |\r\n| `clearable`| `boolean`                                                     | `true`      | 否  | 是否显示清除按钮       |\r\n| `label`    | `string`                                                      | `undefined` | 否  | 标签文字             |\r\n| `name`     | `string`                                                      | `undefined` | 是  | 表单控件名称          |\r\n| `id`       | `string`                                                      | `undefined` | 否  | 输入框的 `id` 属性   |\r\n| `modelValue`| `string`                                                     | `undefined` | 否  | 绑定的输入值          |\r\n\r\n> 💡 提示：支持原生 `input` 的所有属性（如 `autofocus`, `placeholder`, `type=\"email\"` 等）\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数 | 说明              |\r\n|----------|------|-----------------|\r\n| `input`  | `value: string` | 输入内容变化时触发（实时） |\r\n| `change` | `value: string` | 输入框内容变更后触发（失焦时） |\r\n| `focus`  | —    | 输入框获取焦点时触发     |\r\n| `blur`   | —    | 输入框失去焦点时触发     |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未定义任何插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法（无 `defineExpose` 定义）。",
        "displayPath": "/display/components/form/FormText.vue"
    },
    {
        "category": "components/form",
        "name": "FormTextarea",
        "displayName": "FormTextarea",
        "vuePath": "/src/components/form/FormTextarea.vue",
        "docPath": "/docs/components/form/FormTextarea.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                                             | 默认值     | 必填 | 说明                         |\r\n|------------|------------------------------------------------|---------|----|----------------------------|\r\n| `label`    | `string`                                       | `''`    | 否  | 表单项标签                     |\r\n| `size`     | `'small' \\| 'middle' \\| 'large'`               | `'middle'` | 否  | 文本框尺寸                     |\r\n| `disabled` | `boolean`                                      | `false` | 否  | 是否禁用文本框                   |\r\n| `placeholder` | `string`                                    | `'请输入内容'` | 否  | 输入提示内容                    |\r\n| `required` | `boolean`                                      | `true`  | 否  | 是否为必填项                    |\r\n| `rows`     | `number`                                       | `3`     | 否  | 文本框行数                     |\r\n| `resizable`| `boolean`                                      | `false` | 否  | 是否允许拖拽调整大小                |\r\n| `direction`| `'vertical' \\| 'horizontal'`                  | `'vertical'` | 否  | 布局方向，垂直或水平排列标签和文本框     |\r\n| `modelValue`| `string`                                     | `''`    | 否  | 绑定输入值                      |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数 | 说明            |\r\n|----------|------|-----------------|\r\n| `input`  | `string` | 输入内容变化时触发，返回当前值 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n暂无自定义插槽\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n暂无暴露方法",
        "displayPath": "/display/components/form/FormTextarea.vue"
    },
    {
        "category": "components/form",
        "name": "Search",
        "displayName": "Search",
        "vuePath": "/src/components/form/Search.vue",
        "docPath": "/docs/components/form/Search.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型   | 默认值         | 必填 | 说明        |\r\n|------------|------|-------------|----|-----------|\r\n| `placeholder` | `string` | `'搜索你感兴趣的内容'` | 否  | 输入框的占位符文字 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数        | 说明              |\r\n|----------|-------------|-----------------|\r\n| `search` | `(value: string)` | 用户按下回车键时触发，返回当前搜索值 |\r\n| `change` | `(value: string)` | 输入框内容变化时触发，但未按下回车键 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明         | 示例   |\r\n|-----------|------------|------|\r\n| `default` | 默认插槽，用于自定义输入框以外的内容（目前未使用） | —    |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n| 方法名 | 参数 | 返回值 | 说明 |\r\n|------|----|-----|----|\r\n| 暂无内容       | —  | —   | 当前组件未暴露任何方法 |",
        "displayPath": "/display/components/form/Search.vue"
    },
    {
        "category": "components/layout",
        "name": "Card",
        "displayName": "Card",
        "vuePath": "/src/components/layout/Card.vue",
        "docPath": "/docs/components/layout/Card.md",
        "docContent": "# Props 参数\r\n\r\n| 参数        | 类型      | 默认值  | 必填 | 说明             |\r\n|-----------|---------|------|----|------------------|\r\n| `animation` | `boolean` | `false` | 否  | 是否启用悬停动画效果 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前组件未定义任何事件。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明           | 示例                                                |\r\n|-----------|--------------|---------------------------------------------------|\r\n| `header`  | 卡片头部插槽      | `<template #header>这里是头部内容</template>`         |\r\n| `default` | 卡片主体内容插槽（中间区域） | `<template #default>这里是卡片主要内容</template>`     |\r\n| `left`    | 卡片左侧插槽      | `<template #left><div>左侧内容</div></template>`     |\r\n| `right`   | 卡片右侧插槽      | `<template #right><div>右侧内容</div></template>`    |\r\n| `footer`  | 卡片底部插槽      | `<template #footer>这里是底部信息</template>`         |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法（没有使用 `defineExpose` 定义）。",
        "displayPath": "/display/components/layout/Card.vue"
    },
    {
        "category": "components/layout",
        "name": "CollapsibleSection",
        "displayName": "CollapsibleSection",
        "vuePath": "/src/components/layout/CollapsibleSection.vue",
        "docPath": "/docs/components/layout/CollapsibleSection.md",
        "docContent": "# Props 参数\r\n\r\n| 参数                | 类型                                    | 默认值      | 必填 | 说明       |\r\n|-------------------|---------------------------------------|----------|----|----------|\r\n| `isShowArrow`     | `boolean`                             | `true`   | 否  | 是否显示箭头按钮 |\r\n| `initialExpanded` | `boolean`                             | `true`   | 否  | 初始展开状态   |\r\n| `direction`       | `'up' \\| 'down' \\| 'left' \\| 'right'` | `'down'` | 否  | 折叠/展开的方向 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n无自定义事件，支持原生 `div` 的所有事件（如 `click`）。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明         | 示例                                 |\r\n|-----------|------------|------------------------------------|\r\n| `default` | 可折叠区域的内容插槽 | `<template #default>内容</template>` |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n| 方法名      | 参数 | 返回值 | 说明        |\r\n|----------|----|-----|-----------|\r\n| `toggle` | —  | —   | 切换展开/收起状态 |\r\n| `close`  | —  | —   | 关闭折叠区域    |\r\n| `open`   | —  | —   | 打开折叠区域    |\r\n",
        "displayPath": "/display/components/layout/CollapsibleSection.vue"
    },
    {
        "category": "components/layout",
        "name": "ScrollContainer",
        "displayName": "ScrollContainer",
        "vuePath": "/src/components/layout/ScrollContainer.vue",
        "docPath": "/docs/components/layout/ScrollContainer.md",
        "docContent": "# Props 参数\r\n\r\n| 参数             | 类型        | 默认值     | 必填 | 说明               |\r\n|----------------|-----------|---------|----|------------------|\r\n| `scollX`       | `boolean` | `false` | 否  | 是否启用横向滚动         |\r\n| `scollY`       | `boolean` | `false` | 否  | 是否启用纵向滚动         |\r\n| `threshold`    | `number`  | `20`    | 否  | 触发 ended 事件的阈值距离 |\r\n| `emitInterval` | `number`  | `300`   | 否  | 事件触发间隔时间（毫秒）     |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名     | 回调参数 | 说明                            |\r\n|---------|------|-------------------------------|\r\n| `ended` | —    | 当滚动接近容器末尾时触发（根据 threshold 设置） |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明     | 示例                                      |\r\n|-----------|--------|-----------------------------------------|\r\n| `default` | 默认内容插槽 | `<ScrollContainer>内容</ScrollContainer>` |\r\n\r\n---\r\n",
        "displayPath": "/display/components/layout/ScrollContainer.vue"
    },
    {
        "category": "components/navigation",
        "name": "NavSection",
        "displayName": "NavSection",
        "vuePath": "/src/components/navigation/NavSection.vue",
        "docPath": "/docs/components/navigation/NavSection.md",
        "docContent": "# Props 参数\r\n\r\n| 参数       | 类型     | 默认值 | 必填 | 说明         |\r\n|----------|--------|------|----|------------|\r\n| `sections` | `Section[]` | `[]` | 是  | 导航数据源，包含标题和子菜单项的数组 |\r\n| `title`    | `string`    | `''` | 是  | 当前导航栏的标题     |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名    | 回调参数     | 说明         |\r\n|--------|----------|------------|\r\n| `select` | `section: Section` | 当点击无子菜单的导航项时触发，返回被点击的菜单项 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明         | 示例 |\r\n|-----------|------------|-----|\r\n| `default` | 默认插槽，用于导航栏内容 | —   |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未通过 `defineExpose` 暴露任何方法。",
        "displayPath": "/display/components/navigation/NavSection.vue"
    },
    {
        "category": "components/navigation",
        "name": "Tab",
        "displayName": "Tab",
        "vuePath": "/src/components/navigation/Tab.vue",
        "docPath": "/docs/components/navigation/Tab.md",
        "docContent": "# Props 参数\r\n\r\n| 参数          | 类型             | 默认值    | 必填 | 说明                     |\r\n|---------------|------------------|----------|------|--------------------------|\r\n| `list`        | `string[]`       | —        | 是   | 选项卡标题列表             |\r\n| `activeClass` | `string`         | `'active'` | 否   | 激活状态的类名              |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名   | 回调参数  | 说明               |\r\n|---------|----------|--------------------|\r\n| `select` | `index: number` | 当用户点击某个选项卡时触发，返回选中项的索引 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明         | 示例 |\r\n|-----------|--------------|------|\r\n| `default` | 用于自定义选项卡内容 | —    |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未暴露任何方法。",
        "displayPath": "/display/components/navigation/Tab.vue"
    },
    {
        "category": "components/Sql",
        "name": "ConditionSelect",
        "displayName": "ConditionSelect",
        "vuePath": "/src/components/Sql/ConditionSelect.vue",
        "docPath": "/docs/components/Sql/ConditionSelect.md",
        "docContent": "# Props 参数\r\n\r\n| 参数    | 类型      | 默认值 | 必填 | 说明           |\r\n|---------|-----------|--------|------|----------------|\r\n| `fields`| `SqlField[]` | `[]` | 是   | 可用字段配置列表 |\r\n\r\n说明：`fields` 是字段配置数组，每个字段对象应包含以下属性：\r\n- `name: string` 字段名（唯一标识）\r\n- `label: string` 字段显示名\r\n- `type: string` 字段类型（如 `string`, `number`, `datetime` 等）\r\n- `isDefault: boolean` 是否默认展示\r\n- `formatter?: (value: any) => any` 可选字段值格式化函数\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名   | 回调参数             | 说明             |\r\n|----------|----------------------|------------------|\r\n| `submit` | `(conditions: Condition[]) => void` | 查询按钮点击时触发，携带格式化后的查询条件数组 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未定义任何插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n| 方法名       | 参数 | 返回值 | 说明             |\r\n|--------------|------|--------|------------------|\r\n| `resetAll`   | —    | —      | 重置所有查询条件，恢复默认字段 |\r\n| `submitQuery`| —    | —      | 触发查询操作，过滤无效条件并提交格式化后的查询条件 |",
        "displayPath": "/display/components/Sql/ConditionSelect.vue"
    },
    {
        "category": "components/theme",
        "name": "ThemeToggle",
        "displayName": "ThemeToggle",
        "vuePath": "/src/components/theme/ThemeToggle.vue",
        "docPath": "/docs/components/theme/ThemeToggle.md",
        "docContent": "# Props 参数\r\n\r\n| 参数  | 类型             | 默认值 | 必填 | 说明     |\r\n|-------|------------------|--------|------|----------|\r\n| `size` | `string \\| number` | —      | 是   | 图标尺寸   |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名   | 回调参数 | 说明         |\r\n|---------|----------|--------------|\r\n| `click` | —        | 用户点击切换主题时触发 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n暂无插槽定义\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n暂无对外暴露方法",
        "displayPath": "/display/components/theme/ThemeToggle.vue"
    },
    {
        "category": "docs",
        "name": "ComponentDetail",
        "displayName": "ComponentDetail",
        "vuePath": "/src/docs/ComponentDetail.vue",
        "docPath": "/docs/docs/ComponentDetail.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型         | 默认值  | 必填 | 说明         |\r\n|------------|------------|------|----|------------|\r\n| `component` | `ComponentInfo \\| null` | `null` | 是  | 组件信息对象，用于展示组件文档和示例 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前组件未定义任何自定义事件。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前组件未定义任何具名插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n当前组件未通过 `defineExpose` 暴露任何方法。",
        "displayPath": "/display/docs/ComponentDetail.vue"
    },
    {
        "category": "docs",
        "name": "ComponentList",
        "displayName": "ComponentList",
        "vuePath": "/src/docs/ComponentList.vue",
        "docPath": "/docs/docs/ComponentList.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                   | 默认值 | 必填 | 说明           |\r\n|------------|----------------------|------|----|--------------|\r\n| `selected` | `ComponentInfo \\| null` | —    | 是  | 当前选中的组件信息 |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名      | 回调参数        | 说明           |\r\n|----------|-------------|--------------|\r\n| `select` | `comp: ComponentInfo` | 当用户选择一个组件时触发 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n暂无自定义插槽\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n暂无通过 `defineExpose` 暴露的方法",
        "displayPath": "/display/docs/ComponentList.vue"
    },
    {
        "category": "events",
        "name": "index",
        "displayName": "index",
        "vuePath": "/src/events/index.ts",
        "docPath": "/docs/events/index.md",
        "docContent": "# 暂无内容",
        "displayPath": "/display/events/index.vue"
    },
    {
        "category": "events",
        "name": "useDrag",
        "displayName": "useDrag",
        "vuePath": "/src/events/useDrag.ts",
        "docPath": "/docs/events/useDrag.md",
        "docContent": "# Props 参数\r\n\r\n| 参数        | 类型         | 默认值  | 必填 | 说明                  |\r\n|-----------|--------------|--------|----|---------------------|\r\n| `elementRef` | `HTMLElement` | —      | 是  | 需要拖动的目标元素引用        |\r\n| `onMove`     | `() => void`  | —      | 否  | 拖动时触发的回调函数        |\r\n| `interval`   | `number`      | `16`   | 否  | 节流间隔（毫秒），最小为 16 |\r\n| `threshold`  | `number`      | `10`   | 否  | 移动触发阈值（像素）         |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n当前文件未定义事件，事件由 `elementRef` 原生 pointer 事件驱动。\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n当前文件为自定义 Hook，不涉及插槽。\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n| 方法名     | 参数 | 返回值 | 说明              |\r\n|---------|----|-----|-----------------|\r\n| `destroy` | —  | —   | 销毁所有事件监听和状态，用于清理资源 |\r\n| `isMove`  | —  | `boolean` | 返回是否发生了拖动行为     |\r\n\r\n---",
        "displayPath": "/display/events/useDrag.vue"
    },
    {
        "category": "events",
        "name": "useFormEvents",
        "displayName": "useFormEvents",
        "vuePath": "/src/events/useFormEvents.ts",
        "docPath": "/docs/events/useFormEvents.md",
        "docContent": "# Events 事件\r\n\r\n| 事件名           | 回调参数                          | 说明                   |\r\n|----------------|-------------------------------|----------------------|\r\n| `update:modelValue` | `(value: T)`                  | 表单值变化时触发           |\r\n| `input`          | `(value: T, event: Event)`    | 输入时触发               |\r\n| `change`         | `(value: T)`                  | 值改变且元素失去焦点时触发     |\r\n| `focus`          | `(event: FocusEvent)`         | 表单组件获得焦点时触发        |\r\n| `blur`           | `(event: FocusEvent)`         | 表单组件失去焦点时触发        |\r\n| `clear`          | —                             | 清除表单值时触发            |",
        "displayPath": "/display/events/useFormEvents.vue"
    },
    {
        "category": "events",
        "name": "useMousePosition",
        "displayName": "useMousePosition",
        "vuePath": "/src/events/useMousePosition.ts",
        "docPath": "/docs/events/useMousePosition.md",
        "docContent": "# 暂无内容",
        "displayPath": "/display/events/useMousePosition.vue"
    },
    {
        "category": "other",
        "name": "index",
        "displayName": "index",
        "vuePath": "/src/index.ts",
        "docPath": "/docs/index.md",
        "docContent": "# 暂无内容",
        "displayPath": "/display/index.vue"
    },
    {
        "category": "template",
        "name": "Api",
        "displayName": "Api",
        "vuePath": "/src/template/Api.ts",
        "docPath": "/docs/template/Api.md",
        "docContent": "# 暂无内容",
        "displayPath": "/display/template/Api.vue"
    },
    {
        "category": "types",
        "name": "form",
        "displayName": "form",
        "vuePath": "/src/types/form.ts",
        "docPath": "/docs/types/form.md",
        "docContent": "# Props 参数\r\n\r\n| 参数         | 类型                                                          | 默认值         | 必填 | 说明                             |\r\n|--------------|---------------------------------------------------------------|----------------|------|----------------------------------|\r\n| `modelValue` | `T \\| null`                                                   | `undefined`    | 否   | 表单项绑定值（支持 null）        |\r\n| `name`       | `string`                                                      | `undefined`    | 否   | 表单项名称，用于表单提交         |\r\n| `label`      | `string`                                                      | `undefined`    | 否   | label 文本                       |\r\n| `disabled`   | `boolean`                                                     | `false`        | 否   | 是否禁用                           |\r\n| `readonly`   | `boolean`                                                     | `false`        | 否   | 是否只读                           |\r\n| `size`       | `'small' \\| 'middle' \\| 'large'`                              | `'middle'`     | 否   | 表单组件尺寸                       |\r\n| `status`     | `'default' \\| 'success' \\| 'warning' \\| 'error'`              | `undefined`    | 否   | 状态，用于边框颜色和校验反馈       |\r\n| `required`   | `boolean`                                                     | `false`        | 否   | 是否必填（显示红色星号提示）       |\r\n| `placeholder`| `string`                                                      | `undefined`    | 否   | 占位符文本                         |\r\n| `clearable`  | `boolean`                                                     | `false`        | 否   | 是否可清空，显示 × 按钮            |\r\n| `autofocus`  | `boolean`                                                     | `false`        | 否   | 是否自动聚焦                       |\r\n| `id`         | `string`                                                      | `undefined`    | 否   | 唯一标识，用于 label 关联和 a11y  |\r\n| `direction`  | `'vertical' \\| 'horizontal'`                                  | `'vertical'`   | 否   | 排列方向：竖向或横向               |\r\n| `errorMessage`| `string`                                                     | `undefined`    | 否   | 自定义错误信息                     |\r\n\r\n---\r\n\r\n# Events 事件\r\n\r\n| 事件名           | 回调参数                                      | 说明                         |\r\n|------------------|-----------------------------------------------|------------------------------|\r\n| `update:modelValue` | `(value: T): void`                          | 当绑定值变化时触发             |\r\n| `change`            | `(value: T): void`                          | 表单值发生变化时触发（可用于验证） |\r\n| `focus`             | `(event: FocusEvent): void`                 | 聚焦时触发                     |\r\n| `blur`              | `(event: FocusEvent): void`                 | 失焦时触发                     |\r\n| `input`             | `(value: T, event: InputEvent \\| Event): void` | 输入时触发                     |\r\n| `clear`             | `(): void`                                   | 清空操作时触发                 |\r\n\r\n---\r\n\r\n# Slots 插槽\r\n\r\n| 插槽名       | 说明                       | 示例                                               |\r\n|--------------|----------------------------|----------------------------------------------------|\r\n| `prefix`     | 自定义前缀图标/文本          | `<template #prefix=\"{ value }\">前缀内容</template>` |\r\n| `suffix`     | 自定义后缀图标/文本          | `<template #suffix=\"{ value }\">后缀内容</template>` |\r\n| `clear`      | 自定义清空按钮               | `<template #clear>自定义清空图标</template>`        |\r\n| `error`      | 自定义错误信息区域           | `<template #error=\"{ error }\">{{ error }}</template>` |\r\n| `default`    | 默认插槽，用于复杂内容定制     | `<template #default>自定义表单内容</template>`      |\r\n\r\n---\r\n\r\n# Expose 方法\r\n\r\n| 方法名 | 参数 | 返回值 | 说明 |\r\n|--------|------|--------|------|\r\n| 无     | —    | —      | 当前接口未定义任何需要暴露的方法 |",
        "displayPath": "/display/types/form.vue"
    },
    {
        "category": "types",
        "name": "index",
        "displayName": "index",
        "vuePath": "/src/types/index.ts",
        "docPath": "/docs/types/index.md",
        "docContent": "# 暂无内容",
        "displayPath": "/display/types/index.vue"
    },
    {
        "category": "types",
        "name": "Sql",
        "displayName": "Sql",
        "vuePath": "/src/types/Sql.ts",
        "docPath": "/docs/types/Sql.md",
        "docContent": "# Query Schema 文档\r\n\r\n## 类型定义\r\n\r\n### `SqlFieldType`\r\n\r\nSQL 字段类型，表示字段的数据类型。\r\n\r\n```ts\r\ntype SqlFieldType = 'string' | 'number' | 'boolean' | 'datetime'\r\n```\r\n\r\n### `SqlOperator`\r\n\r\nSQL 操作符，表示查询条件中的比较操作。\r\n\r\n```ts\r\ntype SqlOperator = 'between' | '=' | '!=' | '>' | '<' | '>=' | '<='\r\n```\r\n\r\n### `SqlValue`\r\n\r\nSQL 值的类型，支持多种基础类型和数组类型。\r\n\r\n```ts\r\ntype SqlValue = number | string | null | undefined | number[] | string[] | null[] | undefined[]\r\n```\r\n\r\n### `SqlField`\r\n\r\n描述一个 SQL 字段的基本信息。\r\n\r\n```ts\r\ntype SqlField = {\r\n  type: SqlFieldType\r\n  name: string\r\n  label: string\r\n  formatter?: (val: SqlValue) => SqlValue\r\n  isDefault?: boolean\r\n}\r\n```\r\n\r\n### `Condition`\r\n\r\n表示一个查询条件。\r\n\r\n```ts\r\ntype Condition = {\r\n  field: string\r\n  operator: SqlOperator | ''\r\n  value: SqlValue\r\n  type: keyof typeof SQL_FIELD_TYPES\r\n}\r\n```\r\n\r\n### `SqlRenderProps`\r\n\r\n用于渲染查询组件的属性接口。\r\n\r\n```ts\r\ninterface SqlRenderProps {\r\n  type: SqlFieldType\r\n  modelValue: SqlValue\r\n  'onUpdate:modelValue': (val: SqlValue) => void\r\n}\r\n```\r\n\r\n---\r\n\r\n## 常量定义\r\n\r\n### `SQL_FIELD_TYPES`\r\n\r\n字段类型与支持的操作符映射表。\r\n\r\n```ts\r\nexport const SQL_FIELD_TYPES: { [key in SqlFieldType]: { operators: SqlOperator[] } } = {\r\n  number: {\r\n    operators: ['=', '!=', '>', '<', '>=', '<=', 'between'],\r\n  },\r\n  string: {\r\n    operators: ['=', '!=', '>', '<', 'between'],\r\n  },\r\n  datetime: {\r\n    operators: ['between'],\r\n  },\r\n  boolean: {\r\n    operators: ['='],\r\n  },\r\n}\r\n```\r\n\r\n### `SQL_OPERATORS`\r\n\r\n操作符语义定义，包括标签和期望值类型。\r\n\r\n```ts\r\nexport const SQL_OPERATORS: { [key in SqlOperator]: Record<string, string> } = {\r\n  '=': { label: '等于', expects: 'single' },\r\n  '!=': { label: '不等于', expects: 'single' },\r\n  '>': { label: '大于', expects: 'single' },\r\n  '<': { label: '小于', expects: 'single' },\r\n  '>=': { label: '大于等于', expects: 'single' },\r\n  '<=': { label: '小于等于', expects: 'single' },\r\n  between: { label: '介于', expects: 'range' }, // 需要两个值\r\n}\r\n```\r\n\r\n### `SQL_TYPE_TO_COMPONENT`\r\n\r\n字段类型与 Vue 组件的映射关系。\r\n\r\n```ts\r\nexport const SQL_TYPE_TO_COMPONENT: Record<string, Component> = {\r\n  string: ElInput,\r\n  number: ElInputNumber,\r\n  boolean: ElSwitch,\r\n  datetime: ElDatePicker,\r\n}\r\n```\r\n\r\n---\r\n\r\n## 工具函数\r\n\r\n### `isArrayValue`\r\n\r\n判断值是否为合法的数组值（长度为 2 的数组）。\r\n\r\n```ts\r\nfunction isArrayValue(value: SqlValue): value is number[] | string[] | null[] | undefined[]\r\n```\r\n\r\n---\r\n\r\n## 操作符渲染函数\r\n\r\n### `SQL_OPERATOR_TO_COMPONENT`\r\n\r\n操作符到组件的映射表，用于动态渲染对应的输入组件。\r\n\r\n#### `'range'`\r\n\r\n处理范围操作符（如 `between`），根据字段类型渲染不同的输入组件：\r\n\r\n- `datetime`：渲染 `ElDatePicker`（`datetimerange` 类型）\r\n- `number`：两个 `ElInputNumber` 组成的范围输入\r\n- `string`：两个 `ElInput` 组成的范围输入\r\n\r\n#### `'list'`\r\n\r\n处理列表操作符（如 `in`），输入值以逗号分隔。\r\n\r\n#### `'single'`\r\n\r\n处理单值操作符（如 `=`, `>`），根据字段类型使用对应的组件：\r\n\r\n- `datetime`：使用 `ElDatePicker` 并设置 `type=\"datetime\"`\r\n- `boolean`：使用 `ElSwitch`\r\n- 其他：使用 `ElInput` 并带有默认占位符\r\n\r\n---\r\n\r\n## 示例说明\r\n\r\n### 渲染一个 `number` 类型的 `between` 查询条件\r\n\r\n```ts\r\nconst props = {\r\n  type: 'number',\r\n  modelValue: [10, 20],\r\n  'onUpdate:modelValue': (val) => console.log(val),\r\n}\r\nconst rangeComponent = SQL_OPERATOR_TO_COMPONENT.range(props)\r\n```\r\n\r\n### 渲染一个 `string` 类型的 `=` 查询条件\r\n\r\n```ts\r\nconst props = {\r\n  type: 'string',\r\n  modelValue: 'test',\r\n  'onUpdate:modelValue': (val) => console.log(val),\r\n}\r\nconst singleComponent = SQL_OPERATOR_TO_COMPONENT.single(props)\r\n```\r\n\r\n### 渲染一个 `datetime` 类型的 `between` 查询条件\r\n\r\n```ts\r\nconst props = {\r\n  type: 'datetime',\r\n  modelValue: ['2023-01-01', '2023-12-31'],\r\n  'onUpdate:modelValue': (val) => console.log(val),\r\n}\r\nconst rangeComponent = SQL_OPERATOR_TO_COMPONENT.range(props)\r\n```\r\n\r\n---\r\n\r\n## 用法建议\r\n\r\n### 动态渲染查询条件组件\r\n\r\n```ts\r\nfunction renderCondition(field: SqlField, condition: Condition) {\r\n  const operatorDef = SQL_OPERATORS[condition.operator]\r\n  const renderer = SQL_OPERATOR_TO_COMPONENT[operatorDef.expects]\r\n  return renderer({\r\n    type: field.type,\r\n    modelValue: condition.value,\r\n    'onUpdate:modelValue': (val) => updateConditionValue(condition, val),\r\n  })\r\n}\r\n```\r\n\r\n### 字段类型与组件映射\r\n\r\n```ts\r\nfunction getComponentForFieldType(type: SqlFieldType): Component {\r\n  return SQL_TYPE_TO_COMPONENT[type] || ElInput\r\n}\r\n```\r\n\r\n### 判断值是否为合法范围\r\n\r\n```ts\r\nif (isArrayValue(condition.value)) {\r\n  // 处理范围值\r\n}\r\n```\r\n\r\n---\r\n\r\n## 注意事项\r\n\r\n- `SQL_OPERATOR_TO_COMPONENT` 中的渲染函数依赖 Vue 的 `h` 函数，需在组件上下文中使用。\r\n- `modelValue` 和 `onUpdate:modelValue` 是响应式绑定的关键，需确保正确传递。\r\n- `formatter` 字段可用于在显示或提交前格式化字段值。\r\n- `SQL_OPERATORS` 支持扩展，可添加 `in`、`contains` 等操作符。\r\n\r\n---\r\n\r\n## 推荐学习路径\r\n\r\n1. **Vue Composition API**：理解 `h` 函数、组件动态渲染、响应式数据绑定。\r\n2. **TypeScript 泛型与映射类型**：掌握 `key in SqlFieldType`、`Record<string, T>` 等高级类型用法。\r\n3. **Element Plus 组件库**：熟悉 `ElInput`, `ElInputNumber`, `ElDatePicker`, `ElSwitch` 等组件的使用。\r\n4. **SQL 查询构建原理**：了解如何将用户输入转换为 SQL 查询条件。",
        "displayPath": "/display/types/Sql.vue"
    },
    {
        "category": "utils",
        "name": "index",
        "displayName": "index",
        "vuePath": "/src/utils/index.ts",
        "docPath": "/docs/utils/index.md",
        "docContent": "# 暂无内容",
        "displayPath": "/display/utils/index.vue"
    },
    {
        "category": "utils",
        "name": "useDebounce",
        "displayName": "useDebounce",
        "vuePath": "/src/utils/useDebounce.ts",
        "docPath": "/docs/utils/useDebounce.md",
        "docContent": "# 暂无内容",
        "displayPath": "/display/utils/useDebounce.vue"
    },
    {
        "category": "utils",
        "name": "useLRUCache",
        "displayName": "useLRUCache",
        "vuePath": "/src/utils/useLRUCache.ts",
        "docPath": "/docs/utils/useLRUCache.md",
        "docContent": "# Expose 方法\r\n\r\n该类为通用 LRU 缓存实现，未使用 Vue Composition API 中的 `defineExpose`，因此无对外暴露的特定方法。\r\n\r\n# Props 参数\r\n\r\n该类为 TypeScript 实现的通用数据结构，不涉及 Vue 组件 props 参数。\r\n\r\n# Events 事件\r\n\r\n该类为纯逻辑实现，不涉及事件触发机制，因此无相关事件。\r\n\r\n# Slots 插槽\r\n\r\n该类为 TypeScript 类实现，不涉及 Vue 插槽机制，因此无相关插槽。\r\n\r\n# Methods 方法\r\n\r\n| 方法名         | 参数                        | 返回值类型             | 说明                                                         |\r\n|--------------|---------------------------|---------------------|------------------------------------------------------------|\r\n| `get`        | `key: string`             | `T \\| null`         | 获取缓存值，若存在则更新访问顺序                                       |\r\n| `set`        | `key: string, value: T`   | `void`              | 设置缓存值，并更新访问顺序或执行淘汰策略                                   |\r\n| `remove`     | `key: string`             | `void`              | 删除指定键的缓存                                                     |\r\n| `clear`      | —                         | `void`              | 清空整个缓存                                                         |\r\n| `getLatestKey` | —                       | `string \\| null`    | 获取最近使用的一条记录的 key                                           |\r\n| `getLatestValue` | —                     | `T \\| null`         | 获取最近使用的一条记录的 value                                          |\r\n| `getRecent`  | `count: number`           | `Array<{ key: string; value: T }>` | 获取最近使用的前 N 条记录（最新的在前）                                    |\r\n| `size`       | —                         | `number`            | 获取当前缓存中的项数                                                  |\r\n| `capacity`   | —                         | `number`            | 获取缓存的最大容量                                                  |\r\n| `getName`    | —                         | `string`            | 获取缓存名称                                                       |\r\n| `keys`       | —                         | `string[]`          | 获取当前所有键（按访问顺序：从最久到最近）                                    |\r\n| `has`        | `key: string`             | `boolean`           | 检查是否包含某个键                                                   |\r\n\r\n# Usage 示例\r\n\r\n```ts\r\nconst cache = new UseLRUCache<number>('myCache', 3);\r\n\r\ncache.set('a', 1);\r\ncache.set('b', 2);\r\ncache.set('c', 3);\r\n\r\nconsole.log(cache.get('a')); // 输出 1，并更新 a 的访问顺序\r\n\r\ncache.set('d', 4); // 此时超过容量，最久未使用的 b 将被移除\r\n\r\nconsole.log(cache.keys()); // ['c', 'a', 'd']\r\n```",
        "displayPath": "/display/utils/useLRUCache.vue"
    },
    {
        "category": "utils",
        "name": "useMemoryCache",
        "displayName": "useMemoryCache",
        "vuePath": "/src/utils/useMemoryCache.ts",
        "docPath": "/docs/utils/useMemoryCache.md",
        "docContent": "# `UseMemoryCache` 缓存类文档\r\n\r\n## Props 参数\r\n\r\n此类为纯逻辑类，无 UI 组件相关属性。\r\n\r\n---\r\n\r\n## Events 事件\r\n\r\n此类不涉及事件触发机制，因此无对外事件。\r\n\r\n---\r\n\r\n## Slots 插槽\r\n\r\n此类为内存缓存实现，不涉及插槽内容。\r\n\r\n---\r\n\r\n## Expose 方法\r\n\r\n| 方法名     | 参数 | 返回值 | 说明                        |\r\n|----------|----|-----|---------------------------|\r\n| `set`    | `(key: string, value: T): void` | `void` | 设置缓存项，使用默认过期时间 |\r\n| `get`    | `(key: string): T \\| null`      | `T \\| null` | 获取缓存项，若不存在或过期则返回 null |\r\n| `has`    | `(key: string): boolean`        | `boolean` | 判断缓存中是否存在未过期的项 |\r\n| `delete` | `(key: string): void`           | `void` | 删除指定缓存项              |\r\n| `clear`  | `()`                            | `void` | 清空所有缓存                |\r\n| `size`   | `()`                            | `number` | 获取当前缓存项数量            |\r\n\r\n---\r\n\r\n## 其他说明\r\n\r\n- 默认缓存过期时间为 **5分钟（300000毫秒）**\r\n- 缓存采用 **滑动窗口策略**：每次读取时刷新过期时间\r\n- 后台定时清理任务每 **60秒** 执行一次，清理过期缓存项\r\n\r\n> 💡 提示：该缓存类适合用于内存中临时存储对象，例如缓存接口数据、用户状态等，不适合用于持久化存储。若需持久化，请结合 `localStorage` 或其他持久化方案。",
        "displayPath": "/display/utils/useMemoryCache.vue"
    },
    {
        "category": "utils",
        "name": "useThrottle",
        "displayName": "useThrottle",
        "vuePath": "/src/utils/useThrottle.ts",
        "docPath": "/docs/utils/useThrottle.md",
        "docContent": "# 暂无内容",
        "displayPath": "/display/utils/useThrottle.vue"
    },
    {
        "category": "utils",
        "name": "useTime",
        "displayName": "useTime",
        "vuePath": "/src/utils/useTime.ts",
        "docPath": "/docs/utils/useTime.md",
        "docContent": "# TimeUtils API 文档\r\n\r\n## 构造函数\r\n\r\n```ts\r\nnew TimeUtils(input?: Date | number | string | null, locale: string = 'zh-CN')\r\n```\r\n\r\n| 参数    | 类型                             | 默认值   | 必填 | 说明                           |\r\n|---------|----------------------------------|----------|------|--------------------------------|\r\n| input   | `Date | number | string | null` | `null` | 初始化时间，支持多种格式       |\r\n| locale  | `string`                         | `zh-CN`| 否    | 本地化语言设置（如 'en-US'）   |\r\n\r\n> ⚠️ 如果输入无效日期格式或时间戳，将抛出错误 `Error('Invalid date string or timestamp')`\r\n\r\n---\r\n\r\n## 实例方法\r\n\r\n### `format(format: string = 'YYYY-MM-DD HH:mm:ss'): string`\r\n\r\n| 参数   | 类型   | 默认值           | 必填 | 说明                   |\r\n|--------|--------|------------------|------|------------------------|\r\n| format | string | `YYYY-MM-DD HH:mm:ss` | 否    | 自定义日期格式字符串       |\r\n\r\n将当前日期格式化为指定格式的字符串，支持以下占位符：\r\n\r\n- `YYYY`: 四位年份\r\n- `MM`: 两位月份（补零）\r\n- `DD`: 两位日期（补零）\r\n- `HH`: 两位小时（24小时制）\r\n- `mm`: 两位分钟\r\n- `ss`: 两位秒数\r\n- `SSS`: 三位毫秒\r\n- `ddd`: 0-6 星期几（0为星期日）\r\n\r\n---\r\n\r\n### `formatLocale(format: string = 'PPP p', locales?: string): string`\r\n\r\n| 参数    | 类型   | 默认值     | 必填 | 说明                           |\r\n|---------|--------|------------|------|--------------------------------|\r\n| format  | string | `PPP p`    | 否    | 内置格式模板（如 'PPP p'）     |\r\n| locales | string | `this.locale` | 否    | 本地化语言（如 'en-US'）       |\r\n\r\n支持的内置格式：\r\n\r\n- `'PPPP'`: \"2025年4月5日 星期五\" 或 \"Friday, April 5, 2025\"\r\n- `'PPP'`: \"2025年4月5日\" 或 \"April 5, 2025\"\r\n- `'PP'`: \"Apr 5, 2025\"\r\n- `'pp'`: \"14:30:25\"\r\n- `'PPP p'`: \"April 5, 2025, 14:30\"\r\n\r\n---\r\n\r\n### `customFormatLocale(format: string, locales: string): string`\r\n\r\n| 参数    | 类型   | 默认值 | 必填 | 说明                       |\r\n|---------|--------|--------|------|----------------------------|\r\n| format  | string | —      | 是    | 自定义国际化格式字符串       |\r\n| locales | string | —      | 是    | 指定本地化语言（如 'en-US'） |\r\n\r\n支持自定义格式，例如：\r\n\r\n```ts\r\n'{YYYY}年{MM}月{DD}日 {weekday:long}'\r\n// 输出：2025年04月05日 星期六\r\n```\r\n\r\n支持的占位符：\r\n\r\n- `{YYYY}`: 四位年份\r\n- `{MM}`: 两位月份（补零）\r\n- `{DD}`: 两位日期（补零）\r\n- `{HH}`: 两位小时（24小时制）\r\n- `{mm}`: 两位分钟\r\n- `{ss}`: 两位秒数\r\n- `{weekday:long}`: 完整星期名称（如 \"Saturday\"）\r\n- `{weekday:short}`: 简写星期名称（如 \"Sat\"）\r\n- `{month:long}`: 完整月份名称（如 \"April\"）\r\n- `{month:short}`: 简写月份名称（如 \"Apr\"）\r\n\r\n---\r\n\r\n### `year(): number`\r\n\r\n获取年份（本地时间）\r\n\r\n---\r\n\r\n### `month(): number`\r\n\r\n获取月份（1-12，本地时间）\r\n\r\n---\r\n\r\n### `dateNum(): number`\r\n\r\n获取日期（1-31，本地时间）\r\n\r\n---\r\n\r\n### `hour(): number`\r\n\r\n获取小时（0-23，本地时间）\r\n\r\n---\r\n\r\n### `minute(): number`\r\n\r\n获取分钟（0-59，本地时间）\r\n\r\n---\r\n\r\n### `second(): number`\r\n\r\n获取秒数（0-59，本地时间）\r\n\r\n---\r\n\r\n### `millisecond(): number`\r\n\r\n获取毫秒数（0-999，本地时间）\r\n\r\n---\r\n\r\n### `day(): number`\r\n\r\n获取星期几（0-6，0表示星期日，本地时间）\r\n\r\n---\r\n\r\n### `toUTC(): UTCTimeUtils`\r\n\r\n返回一个基于 UTC 时间的 `UTCTimeUtils` 实例。\r\n\r\n---\r\n\r\n### `add(amount: number, unit: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'): this`\r\n\r\n| 参数   | 类型   | 默认值 | 必填 | 说明                     |\r\n|--------|--------|--------|------|--------------------------|\r\n| amount | number | —      | 是    | 要增加的时间数量           |\r\n| unit   | string | —      | 是    | 时间单位（年/月/日/时/分/秒） |\r\n\r\n链式调用支持，可连续操作。\r\n\r\n---\r\n\r\n### `subtract(amount: number, unit: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'): this`\r\n\r\n| 参数   | 类型   | 默认值 | 必填 | 说明                     |\r\n|--------|--------|--------|------|--------------------------|\r\n| amount | number | —      | 是    | 要减少的时间数量           |\r\n| unit   | string | —      | 是    | 时间单位（年/月/日/时/分/秒） |\r\n\r\n基于 `add(-amount, unit)` 实现。\r\n\r\n---\r\n\r\n### `toDate(): Date`\r\n\r\n返回当前日期的 `Date` 对象副本。\r\n\r\n---\r\n\r\n### `valueOf(): number`\r\n\r\n返回当前时间的时间戳（毫秒）。\r\n\r\n---\r\n\r\n### `toString(): string`\r\n\r\n返回默认格式化字符串（`YYYY-MM-DD HH:mm:ss`）。\r\n\r\n---\r\n\r\n## 静态方法\r\n\r\n### `static now(locale?: string): TimeUtils`\r\n\r\n| 参数   | 类型   | 默认值 | 必填 | 说明               |\r\n|--------|--------|--------|------|--------------------|\r\n| locale | string | —      | 否    | 本地化语言设置       |\r\n\r\n返回当前时间的 `TimeUtils` 实例。\r\n\r\n---\r\n\r\n### `static from(input: Date | number | string, locale?: string): TimeUtils`\r\n\r\n| 参数   | 类型                 | 默认值 | 必填 | 说明                   |\r\n|--------|----------------------|--------|------|------------------------|\r\n| input  | `Date | number | string` | —      | 支持多种格式的时间输入   |\r\n| locale | string               | —      | 否    | 本地化语言设置           |\r\n\r\n返回指定时间的 `TimeUtils` 实例。\r\n\r\n---\r\n\r\n### `static utc(input?: Date | number | string, locale?: string): UTCTimeUtils`\r\n\r\n| 参数   | 类型                             | 默认值   | 必填 | 说明                       |\r\n|--------|----------------------------------|----------|------|----------------------------|\r\n| input  | `Date | number | string | null` | `null` | 支持多种格式的时间输入     |\r\n| locale | string                           | —        | 否    | 本地化语言设置（如 'en-US'） |\r\n\r\n返回基于 UTC 时间的 `UTCTimeUtils` 实例。\r\n\r\n---\r\n\r\n## UTCTimeUtils 类\r\n\r\n### 构造函数\r\n\r\n```ts\r\nnew UTCTimeUtils(input?: Date | number | string | null, locale: string = 'en-US')\r\n```\r\n\r\n| 参数    | 类型                             | 默认值   | 必填 | 说明                           |\r\n|---------|----------------------------------|----------|------|--------------------------------|\r\n| input   | `Date | number | string | null` | `null` | 初始化时间，支持多种格式       |\r\n| locale  | `string`                         | `en-US`| 否    | 本地化语言设置（如 'zh-CN'）   |\r\n\r\n> ⚠️ 如果输入无效日期格式或时间戳，将抛出错误 `Error('Invalid date')`\r\n\r\n---\r\n\r\n### `format(format: string = 'YYYY-MM-DD HH:mm:ss'): string`\r\n\r\n与 `TimeUtils.format` 类似，但输出基于 UTC 时间。\r\n\r\n---\r\n\r\n### `formatLocale(format: string = 'PPP p', locales?: string): string`\r\n\r\n与 `TimeUtils.formatLocale` 类似，但输出基于 UTC 时间。\r\n\r\n---\r\n\r\n### `customFormatLocale(format: string, locales: string): string`\r\n\r\n与 `TimeUtils.customFormatLocale` 类似，但输出基于 UTC 时间。\r\n\r\n---\r\n\r\n### `year(): number`、`month(): number`、`dateNum(): number` 等\r\n\r\n与 `TimeUtils` 中对应方法类似，但返回的是 UTC 时间值。\r\n\r\n---\r\n\r\n### `toDate(): Date`、`valueOf(): number`、`toString(): string`\r\n\r\n与 `TimeUtils` 中对应方法类似。",
        "displayPath": "/display/utils/useTime.vue"
    }
]
