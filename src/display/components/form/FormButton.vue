<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QFormButton} from "qyani-components";

const code = `
\`\`\`html
<fieldset>
  <legend
  >
    按钮控件
  </legend>
  <QFormButton
      type="submit"
  >
    提交
  </QFormButton>
  <QFormButton
      type="reset"
  >
    重置
  </QFormButton>
</fieldset>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <fieldset>
      <legend
      >
        按钮控件
      </legend>
      <QFormButton
          type="submit"
      >
        提交
      </QFormButton>
      <QFormButton
          type="reset"
      >
        重置
      </QFormButton>
    </fieldset>
  </DemoBlock>
</template>

<style scoped>

</style>
