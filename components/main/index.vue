<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="left">

        </div>
        <div class="nuxt-page">
          <NuxtPage></NuxtPage>
        </div>
        <div class="right">

        </div>
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
  .main {
    .content {
      width: 1200px;
      background: blue;
      height: 3500px;
      display: flex;
      justify-content: space-between;
      .left {
        width: 230px;
        height: 3500px;
        background: #9898a5;
      }
      .nuxt-page {
        width: 720px;
        height: 3500px;
        background: #6eb859;
      }
      .right {
        width: 230px;
        height: 3500px;
        background: #ea4444;
      }
    }
  }
}

</style>
