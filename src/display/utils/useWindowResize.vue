<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import { useWindowResize } from "qyani-components";
import { ref } from "vue";
const isLessThan768 = ref(window.innerWidth < 768);
useWindowResize.addHandler((width) =>{
  if(width < 768){
    isLessThan768.value = true;
  }
})
const code = `
\`\`\`javascript
import { useWindowResize } from "qyani-components";
useWindowResize.addHandler((width) =>{
  if(width < 768){
    alert("less than 768");
  }
})
\`\`\`
`;
</script>

<template>
  <DemoBlock :code="code">
     <div>
      窗口是否小于768{{ isLessThan768 }}
     </div>
  </DemoBlock>
</template>

<style scoped>
.margin-vetical {
  margin: 20px 0;
}
.container-align-center {
  align-items: center;
}
.container-column {
  flex-direction: column;
}
.container-center {
  display: flex;
  justify-content: center;
}
.gap {
  gap: 16px;
}
</style>