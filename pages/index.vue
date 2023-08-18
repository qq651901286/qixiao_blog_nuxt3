<template>
  <div class="container">
    <el-button @click="btnClick()">{{counter.count}}</el-button>
    <el-button @click="btnClick()">{{setting.hoverColor}}</el-button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: '首页'
})
import { useSettingStore } from '@/stores/setting'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
const setting = useSettingStore()
const btnClick = ()=> {
  counter.increment()
}

</script>

<style scoped lang="scss">
.container {
}
</style>
