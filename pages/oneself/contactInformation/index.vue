<script setup lang="ts">
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';


const id = 'preview-only';
const text = ref('' +
    '# 联系方式\n' +
    '## QQ\n' +
    '651901286\n' +
    '## Email\n' +
    '651901286@qq.com\n'
)
</script>

<template>
  <div class="container">
    <div class="content">
      <MdPreview :editorId="id" :modelValue="text" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .content{
    width: 1200px;
  }
}
</style>
