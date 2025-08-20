<script lang="ts" setup>
import {QDivider} from "qyani-components";
import DemoBlock from '@/DemoBlock.vue'

const code = `
\`\`\`html
<QDivider/>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <QDivider/>
  </DemoBlock>
</template>

<style scoped>

</style>
