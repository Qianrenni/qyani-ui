<script lang="ts" setup>

import DemoBlock from "@/DemoBlock.vue";
import {QCollapsibleSection} from "qyani-components";

const code = `
\`\`\`html
<div class="container">
    <QCollapsibleSection  style="width: 100%;">
      <div>
        <span>down</span>
      </div>
    </QCollapsibleSection>
  </div>
<div class="container">
  <QCollapsibleSection   direction="left">
    <div>
      <span>left</span>
    </div>
  </QCollapsibleSection>
</div>
<div class="container">
  <QCollapsibleSection  style="width: 100%;" direction="right">
    <div>
      <span>right</span>
    </div>
  </QCollapsibleSection>
</div>
<div class="container">
  <QCollapsibleSection direction="up" style="width: 100%;">
    <div>
      <span>up</span>
    </div>
  </QCollapsibleSection>
</div>
\`\`\`
  `
</script>
<template>
  <DemoBlock :code="code">
    <div class="container-column">
      <div class="container">
        <QCollapsibleSection style="width: 100%;">
          <div>
            <span>down</span>
          </div>
        </QCollapsibleSection>
      </div>
      <div class="container">
        <QCollapsibleSection direction="left">
          <div>
            <span>left</span>
          </div>
        </QCollapsibleSection>
      </div>
      <div class="container">
        <QCollapsibleSection direction="right" style="width: 100%;">
          <div>
            <span>right</span>
          </div>
        </QCollapsibleSection>
      </div>
      <div class="container">
        <QCollapsibleSection direction="up" style="width: 100%;">
          <div>
            <span>up</span>
          </div>
        </QCollapsibleSection>
      </div>
    </div>
  </DemoBlock>
</template>

<style scoped>

</style>
