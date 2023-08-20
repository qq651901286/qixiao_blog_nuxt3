<template>
  <div class="container">
    <el-container>
      <el-affix>
        <el-header>
          <el-row>
            <el-col :span="4">
            </el-col>
            <el-col :span="16">
              <Header></Header>
            </el-col>
            <el-col :span="4">
            </el-col>
          </el-row>
        </el-header>
      </el-affix>
      <el-main>
        <el-row>
          <el-col :span="4">
          </el-col>
          <el-col :span="16">
            <NuxtPage></NuxtPage>
          </el-col>
          <el-col :span="4">
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-row>
          <el-col :span="4">
          </el-col>
          <el-col :span="16">
            <!--Footer-->
          </el-col>
          <el-col :span="4">
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  .el-container {

  }
}
</style>
