<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QProgressBar} from "qyani-components";

const code = `
\`\`\`html
<div class="container-center container-align-center">
  <div style="width: 100px;height: 2px;">
    <QProgressBar percent="80%"/>
  </div>
  80%
</div>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <div class="container-center container-align-center">
      <div style="width: 100px;height: 2px;">
        <QProgressBar percent="80%"/>
      </div>
      80%
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
