<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {useMousePosition} from "qyani-components";

const {x, y} = useMousePosition()
const code = `
\`\`\`html
<div class="container">
      x:{{x}}
      y:{{y}}
</div>
\`\`\`
` + `
\`\`\`ts
import {useMousePosition} from "@"
const {x, y} = useMousePosition()
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <div class="container">
      x:{{ x }}
      y:{{ y }}
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
