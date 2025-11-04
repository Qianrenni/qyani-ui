```vue
<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import { useScreenSize } from "qyani-components";
const isLessThan = useScreenSize.getWidth(768);
const code = `
\`\`\`javascript
import { useScreenSize } from "qyani-components";
const isLessThan = useScreenSize.getWidth(768);
\`\`\`
`;
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vetical gap">
      is Less Than 768px: {{ isLessThan }}
    </div>
  </DemoBlock>
</template>

<style scoped>
.margin-vetical {
  margin-top: 16px;
  margin-bottom: 16px;
}
.container-column {
  flex-direction: column;
}
.container-align-center {
  align-items: center;
}
.container-center {
  justify-content: center;
}
.gap {
  gap: 16px;
}
</style>
```