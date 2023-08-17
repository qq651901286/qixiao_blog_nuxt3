<template>
  <div>
    {{ counter.count }}
    <el-button @click="btnClick()">点击</el-button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

const btnClick = ()=> {
  // counter.count++
// // 带自动补全 ✨
// counter.$patch({ count: counter.count + 1 })
// // 或使用 action 代替
// counter.increment()

  counter.increment()
}

</script>

<style scoped>

</style>
