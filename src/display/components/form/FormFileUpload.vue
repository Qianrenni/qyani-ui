<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QFormFileUpload} from "qyani-components";
import {reactive} from "vue";

const code = `
\`\`\`html
<div class="container-column gap">
      <QFormFileUpload
          v-model="form.file"
          accept="image/*,.pdf"
          label="上传文件"
          name="file"
      />
      <QFormFileUpload
          v-model="form.files"
          accept="*"
          direction="vertical"
          label="多文件上传"
          multiple
          name="files"
      />
</div>
\`\`\
`
const form = reactive({
  file: null,
  files: []
})
</script>
<template>
  <demo-block :code="code">
    <div class="container-column gap">
      <QFormFileUpload
          v-model="form.file"
          accept="image/*,.pdf"
          label="上传文件"
          name="file"
      />
      <QFormFileUpload
          v-model="form.files"
          accept="*"
          direction="horizontal"
          label="多文件上传"
          multiple
          name="files"
      />
    </div>
  </demo-block>
</template>

<style scoped>

</style>
