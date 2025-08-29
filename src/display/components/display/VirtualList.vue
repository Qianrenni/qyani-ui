```vue
<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import { QCarousel, QCarouselItem } from "qyani-components";

const code = `
\`\`\`html
<div class="container-align-center container-column margin-vetical gap">
  <QCarousel :height="300" :width="600" direction="prev">
    <QCarouselItem v-for="index in 5" :key="index">
      <div class="container-center container-align-center" style="height: 300px;width: 600px;">
        <img :src="\`https://picsum.photos/600/300?random=\${index + 5}\`" alt=""/>
      </div>
    </QCarouselItem>
  </QCarousel>
  <QCarousel :height="300" :width="600" indicator-position="right-center" vertical>
    <QCarouselItem v-for="index in 5" :key="index">
      <div class="container-center container-align-center" style="height: 300px;width: 600px;">
        <img :src="\`https://picsum.photos/600/300?random=\${index + 10}\`" alt=""/>
      </div>
    </QCarouselItem>
  </QCarousel>
</div>
\`\`\`
`;
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vetical gap">
      <QCarousel :height="300" :width="600" direction="prev">
        <QCarouselItem v-for="index in 5" :key="index">
          <div class="container-center container-align-center" style="height: 300px;width: 600px;">
            <img :src="`https://picsum.photos/600/300?random=${index + 5}`" alt="" />
          </div>
        </QCarouselItem>
      </QCarousel>
      <QCarousel :height="300" :width="600" indicator-position="right-center" vertical>
        <QCarouselItem v-for="index in 5" :key="index">
          <div class="container-center container-align-center" style="height: 300px;width: 600px;">
            <img :src="`https://picsum.photos/600/300?random=${index + 10}`" alt="" />
          </div>
        </QCarouselItem>
      </QCarousel>
    </div>
  </DemoBlock>
</template>

<style scoped></style>
```