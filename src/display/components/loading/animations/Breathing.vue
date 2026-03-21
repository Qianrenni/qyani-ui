<template>
  <DemoBlock :code="code">
    <div>
      <QBreathing/>
    </div>
  </DemoBlock>
</template>
<script setup lang="ts">
import {QBreathing} from 'qiannai-components'
import DemoBlock from "@/DemoBlock.vue";

const code  = `
\`\`\`html
<QBreathing/>
\`\`\`
`
</script>