<template>
  <div class="container">
    <div class="ad">
      <div class="left">

      </div>
      <div class="right">
        <div class="top">

        </div>
        <div class="bottom">

        </div>
      </div>
    </div>
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
  .ad {
    height: 450px;
    background: #b8a3a3;
    display: flex;
    justify-content: space-between;
    .left {
      width: 60%;
      height: 450px;
      background: blue;
    }
    .right {
      width: 35%;
      height: 450px;
      background: pink;
    }
  }
}
</style>
