<script lang="ts" setup>
import {QMarkdownRender} from "qyani-components";
import DemoBlock from '@/DemoBlock.vue'

const content = `
\`\`\`typescript
function add(a: number, b: number) {
  return a + b
}
\`\`\`
`
const code = `
\`\`\`html
    <QMarkdownRender :content="content"/>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <QMarkdownRender :content="content"/>
  </DemoBlock>
</template>

<style scoped>

</style>
