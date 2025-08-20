<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QFormTable} from "qyani-components";

const code = `
\`\`\`html
<QFormTable
    :columns="columns"
    :data="tableData"
    :page-size="5"
    selectable
    selection-mode="multiple"
/>
\`\`\`
` + `
\`\`\`\javascript

const columns = [
  {value: "name", label: "姓名", width: "120px"},
  {value: "age", label: "年龄", width: "80px"},
  {value: "email", label: "邮箱"},
];

const tableData = [
  {id: 1, name: "张三", age: 24, email: "zhang@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
];
\`\`\`
`

const columns = [
  {value: "name", label: "姓名", width: "120px"},
  {value: "age", label: "年龄", width: "80px"},
  {value: "email", label: "邮箱"},
];

const tableData = [
  {id: 1, name: "张三", age: 24, email: "zhang@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
  {id: 2, name: "李四", age: 28, email: "li@example.com"},
];
</script>
<template>
  <DemoBlock :code>
    <QFormTable
        :columns="columns"
        :data="tableData"
        :page-size="5"
        selectable
        selection-mode="multiple"
    />
  </DemoBlock>
</template>

<style scoped>

</style>
