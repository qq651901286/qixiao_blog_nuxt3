<template>
  <div class="container">
    <div class="content">
      <el-card shadow="hover">
        <el-row justify="space-between" align="middle">
          <el-col :span="6">
            <el-link :underline="false" href="https://gitee.com/qq651901286" target="_blank">
              Crafted with by Qixiao
            </el-link>
          </el-col>
          <el-col :span="4">
            <el-link :underline="false" href="https://gitee.com/qq651901286" target="_blank">
              粤ICP备XXXX号
            </el-link>
          </el-col>

          <el-col :span="4">
            <el-statistic group-separator="" title="访问量" :value="268500"/>
          </el-col>
          <el-col :span="1">
            <el-statistic group-separator="" title="运行天数" :value="3300"/>
          </el-col>
        </el-row>
      </el-card>

    </div>

  </div>
</template>

<script setup lang="ts">
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;

  .content {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 60px;
    width: 1200px;

    .el-card {
      .el-link {
        font-size: 20px;
      }
    }

  }
}

</style>
