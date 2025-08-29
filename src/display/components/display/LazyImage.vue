<template>
  <DemoBlock :code="code">
    <QLazyImage :src="`https://picsum.photos/300/400`"
                :height="400"
                :width="300"
    />

  </DemoBlock>
</template>
<script lang="ts" setup>
import {QLazyImage} from "qyani-components";
import DemoBlock from "@/DemoBlock.vue";

const code =`
\`\`\`html
<QLazyImage :src="\`https://picsum.photos/300/400\`"
            :height="400"
            :width="300"
/>
\`\`\``

</script>