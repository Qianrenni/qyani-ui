<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import { QFormSwitch } from "qyani-components";
import {ref} from "vue";

const code = `
\`\`\`html
<div class="container-align-center container-column gap">
  <QFormSwitch v-model="checked" label="开关选项" />
  <QFormSwitch v-model="checked" label="禁用状态" disabled />
  <QFormSwitch v-model="checked" label="小尺寸" size="small" />
  <QFormSwitch v-model="checked" label="垂直方向" direction="vertical" />
</div>
\`\`\`
`.trim();

const checked = ref(false);
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column gap">
      <QFormSwitch v-model="checked" label="开关选项" />
      <QFormSwitch v-model="checked" label="禁用状态" disabled />
      <QFormSwitch v-model="checked" label="小尺寸" size="small" />
      <QFormSwitch v-model="checked" label="垂直方向" direction="vertical" />
    </div>
  </DemoBlock>
</template>

<style scoped>
.gap {
  gap: 1rem;
}
</style>
