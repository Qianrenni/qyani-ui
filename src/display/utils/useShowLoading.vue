```vue
<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import {useShowLoading} from 'qyani-components'
const code = `
\`\`\`javascript
<div class="container-align-center container-column margin-vetical gap">
  <button @click="useShowLoading.show()" class="q-button">显示加载动画</button>
  <button @click="useShowLoading.hide()" class="q-button">隐藏加载动画</button>
</div>
\`\`\`
`;
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vetical gap">
      <button @click="useShowLoading.show()" class="q-button">显示加载动画</button>
      <button @click="useShowLoading.hide()" class="q-button">隐藏加载动画</button>
    </div>
  </DemoBlock>
</template>

<style scoped>
.margin-vetical {
  margin-top: 16px;
  margin-bottom: 16px;
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
.gap {
  gap: 16px;
}
.q-button {
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  background-color: #007aff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
.q-button:hover {
  background-color: #005edc;
}
</style>
```