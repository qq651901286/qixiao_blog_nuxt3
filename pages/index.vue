<template>
  <div class="container">
    <el-menu
        mode="horizontal"
        :ellipsis="false"
        @select="menuHandleSelect"
    >
      <el-menu-item index="100">首页</el-menu-item>
      <el-menu-item index="101">博客</el-menu-item>
      <el-menu-item index="102">留言板</el-menu-item>
      <el-menu-item index="103">友链</el-menu-item>
      <el-menu-item index="1">关于</el-menu-item>
      <el-sub-menu index="2">
        <template #title>自己</template>
        <el-menu-item index="2-1">Gitee</el-menu-item>
        <el-menu-item index="2-2">Github</el-menu-item>
        <el-menu-item index="2-3">个人经历</el-menu-item>
        <el-menu-item index="2-4">联系方式</el-menu-item>
        <el-sub-menu index="2-5">
          <template #title>系统推荐</template>
          <el-menu-item index="2-5-1">个人博客</el-menu-item>
          <el-menu-item index="2-5-2">相亲阁</el-menu-item>
          <el-menu-item index="2-5-3">投资分析系统</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
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
