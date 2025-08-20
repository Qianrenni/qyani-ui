<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QFormTextarea} from "qyani-components";
import {reactive} from "vue";

const code = `
\`\`\`html
<QFormTextarea
    v-model="form.desc"
    :rows="4"
    disabled
    label="描述"
    name="desc"
    placeholder="请输入详情..."
/>
\`\`\``
const form = reactive({
  desc: "这是描述"
})
</script>
<template>
  <DemoBlock :code="code">
    <QFormTextarea
        v-model="form.desc"
        :rows="4"
        disabled
        label="描述"
        name="desc"
        placeholder="请输入详情..."
    />
  </DemoBlock>
</template>

<style scoped>

</style>
