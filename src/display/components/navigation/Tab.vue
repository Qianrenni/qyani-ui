<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QTab} from "qyani-components";

const code = `
\`\`\`html
<div class="container">
    <QTab :list="['栏目1','栏目2','栏目3']" @select="(index)=>console.log(index)"/>
</div>
\`\`\`
`
</script>
<template>
  <DemoBlock :code>
    <div class="container">
      <QTab :list="['栏目1','栏目2','栏目3']" @select="(index)=>console.log(index)"/>
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
