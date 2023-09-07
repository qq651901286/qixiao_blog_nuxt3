<script setup lang="ts">
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';


const id = 'preview-only';
const text = ref('# 项目介绍\n' +
    '\n' +
    '<img src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/logo.png" style="zoom:25%;" />这是一个博客系统，主要是记录个人的一些东西，感觉没啥可看的，主要是记录\n' +
    '自己学过的知识\n' +
    '\n' +
    '## 技术栈\n' +
    '- Nuxt3\n' +
    '- Vue3\n' +
    '- pinia\n' +
    '- sass\n' +
    '- element-plus\n' +
    '\n' +
    '## 演示地址\n' +
    '\n' +
    'http://139.159.227.116:3000/\n' +
    '\n' +
    '# 项目文档\n' +
    '\n' +
    '## 项目运行\n' +
    '\n' +
    '```cmd\n' +
    'pnpm install\n' +
    '\n' +
    'pnpm run dev\n' +
    '\n' +
    '打包\n' +
    'pnpm run build\n' +
    '注意打包之后运行，需要将node_modules/@popperjs复制到.output/server/node_modules里面去，不然没办法运行\n' +
    '可以使用node，也可以使用pm2\n' +
    '```\n' +
    '\n' +
    '\n' +
    '# 作者\n' +
    '\n' +
    '<img src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/myPicture/qq.jpg" style="zoom:50%;" />\n' +
    '\n' +
    '# 打赏\n' +
    '\n' +
    '<img src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/myPicture/wechat.jpg" style="zoom:50%;" />\n' +
    '\n' +
    '<img src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/myPicture/alipay.jpg" alt=" " style="zoom:50%;" />\n' );

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
