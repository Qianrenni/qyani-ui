<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QSearch} from "qyani-components";

const searchHandler = (e: string) => {
  alert(e);
}
const changeHandler = (e: string) => {
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
      <QSearch @change="changeHandler" @search="(e:string)=>searchHandler(e)"/>
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
