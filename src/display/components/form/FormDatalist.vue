<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QFormDatalist} from "qyani-components";
import {reactive} from "vue";

const code = `
\`\`\`html
<QFormDatalist
    v-model="form.browser"
    :options="['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera']"
    direction="vertical"
    label="选择浏览器" name="browser"
    placeholder="输入或选择浏览器"
/>
\`\`\``
const form = reactive({
  browser: ''
})
</script>
<template>
  <DemoBlock :code="code">
    <QFormDatalist
        v-model="form.browser"
        :options="['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera']"
        direction="vertical"
        label="选择浏览器" name="browser"
        placeholder="输入或选择浏览器"
    />
  </DemoBlock>
</template>

<style scoped>

</style>
