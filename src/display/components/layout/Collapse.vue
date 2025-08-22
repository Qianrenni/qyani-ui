<!-- App.vue 或其他页面 -->
<template>
  <DemoBlock>
    <h2>基础用法</h2>
    <collapse v-model="activeNames" @change="handleChange">
      <collapse-item name="1" title="一致性 Consistency">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </collapse-item>
      <collapse-item name="2" title="反馈 Feedback">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现操作结果。</div>
      </collapse-item>
      <collapse-item name="3" title="效率 Efficiency">
        <div class="scroll-container scroll-y">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        </div>
      </collapse-item>
    </collapse>
    <h2>手风琴效果</h2>
    <collapse v-model="activeName" accordion>
      <collapse-item name="a" title="一致性 Consistency">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </collapse-item>
      <collapse-item name="b" title="反馈 Feedback">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现操作结果。</div>
      </collapse-item>
      <collapse-item name="c" title="效率 Efficiency">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </collapse-item>
    </collapse>
  </DemoBlock>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {QCollapse} from "qyani-components";
import {QCollapseItem} from "qyani-components";
import DemoBlock from "@/DemoBlock.vue";
const activeNames = ref(['1']);
const activeName = ref('a');

const handleChange = (val: any) => {
  console.log(val);
}

const code =`
\`\`\`html
    <h2>基础用法</h2>
    <collapse v-model="activeNames" @change="handleChange">
      <collapse-item name="1" title="一致性 Consistency">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </collapse-item>
      <collapse-item name="2" title="反馈 Feedback">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现操作结果。</div>
      </collapse-item>
      <collapse-item name="3" title="效率 Efficiency">
        <div class="scroll-container scroll-y">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        </div>
      </collapse-item>
    </collapse>
    <h2>手风琴效果</h2>
    <collapse v-model="activeName" accordion>
      <collapse-item name="a" title="一致性 Consistency">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </collapse-item>
      <collapse-item name="b" title="反馈 Feedback">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现操作结果。</div>
      </collapse-item>
      <collapse-item name="c" title="效率 Efficiency">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </collapse-item>
    </collapse>
\`\`\``+`
\`\`\`ts
import {ref} from 'vue'
import {QCollapse} from "qyani-components";
import {QCollapseItem} from "qyani-components";
const activeNames = ref(['1']);
const activeName = ref('a');

const handleChange = (val: any) => {
  console.log(val);
}
\`\`\``
</script>