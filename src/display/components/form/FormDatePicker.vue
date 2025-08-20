<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QFormDatePicker} from "qyani-components";
import {reactive} from "vue";

const code = `
\`\`\`html
<div class="container-column gap">
  <QFormDatePicker
      v-model="form.date"
      direction="vertical"
      label="日期"
      name="date"
      type="date"
  />
  <QFormDatePicker
      v-model="form.time"
      label="时间"
      name="time"
      type="time"
  />
  <QFormDatePicker
      v-model="form.datetime"
      label="日期时间"
      name="datetime"
      type="datetime-local"
  />
</div>
\`\`\`
`
const form = reactive({
  date: '',
  time: '',
  datetime: ''
})
</script>
<template>
  <demo-block :code="code">
    <div class="container-column gap">
      <QFormDatePicker
          v-model="form.date"
          direction="vertical"
          label="日期"
          name="date"
          type="date"
      />
      <QFormDatePicker
          v-model="form.time"
          label="时间"
          name="time"
          type="time"
      />
      <QFormDatePicker
          v-model="form.datetime"
          label="日期时间"
          name="datetime"
          type="datetime-local"
      />
    </div>
  </demo-block>
</template>

<style scoped>

</style>
