<template>
  <DemoBlock :code="code">
    <div class="container-w100">
      <div class="container-center container-align-center">
        <QFormSwitch v-model="showDrawer.right" label="右侧抽屉"/>
        <QFormSwitch v-model="showDrawer.left" label="左侧抽屉"/>
        <QFormSwitch v-model="showDrawer.top" label="顶部抽屉"/>
        <QFormSwitch v-model="showDrawer.bottom" label="底部抽屉"/>
        <QFormSwitch v-model="showDrawer.inner" label="内嵌抽屉"/>
      </div>
      <div class="container-column" style="position: relative;width: 100%;height: 300px;">
        <QDrawer
            v-model:visible="showDrawer.inner"
            :append-to-body="false"
            direction="right"
            title="测试抽屉">
          <div class="padding-24rem">
            <p>这是抽屉的内容</p>
            <p>这是抽屉的内容</p>
            <p>这是抽屉的内容</p>
          </div>
        </QDrawer>
      </div>
      <QDrawer
          v-model:visible="showDrawer.right"
          direction="right"
          title="测试抽屉">
        <div class="padding-24rem">
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
        </div>
      </QDrawer>
      <QDrawer
          v-model:visible="showDrawer.left"
          direction="left"
          title="测试抽屉">
        <div class="padding-24rem">
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
        </div>
      </QDrawer>
      <QDrawer
          v-model:visible="showDrawer.top"
          direction="top"
          title="测试抽屉">
        <div class="padding-24rem">
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
        </div>
      </QDrawer>
      <QDrawer
          v-model:visible="showDrawer.bottom"
          direction="bottom"
          title="测试抽屉">
        <div class="padding-24rem">
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
        </div>
      </QDrawer>
    </div>
  </DemoBlock>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import DemoBlock from "@/DemoBlock.vue";
import {QDrawer,QFormSwitch} from 'qyani-components'
const showDrawer = ref({
  left: false,
  right: false,
  top: false,
  bottom: false,
  inner: false
});
const code =`
\`\`\`html
<div class="container-w100">
      <div class="container-center container-align-center">
        <QFormSwitch v-model="showDrawer.right" label="右侧抽屉"/>
        <QFormSwitch v-model="showDrawer.left" label="左侧抽屉"/>
        <QFormSwitch v-model="showDrawer.top" label="顶部抽屉"/>
        <QFormSwitch v-model="showDrawer.bottom" label="底部抽屉"/>
        <QFormSwitch v-model="showDrawer.inner" label="内嵌抽屉"/>
      </div>
      <div class="container-column" style="position: relative;width: 100%;height: 300px;">
        <QDrawer
            v-model:visible="showDrawer.inner"
            :append-to-body="false"
            direction="right"
            title="测试抽屉">
          <div class="padding-24rem">
            <p>这是抽屉的内容</p>
            <p>这是抽屉的内容</p>
            <p>这是抽屉的内容</p>
          </div>
        </QDrawer>
      </div>
      <QDrawer
          v-model:visible="showDrawer.right"
          direction="right"
          title="测试抽屉">
        <div class="padding-24rem">
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
        </div>
      </QDrawer>
      <QDrawer
          v-model:visible="showDrawer.left"
          direction="left"
          title="测试抽屉">
        <div class="padding-24rem">
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
        </div>
      </QDrawer>
      <QDrawer
          v-model:visible="showDrawer.top"
          direction="top"
          title="测试抽屉">
        <div class="padding-24rem">
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
        </div>
      </QDrawer>
      <QDrawer
          v-model:visible="showDrawer.bottom"
          direction="bottom"
          title="测试抽屉">
        <div class="padding-24rem">
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
          <p>这是抽屉的内容</p>
        </div>
      </QDrawer>
    </div>
\`\`\`
`+`
\`\`\`ts
import {ref} from "vue";
import {QDrawer,QFormSwitch} from 'qyani-components'
const showDrawer = ref({
  left: false,
  right: false,
  top: false,
  bottom: false,
  inner: false
});
\`\`\`
`
</script>
<style lang="css" scoped>

</style>