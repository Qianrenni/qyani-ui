<script lang="ts" setup>
import {QScrollContainer} from "qyani-components";
import DemoBlock from "@/DemoBlock.vue";

const code = `
\`\`\`html
<QScrollContainer scoll-y style="height: 400px;width: 400px;" @ended="console.log('end',new Date().getTime())">
  <div class="bg-image-header" style="height: 600px;width: 400px;">

  </div>
</QScrollContainer>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <QScrollContainer scoll-y style="height: 400px;width: 400px;" @ended="console.log('end',new Date().getTime())">
      <div class="bg-image-header" style="height: 600px;width: 400px;">

      </div>
    </QScrollContainer>
  </DemoBlock>
</template>
<style lang="css" scoped>

</style>
