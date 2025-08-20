<!-- App.vue -->
<!-- src/docs/App.vue -->
<script lang="ts" setup>
import {ref} from 'vue'
import ComponentList from "@/docs/ComponentList.vue";
import ComponentDetail from "@/docs/ComponentDetail.vue";
import {QIcon} from "qyani-components";

const selected = ref<string | null>(null)
</script>

<template>
  <div class="app-layout container-column">
    <div class="container container-flex-start padding-horizontal bg-image-header text-white ">
      <QIcon :style="{'color':'white'}" icon="Wifi"/>
    </div>
    <div class="app-layout container-center">
      <ComponentList :selected="selected" @select="selected = $event"/>
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
  height: 100vh;
}
</style>
