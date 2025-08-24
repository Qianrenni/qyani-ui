<!-- App.vue -->
<!-- src/docs/App.vue -->
<script lang="ts" setup>
import { onMounted, onUnmounted, ref} from 'vue'
import ComponentList from "@/docs/ComponentList.vue";
import ComponentDetail from "@/docs/ComponentDetail.vue";
import {QThemeToggle} from "qyani-components";
import type {ComponentInfo} from "@/utils/useComponentInfo.ts";
import {QCollapsibleSection} from "qyani-components";
const selected = ref<ComponentInfo | null>(null)
const showArrow = ref(false);
const resizeHandler = ()=>{
  showArrow.value=window.innerWidth<=768;
}
onMounted(() => {
  resizeHandler();
  window.addEventListener('resize', resizeHandler);
});
onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler);
})
</script>

<template>
  <div class="app-layout container-column">
    <div class="container container-flex-start padding-horizontal bg-image-header text-white ">
      <q-theme-toggle/>
    </div>
    <div class="app-layout container-center">
      <QCollapsibleSection :isShowArrow="showArrow" :direction="showArrow?'up':'down'">
        <ComponentList  :selected="selected" @select="selected = $event"/>
      </QCollapsibleSection>
      <ComponentDetail :component="selected"/>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-layout {
  width: 100vw;
  height: 100vh;
}
@media screen and (max-width: 768px) {
  .app-layout {
    width: 100vw;
    height: 100vh;
    flex-direction: column-reverse;
  }
}
</style>
