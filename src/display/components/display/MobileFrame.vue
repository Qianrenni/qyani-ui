<script lang="ts" setup>
import {QMobileFrame} from "qyani-components";
import DemoBlock from '@/DemoBlock.vue'

const code = `
\`\`\`html
<QMobileFrame :src="url"/>
\`\`\`
`
const url = "http://1.95.141.194/user/"
</script>
<template>
  <DemoBlock :code="code">
    <QMobileFrame :src="url"/>
  </DemoBlock>
</template>

<style scoped>

</style>
