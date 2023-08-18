<template>
  <div class="container">
    <el-container>
      <el-affix>
        <el-header>
          <Header></Header>
        </el-header>
      </el-affix>
      <el-main>
        <NuxtPage></NuxtPage>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  .el-container {
    .el-affix {
      .el-header {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
