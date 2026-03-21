<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QRainFigure} from "qiannai-components";

const code = `
\`\`\`html
<div class="container">
  <QRainFigure
      :image-url="https://picsum.photos/270/480?random">
</div>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <div class="container">
      <QRainFigure
        image-url="https://picsum.photos/270/480?random"
      />
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
