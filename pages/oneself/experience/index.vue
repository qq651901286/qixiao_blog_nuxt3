<script setup lang="ts">
import {MdPreview} from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

const id = 'preview-only';

const dataList = reactive([
  {
    size: 'large',
    type: 'primary',
    timestamp: "2023年9月7日23:28:47",
    hollow: false,
    content: '# 项目介绍\n' +
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
        '<img src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/myPicture/alipay.jpg" alt=" " style="zoom:50%;" />\n',
  },
  {
    size: 'normal',
    type: 'success',
    timestamp: "2023年9月6日23:28:47",
    hollow: true,
    content: '# 测试标题2\n 我是内容2',
  },
  {
    size: 'normal',
    type: 'warning',
    timestamp: "2023年9月5日23:28:47",
    hollow: false,
    content: '# 测试标题3\n 我是内容3',
  },
])

</script>

<template>
  <div class="container">
    <div class="content">
      <el-timeline>
        <el-timeline-item v-for="data in dataList" :hollow="data.hollow" :type="data.type" :size="data.size"
                          :timestamp="data.timestamp" placement="top">
          <el-card shadow="hover">
            <MdPreview :editorId="id" :modelValue="data.content"/>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 20px;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
  }
}
</style>
