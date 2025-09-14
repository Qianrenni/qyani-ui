```vue
<script lang="ts" setup>
defineOptions({
  name: 'Spinner'
})

import DemoBlock from "@/DemoBlock.vue";
import {QSpinner} from "qyani-components";

const code = `
\`\`\`html
<div class="container-align-center container-column margin-vetical gap">
  <QSpinner />
</div>
\`\`\`
`
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vetical gap">
      <QSpinner />
    </div>
  </DemoBlock>
</template>

<style scoped>
</style>
```