<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QScrollNotice} from "qyani-components";

const code = `
\`\`\`html
    <div class="container">
      <QScrollNotice :text="'无线滚动'" :width="300" class="padding-fourth-rem radius-rem bg-body"/>
    </div>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <div class="container">
      <QScrollNotice :text="'无线滚动'" :width="300" class="padding-fourth-rem radius-rem bg-body"/>
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
