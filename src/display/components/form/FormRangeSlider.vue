<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QFormRangeSlider} from "qyani-components";
import {reactive} from "vue";

const code = `
\`\`\`html
<QFormRangeSlider
    v-model="form.range"
    :max="100"
    :min="0"

    direction="vertical"
    label="滑块输入"
    name="range"
/>
\`\`\`
`
const form = reactive({
  range: 1,
})
</script>
<template>
  <DemoBlock :code="code">
    <QFormRangeSlider
        v-model="form.range"
        :max="100"
        :min="0"

        direction="vertical"
        label="滑块输入"
        name="range"
    />
  </DemoBlock>
</template>

<style scoped>

</style>
