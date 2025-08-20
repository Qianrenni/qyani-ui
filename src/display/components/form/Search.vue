<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QSearch} from "qyani-components";

const searchHandler = (e: any) => {
  alert(e);
}
const changeHandler = (e: any) => {
  alert(e);
}
const code = `
\`\`\`html
<div class="container">
  <QSearch @change="changeHandler" @search="(e)=>searchHandler(e)"/>
</div>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <div class="container">
      <QSearch @change="changeHandler" @search="(e)=>searchHandler(e)"/>
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
