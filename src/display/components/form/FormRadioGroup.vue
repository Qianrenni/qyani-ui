<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QFormRadioGroup} from "qyani-components";
import {reactive} from "vue";

const form = reactive({
  gender: 'male'
});
const code = `
\`\`\`html
<QFormRadioGroup
    v-model="form.gender"
    :options="[
  { value: 'male', label: '男' },
  { value: 'female', label: '女' },
  { value: 'other', label: '其他' }
]"
    direction="vertical"
    label="单选按钮 :"
    name="gender"
    required
/>
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <div>
      <QFormRadioGroup
          v-model="form.gender"
          :options="[
          { value: 'male', label: '男' },
          { value: 'female', label: '女' },
          { value: 'other', label: '其他' }
        ]"
          direction="vertical"
          label="单选按钮 :"
          name="gender"
          required
      />
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
