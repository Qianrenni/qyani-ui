<script lang="ts" setup>
import {defineOptions} from "vue";
import DemoBlock from "@/DemoBlock.vue";
import {QBadge} from "qyani-components";

defineOptions({
  name: "Badge"
})
const code = `
\`\`\`html
<div class="container-center gap">
  <QBadge :dot="true">
    <span class="button padding-24rem">
    按钮
  </span>
  </QBadge>
  <QBadge value="100">
    <span class="button padding-28rem">
      按钮
    </span>
  </QBadge>
</div>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <div class="container-center gap">
      <QBadge :dot="true">
        <span class="button padding-24rem">
        按钮
      </span>
      </QBadge>
      <QBadge value="100">
        <span class="button padding-28rem">
          按钮
        </span>
      </QBadge>
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
