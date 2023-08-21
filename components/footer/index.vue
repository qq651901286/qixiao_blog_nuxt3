<template>
  <div class="container">
    <div class="left">
      <div>
        <el-link :underline="false" href="https://gitee.com/qq651901286" target="_blank">
          Crafted with by Qixiao
        </el-link>
      </div>
      <div>
        <el-link :underline="false" href="https://gitee.com/qq651901286" target="_blank">
          粤ICP备XXXX号
        </el-link>
      </div>
    </div>
    <div class="right">
      <div>
        <el-link disabled>访问量：999</el-link>
      </div>
      <div>
        <el-link disabled>运行天数：388</el-link>
      </div>
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
  justify-content: space-between;
  height: 60px;
  align-items: center;
}

</style>
