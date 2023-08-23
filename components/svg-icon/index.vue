<template>
  <svg class="svg" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#333',
  },
  hover: {
    type: String,
    default:'#a0cfff',
  },
  size: {
    type: String,
    default: '32px'
  }
})
// 给图标添加上类名
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style scoped lang='scss'>
.svg {
  /* v-bind 是 Vue3 才支持的功能，可以将 CSS 的值与 js 的值绑定 */
  width: v-bind('props.size');
  height: v-bind('props.size');
  overflow: hidden;
  vertical-align: top;
}
</style>
