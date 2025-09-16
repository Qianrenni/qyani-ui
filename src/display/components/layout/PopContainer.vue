<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import {QPopContainer} from "qyani-components";

const code = `
\`\`\`html
<div class="container-align-center container-column margin-vertical gap">
  <!-- 默认位置：bottom-center，hover 显示 -->
  <QPopContainer hoverShow>
    <div class="trigger">Hover Me</div>
    <template #pop>
      <div class="pop-panel">
        这是弹出内容
      </div>
    </template>
  </QPopContainer>

  <!-- 固定显示，顶部居中 -->
  <QPopContainer :visible="true" position="top-center">
    <div class="trigger">常显 Pop (top-center)</div>
    <template #pop>
      <div class="pop-panel">
        始终显示的内容
      </div>
    </template>
  </QPopContainer>

  <!-- 左侧居中弹出 -->
  <QPopContainer position="left-center" hoverShow>
    <div class="trigger">左侧弹出</div>
    <template #pop>
      <div class="pop-panel">
        向左展开的气泡
      </div>
    </template>
  </QPopContainer>
</div>
\`\`\`
`;
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vertical gap">
      <!-- 默认位置：bottom-center，hover 显示 -->
      <QPopContainer>
        <div class="trigger">Hover Me</div>
        <template #pop>
          <div class="pop-panel">
            这是弹出内容
          </div>
        </template>
      </QPopContainer>

      <!-- 固定显示，顶部居中 -->
      <QPopContainer :visible="true" position="top-center">
        <div class="trigger">常显 Pop (top-center)</div>
        <template #pop>
          <div class="pop-panel">
            始终显示的内容
          </div>
        </template>
      </QPopContainer>

      <!-- 左侧居中弹出 -->
      <QPopContainer position="left-center" hoverShow>
        <div class="trigger">左侧弹出</div>
        <template #pop>
          <div class="pop-panel">
            向左展开的气泡
          </div>
        </template>
      </QPopContainer>
    </div>
  </DemoBlock>
</template>

<style scoped>
.margin-vertical {
  margin: 20px 0;
}
.gap {
  gap: 20px;
}
.container-align-center {
  align-items: center;
}
.container-column {
  flex-direction: column;
}
.container-center {
  display: flex;
  justify-content: center;
}
.trigger {
  padding: 10px 15px;
  background-color: #1976d2;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}
.pop-panel {
  padding: 12px;
  min-width: 120px;
  background: var(--primary-color);
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: #333;
  text-align: center;
}
</style>