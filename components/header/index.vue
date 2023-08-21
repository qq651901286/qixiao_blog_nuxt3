<template>
  <div class="container">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <el-menu-item index="100">
        <img src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/logo.png"/>
      </el-menu-item>
      <div class="flex-grow"/>
      <el-menu-item index="200">首页</el-menu-item>
      <el-menu-item index="300">博客</el-menu-item>
      <el-menu-item index="400">留言板</el-menu-item>
      <el-menu-item index="500">友链</el-menu-item>
      <el-menu-item index="600">关于</el-menu-item>
      <el-sub-menu index="700">
        <template #title>自己</template>
        <el-menu-item index="700-1">Gitee</el-menu-item>
        <el-menu-item index="700-2">Github</el-menu-item>
        <el-menu-item index="700-3">个人经历</el-menu-item>
        <el-menu-item index="700-4">联系方式</el-menu-item>
        <el-sub-menu index="700-5">
          <template #title>系统推荐</template>
          <el-menu-item index="700-5-1">个人博客</el-menu-item>
          <el-menu-item index="700-5-2">相亲阁</el-menu-item>
          <el-menu-item index="700-5-3">投资分析系统</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {useSettingStore} from "~/stores/setting";

const settingStore = useSettingStore()
const hoverColor = ref<string>(settingStore.hoverColor);
import {ref} from 'vue'
// 路由
const router = useRouter()

const menuHandleSelect = (index: string, pathList: string[]) => {
  console.log('menuHandleSelect被单击')
}

const menuItemClick = () => {
  console.log('menuItemClick被单击')
}

onMounted(() => {

})

</script>

<style scoped lang="scss">
.container {
  .el-menu {
    img {
      width: 180px;
      height: 58px;
    }

    .flex-grow {
      flex-grow: 1;
    }
  }
}

</style>
