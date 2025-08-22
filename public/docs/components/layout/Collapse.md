# Collapse 折叠面板

Collapse折叠面板是一种内容区域可折叠/展开的组件，用于展示大量信息时节省页面空间。

## 基础用法

Collapse组件需要与CollapseItem组件配合使用，通过`v-model`控制展开的面板。

```vue
<template>
  <collapse v-model="activeNames">
    <collapse-item name="1" title="一致性 Consistency">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </collapse-item>
    <collapse-item name="2" title="反馈 Feedback">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现操作结果。</div>
    </collapse-item>
  </collapse>
</template>

<script setup>
import { ref } from 'vue'
import { Collapse, CollapseItem } from '@/components/layout'

const activeNames = ref(['1'])
</script>
```

## 手风琴效果

通过设置`accordion`属性开启手风琴模式，每次只能展开一个面板。

```vue
<template>
  <collapse v-model="activeName" accordion>
    <collapse-item name="1" title="一致性 Consistency">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    </collapse-item>
    <collapse-item name="2" title="反馈 Feedback">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    </collapse-item>
  </collapse>
</template>

<script setup>
import { ref } from 'vue'
import { Collapse, CollapseItem } from '@/components/layout'

const activeName = ref('1')
</script>
```

## 禁用状态

通过设置CollapseItem的`disabled`属性可以禁用某个面板。

```vue
<template>
  <collapse v-model="activeNames">
    <collapse-item name="1" title="正常状态">
      <div>这是正常状态的面板</div>
    </collapse-item>
    <collapse-item name="2" title="禁用状态" disabled>
      <div>这是禁用状态的面板</div>
    </collapse-item>
  </collapse>
</template>

<script setup>
import { ref } from 'vue'
import { Collapse, CollapseItem } from '@/components/layout'

const activeNames = ref(['1'])
</script>
```

## Collapse Props

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| --- | --- | --- | --- | --- |
| modelValue | 当前激活的面板的name | string \| string[] | - | 否 |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个面板 | boolean | false | 否 |

## Collapse Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 展开的面板改变时触发 | (value: string \| string[]) => void |

## CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| --- | --- | --- | --- | --- |
| name | 唯一标识符 | string | - | 是 |
| title | 面板标题 | string | '' | 否 |
| disabled | 是否禁用 | boolean | false | 否 |

## CollapseItem Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 面板内容 |