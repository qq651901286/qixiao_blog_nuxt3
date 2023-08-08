<template>
  <div>
    <span>一些在所有页面共享的默认布局</span>
    <slot />
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
div{
  span{
    color: aqua;
  }
}
</style>
