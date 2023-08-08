<template>
  <div>
    用户编号
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
console.log(route.params)
console.log(route)
</script>

<style scoped>

</style>
