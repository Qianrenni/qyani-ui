<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QFormColorPicker} from "qiannai-components";
import {reactive} from "vue";

const form = reactive({
  color: '#007BFF',
});
const code = `
\`\`\`html
<QFormColorPicker
    v-model="form.color"
    label="主题颜色"
    name="color"
    size="large"
/>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <QFormColorPicker
        v-model="form.color"
        label="主题颜色"
        name="color"
        size="large"
    />
  </DemoBlock>
</template>

<style scoped>

</style>
