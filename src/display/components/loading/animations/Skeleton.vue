<template>
  <DemoBlock :code="code">
    <QSkeleton style="height: 350px;"/>
  </DemoBlock>
</template>
<script setup lang="ts">
import {QSkeleton} from 'qyani-components'
import DemoBlock from "@/DemoBlock.vue";

const code = `
\`\`\`html
    <QSkeleton style="height: 350px;"/>
\`\`\`
`
</script>