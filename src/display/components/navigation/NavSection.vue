<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QNavSection} from "qyani-components";

const content = {
  title: '标题1',
  children: [
    {
      title: '标题2',
      children: [
        {
          title: '标题3',
          children: [
            {
              title: '标题5'
            },
            {
              title: '标题6'
            }
          ]
        },
        {
          title: '标题4',
          children: [
            {
              title: '标题7'
            },
            {
              title: '标题8'
            }
          ]
        }
      ]
    },
    {
      title: '标题3',
      children: [
        {
          title: '标题4'
        },
        {
          title: '标题5'
        }
      ]
    }
  ]
}
const handleSelect = (section) => {
  alert(JSON.stringify(section));
}
const code = `
\`\`\`html
<QNavSection :sections="content.children" :title="content.title" @select="(e)=>handleSelect(e)"/>
\`\`\`
` + `
\`\`\`javascript
const content = {
  title: '标题1',
  children: [
    {
      title: '标题2',
      children: [
        {
          title: '标题3',
          children: [
            {
              title: '标题5'
            },
            {
              title: '标题6'
            }
          ]
        },
        {
          title: '标题4',
          children: [
            {
              title: '标题7'
            },
            {
              title: '标题8'
            }
          ]
        }
      ]
    },
    {
      title: '标题3',
      children: [
        {
          title: '标题4'
        },
        {
          title: '标题5'
        }
      ]
    }
  ]
}
\`\`\`
`
</script>
<template>
  <DemoBlock :code="code">
    <QNavSection :sections="content.children" :title="content.title" @select="(e)=>handleSelect(e)"/>
  </DemoBlock>
</template>

<style scoped>

</style>
