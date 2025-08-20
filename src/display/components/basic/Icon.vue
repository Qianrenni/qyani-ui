<script lang="ts" setup>
import {QIcon} from "qyani-components";
import DemoBlock from "@/DemoBlock.vue";

defineOptions({
  name: "DisplayIcon",
})
const code = `
\`\`\`html
<QIcon icon="Wifi"/>
\`\`\`
`
</script>

<template>
  <DemoBlock :code="code">
    <QIcon icon="Wifi"/>
  </DemoBlock>
</template>

<style scoped>

</style>
