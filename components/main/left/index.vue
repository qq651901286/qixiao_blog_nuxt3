<template>
  <div class="container">
    <div class="up">
      上
    </div>
    <div class="centre">
      中
    </div>
    <div class="below">
      下
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 1200px;
  width: 100%;
  .up {
    height: 300px;
    width: 100%;
    background: #572db8;
  }
  .centre {
    height: 560px;
    width: 100%;
    background: rgba(251, 204, 212, 0.89);
  }
  .below {
    height: 300px;
    width: 100%;
    background: rgb(87, 63, 63);
  }
}
</style>