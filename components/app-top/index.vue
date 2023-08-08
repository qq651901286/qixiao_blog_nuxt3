<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="https://blog.nineya.com/upload/2023/04/logo.png">

        <ul>
          <li>首页</li>
          <li>生活</li>
          <li>归档</li>
          <li>分类</li>
          <li>标签</li>
          <li>动态</li>
          <li>相册</li>
          <li>友链</li>
          <li>关于</li>
        </ul>
      </div>
      <div class="right">
        <el-input
            v-model="input3"
            class="w-50 m-2"
            size="small"
            placeholder="Please Input"
            :suffix-icon="Search"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.top {
  // 固定最上面
  position: fixed;
  z-index: 999;
  
  width: 100%;
  height: 80px;
  background: #d4d4e2;

  // 让内容居中
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: 80px;
    background: #af3db5;
  }
}
</style>