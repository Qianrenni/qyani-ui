<script lang="ts" setup>
import {defineOptions} from "vue";
import DemoBlock from "@/DemoBlock.vue";
import {QAvatar} from "qiannai-components";

defineOptions({
  name: "DisplayAvatar",
})
const code = `
\`\`\`html
    <QAvatar url="https://picsum.photos/200/300" />
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <QAvatar url="https://picsum.photos/200/300" />
  </DemoBlock>
</template>

<style scoped>

</style>
