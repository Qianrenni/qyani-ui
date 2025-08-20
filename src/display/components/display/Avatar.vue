<script lang="ts" setup>
import {defineOptions} from "vue";
import DemoBlock from "@/DemoBlock.vue";
import {QAvatar} from "qyani-components";

defineOptions({
  name: "DisplayAvatar",
})
const code = `
\`\`\`html
<QAvatar/>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <QAvatar/>
  </DemoBlock>
</template>

<style scoped>

</style>
