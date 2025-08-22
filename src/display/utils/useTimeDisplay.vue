<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import { useTimeDisplay } from "qyani-components";

// 示例时间源和格式
const now = new Date();
const targetDate = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000); // 10天后

// 示例 1: 自动判断模式
const autoModeTime = useTimeDisplay(targetDate, '{DD}天{HH}小时{mm}分{ss}秒');
// 示例 3: 实时时间模式
const realtimeModeTime = useTimeDisplay(undefined, 'YYYY年MM月DD日HH:mm:ss');

const code = `
\`\`\`html
<div class="container-align-center container-column margin-vetical gap">
  <!-- 时间显示示例 -->
  <div class="time-display">
    <h3>自动模式: {{ autoModeTime }}</h3>
    <h3>实时时间: {{ realtimeModeTime }}</h3>
  </div>
</div>
\`\`\`
`+`
\`\`\`ts
import { useTimeDisplay } from "qyani-components";

// 示例时间源和格式
const now = new Date();
const targetDate = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000); // 10天后

// 示例 1: 自动判断模式
const autoModeTime = useTimeDisplay(targetDate, '{DD}天{HH}小时{mm}分{ss}秒');
// 示例 3: 实时时间模式
const realtimeModeTime = useTimeDisplay(undefined, 'YYYY年MM月DD日HH:mm:ss');

\`\`\`
`
;
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vetical gap">
      <!-- 时间显示示例 -->
      <div class="time-display">
        <h3>自动模式: {{ autoModeTime }}</h3>
        <h3>实时时间: {{ realtimeModeTime }}</h3>
      </div>
    </div>
  </DemoBlock>
</template>

<style scoped>
.time-display {
  padding: 20px;
  text-align: center;
}
</style>
