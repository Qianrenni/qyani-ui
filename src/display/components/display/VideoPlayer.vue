<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import {QVideoPlayer} from "qyani-components";

const code = `
\`\`\`html
<QVideoPlayer 
  source="https://www.w3schools.com/html/mov_bbb.mp4" 
  :autoPlay="true" 
  :controls="true" 
  :muted="false"
/>
\`\`\`
`;
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vetical gap">
      <QVideoPlayer 
        source="https://www.w3schools.com/html/mov_bbb.mp4" 
        :autoPlay="true" 
        :controls="true" 
        :muted="false"
      />
    </div>
  </DemoBlock>
</template>

<style scoped>
.margin-vetical {
  margin-top: 16px;
  margin-bottom: 16px;
}

.gap {
  gap: 16px;
}

.container-column {
  flex-direction: column;
}

.container-center,
.container-align-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>