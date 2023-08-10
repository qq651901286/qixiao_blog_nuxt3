<template>
  <div class="content">
    <el-carousel :interval="5000" type="card" height="300px">
      <el-carousel-item>
        <img src="~/assets/img/ad/1.jpeg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="~/assets/img/ad/2.jpeg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="~/assets/img/ad/3.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="~/assets/img/ad/4.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="~/assets/img/ad/5.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 300px;
  }
}

</style>
