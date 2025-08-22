<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import {useMessage} from "qyani-components";
import {QFormButton} from "qyani-components";

const code = `
\`\`\`html
<QFormButton type="button" @click="useMessage.success('success')">
  ClickMe!
</QFormButton>
<QFormButton type="button" @click="useMessage.error('error')">
  ClickMe!
</QFormButton>
<QFormButton type="button" @click="useMessage.info('info')">
  ClickMe!
</QFormButton>
<QFormButton type="button" @click="useMessage.warning('warning')">
  ClickMe!
</QFormButton>
\`\`\`
`+`
\`\`\`ts
import {useMessage} from "qyani-components";
import {QFormButton} from "qyani-components";
\`\`\``
;
</script>

<template>
  <DemoBlock :code="code">
      <QFormButton type="button" @click="useMessage.success('success')">
        ClickMe!
      </QFormButton>
      <QFormButton type="button" @click="useMessage.error('error')">
        ClickMe!
      </QFormButton>
      <QFormButton type="button" @click="useMessage.info('info')">
        ClickMe!
      </QFormButton>
      <QFormButton type="button" @click="useMessage.warning('warning')">
        ClickMe!
      </QFormButton>
  </DemoBlock>
</template>

<style scoped>
.margin-vetical {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.gap {
  gap: 1rem;
}

.container-align-center {
  display: flex;
  align-items: center;
}

.container-column {
  flex-direction: column;
}

.container-center {
  justify-content: center;
}
</style>
