<template>
  <div class="container">
    <div class="content">
      <el-card class="box-card">
        <template #header>
          <el-row justify="space-between" align="middle">
            <el-col :span="12">
              <div class="title">
                【算法系列篇】二分查找——这还是你所知道的二分查找算法吗？
              </div>
            </el-col>
            <el-col :span="4">
              <div class="category">
                分类：
                <el-button size="small" type="primary">Java</el-button>
              </div>
            </el-col>
            <el-col :span="6">
              <!--发布时间-->
              <div class="update-time">
                发布时间：2023年8月24日22:56:00
              </div>
            </el-col>
          </el-row>
        </template>
        内容
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .content{
    width: 1200px;
  }
}
</style>