<template>
  <div class="container">
    <el-row justify="space-between">
      <el-col :span="8">
        <div>
          icp:xxxx
        </div>
        <div>
          版权:奇小
        </div>
      </el-col>
      <el-col :span="8">
        <div></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.container {

}

</style>