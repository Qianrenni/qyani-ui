```vue
<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import { QLoading } from "qyani-components";

const code = `
\`\`\`html
<div class="container-align-center container-column margin-vetical gap">
  <QLoading :show="true" type="breathing" text="加载中..." />
  <QLoading :show="true" type="spinner" text="请稍候" />
  <QLoading :show="true" type="skeleton" text="骨架屏加载" />
</div>
\`\`\`
`;
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vetical gap">
      <QLoading :show="true" type="breathing" text="加载中..." />
      <QLoading :show="true" type="spinner" text="请稍候" />
      <QLoading :show="true" type="skeleton" text="骨架屏加载" />
    </div>
  </DemoBlock>
</template>

<style scoped>
</style>
```