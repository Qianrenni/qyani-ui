```vue
<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import { QSwiperAction } from "qyani-components";
import { ref } from "vue";
const code = `
\`\`\`html
<div class="swiper-action-demo">
  <QSwiperAction v-model:open="open1" @swipe="onSwipe">
    <div class="swiper-content">左滑操作项</div>
    <template #action>
      <button @click="onDelete">删除</button>
    </template>
  </QSwiperAction>

  <QSwiperAction :disabled="true">
    <div class="swiper-content">禁用状态</div>
    <template #action>
      <button>删除</button>
    </template>
  </QSwiperAction>
</div>
\`\`\`
`;

// 示例逻辑
const open1 = ref(false);
const onSwipe = () => {
  console.log("触发滑动操作");
};
const onDelete = () => {
  console.log("执行删除");
};
</script>

<template>
  <DemoBlock :code="code">
    <div class="swiper-action-demo">
      <QSwiperAction v-model:open="open1" @swipe="onSwipe">
        <div class="swiper-content">左滑操作项</div>
        <template #action>
          <button @click="onDelete">删除</button>
        </template>
      </QSwiperAction>

      <QSwiperAction :disabled="true">
        <div class="swiper-content">禁用状态</div>
        <template #action>
          <button>删除</button>
        </template>
      </QSwiperAction>
    </div>
  </DemoBlock>
</template>

<style scoped>
.swiper-action-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.swiper-content {
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
}

.swiper-action-demo button {
  height: 50px;
  width: 80px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
```