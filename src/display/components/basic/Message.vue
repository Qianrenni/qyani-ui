<!-- MessageDemo.vue -->
<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import { QMessage } from "qyani-components";

const code = `
\`\`\`html
<div class="container-align-center container-column margin-vetical gap">
  <QMessage message="这是一个成功提示" type="success" />
  <QMessage message="这是一个错误提示" type="error" />
  <QMessage message="这是一个警告提示" type="warning" />
  <QMessage message="这是一个信息提示" type="info" />
</div>
\`\`\`
`;
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vetical gap">
      <QMessage message="这是一个成功提示" type="success" />
      <QMessage message="这是一个错误提示" type="error" />
      <QMessage message="这是一个警告提示" type="warning" />
      <QMessage message="这是一个信息提示" type="info" />
    </div>
  </DemoBlock>
</template>

<style scoped>
/* 可以在这里添加额外样式 */
</style>
