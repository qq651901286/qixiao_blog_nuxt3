<template>
  <div class="container">
    <el-row>
      <el-col :span="4">
      </el-col>
      <el-col :span="16">
        <Header></Header>
      </el-col>
      <el-col :span="4">
      </el-col>
    </el-row>

    <!--公告-->
    <el-row>
      <el-col :span="4">
      </el-col>
      <el-col :span="16">
        <Notice></Notice>
      </el-col>
      <el-col :span="4">
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4">
      </el-col>
      <el-col :span="16">
        <NuxtPage></NuxtPage>
      </el-col>
      <el-col :span="4">
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4">
      </el-col>
      <el-col :span="16">
        <Footer></Footer>
      </el-col>
      <el-col :span="4">
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {

}
</style>
