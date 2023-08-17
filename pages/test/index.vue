<template>
  <div>
    <SvgIcon size="16px" name="test"></SvgIcon>

    <div class="icon-wrapper" @click="handleClick" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
      <SvgIcon name="test" :color="iconColor"></SvgIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta(
    {title: '标签'}
)
const iconColor = ref('grey')
const isPraise = ref(false)
const handleMouseenter = () => {
  // console.log('handleMouseenter')
  // iconColor.value = 'blue'
}
const handleMouseleave = () => {
  // console.log('handleMouseleave')
  // iconColor.value = 'grey'
}

const handleClick = () => {
  console.log('handleClick')
  isPraise.value = !isPraise.value
  iconColor.value = isPraise.value ? 'red': 'grey'
}

</script>

<style scoped>

</style>
