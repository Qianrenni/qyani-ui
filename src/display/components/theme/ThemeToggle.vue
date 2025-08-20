<script lang="ts" setup>
import {QThemeToggle} from "qyani-components";
import DemoBlock from "@/DemoBlock.vue";

const code = `
\`\`\`html
<QThemeToggle size="32"/>
\`\`\`
`
</script>
<template>
  <demo-block :code="code">
    <QThemeToggle size="32"/>
  </demo-block>

</template>

<style scoped>

</style>
