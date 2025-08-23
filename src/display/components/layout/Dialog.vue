<template>
  <DemoBlock>
    <QFormButton @click="visible=true">
      ClickMe!
    </QFormButton>
    <QDialog
        title="HELLO"
        v-model:visible="visible"
    >
      <div class="padding-24rem">
        <div>hello!</div>
        <div>hello!</div>
        <div>hello!</div>
        <div>hello!</div>
        <div>hello!</div>
        <div>hello!</div>
        <div>hello!</div>
        <div>hello!</div>
      </div>
    </QDialog>
  </DemoBlock>
</template>
<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import {QFormButton} from "qyani-components";
import {QDialog} from 'qyani-components'
import {ref} from "vue";
const visible = ref(false);
</script>
<style scoped lang="css">

</style>