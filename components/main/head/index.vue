<template>
  <div class="container">
    <div class="content">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const title:string = ref<string>('');
watch(() => route.matched, (newVal, oldVal) => {
      title.value = newVal[0].meta.title as string
    },
    { immediate: true }
)
</script>

<style scoped lang="scss">
.container {
  height: 40px;
  width: 720px;
  background: #f2f2f2;
  .content {
    line-height: 40px;
    height: 40px;
    width: 720px;
    text-align: center;
  }
}
</style>
