<template>
  <div class="container">
    <div class="bottom">

      <div class="copyright-icp">
        <p>© 2023 - 2099 By 奇小</p>
        <p class="icp">
          <el-link href="https://www.baidu.com" target="_blank">
            粤ICP备XXXXXXX号
          </el-link>
        </p>
      </div>
      <div class="web-info">
        <p>博客数量：222篇</p>
        <p>运行时长：99天</p>
        <p>总访问量：343434</p>
      </div>
      <div class="friend-link">
        <p>
          <el-link href="https://element-plus.org" target="_blank">
            elment-plus
          </el-link>
        </p>
        <p>
          <el-link href="https://element-plus.org" target="_blank">
            elment-plus
          </el-link>
        </p>
        <p>
          <el-link href="https://element-plus.org" target="_blank">
            elment-plus
          </el-link>
        </p>
        <p>
          <el-link href="https://element-plus.org" target="_blank">
            elment-plus
          </el-link>
        </p>
      </div>
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
  .bottom {
    width: 1200px;
    height: 160px;
    background: pink;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      margin: 20px 20px;
    }
    .copyright-icp {
    }
    .web-info {

    }
    .friend-link {

    }
  }
}
</style>
