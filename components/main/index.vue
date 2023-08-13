<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="left">
          <MainLeft></MainLeft>
        </div>
        <div class="nuxt-page">
          <NuxtPage></NuxtPage>
        </div>
        <div class="right">
          <MainRight></MainRight>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  .main {
    .content {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      .left {
        width: 230px;
        height: 1200px;
        background: #fff4f4;
      }
      .nuxt-page {
        width: 720px;
        height: 1200px;
        background: #fff4f4;
      }
      .right {
        width: 230px;
        height: 1200px;
        background: #fff4f4;
      }
    }
  }
}

</style>
