<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QFormText} from "qyani-components";
import {reactive} from "vue";

const code = `
\`\`\`html
<QFormText
        v-model="form.text"
        direction="vertical"
        disabled
        label="文本输入"
        name="text"
        placeholder="请输入文本"
        type="text"
/>
<QFormText
    v-model="form.password"
    direction="vertical"
    label="密码输入"
    name="password"
    placeholder="请输入密码"
    size="large"
    type="password"
/>
<QFormText
    v-model="form.email"
    label="邮箱输入"
    name="email"
    placeholder="example@example.com"
    size="small"
    type="email"
/>
<QFormText
    v-model="form.tel"
    direction="vertical"
    label="电话号码"
    name="tel"
    pattern="[0-9]+"
    placeholder="138-0000-0000"
    type="tel"
/>
\`\`\`
`
const form = reactive({
  text: '',
  password: '',
  email: '',
  tel: ''
})
</script>
<template>
  <DemoBlock :code="code">
    <div class="container-column">
      <QFormText
          v-model="form.text"
          direction="vertical"
          disabled
          label="文本输入"
          name="text"
          placeholder="请输入文本"
          type="text"
      />
      <QFormText
          v-model="form.password"
          direction="vertical"
          label="密码输入"
          name="password"
          placeholder="请输入密码"
          size="large"
          type="password"
      />
      <QFormText
          v-model="form.email"
          label="邮箱输入"
          name="email"
          placeholder="example@example.com"
          size="small"
          type="email"
      />
      <QFormText
          v-model="form.tel"
          direction="vertical"
          label="电话号码"
          name="tel"
          pattern="[0-9]+"
          placeholder="138-0000-0000"
          type="tel"
      />
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
