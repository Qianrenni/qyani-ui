<template>
  <DemoBlock :code="code">
    <QScrollContainer
        :threshold="200"
        @ended="add"
        class="container-w100 container container-wrap"
        scoll-y
        style="height: 600px;width: 1008px;"
    >
      <QLazyImage
          v-for="item in photos" :key="item" :src="item"
          :height="100"
          :width="100"
      >

      </QLazyImage>
    </QScrollContainer>

  </DemoBlock>
</template>
<script lang="ts" setup>
import {QLazyImage} from "qyani-components";
import {QScrollContainer} from "qyani-components";
import DemoBlock from "@/DemoBlock.vue";
import {ref} from "vue";

const photos = ref(Array.from({length:100},(_,i)=>`https://picsum.photos/100?random=${i}`))

const add = () => {
  console.log('end');
  photos.value.push(...Array.from({length:10},(_,i)=>`https://picsum.photos/100?random=${photos.value.length+i}`))
}
const code =`
\`\`\`html
    <QScrollContainer
        :threshold="200"
        @ended="add"
        class="container-w100 container container-wrap"
        scoll-y
        style="height: 600px;width: 1008px;"
    >
      <QLazyImage
          v-for="item in photos" :key="item" :src="item"
          :height="100"
          :width="100"
      >

      </QLazyImage>
    </QScrollContainer>
\`\`\`
`+`
\`\`\`ts
import {ref} from "vue";

const photos = ref(Array.from({length:100},(_,i)=>\`https://picsum.photos/100?random=\${i}\`))

const add = () => {
  console.log('end');
  photos.value.push(...Array.from({length:10},(_,i)=>\`https://picsum.photos/100?random=\${photos.value.length + i}\`))
}
\`\`\`
`

</script>