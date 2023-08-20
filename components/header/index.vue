<template>
  <div class="container">
    <!--<el-image src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/myPicture/logo.png"/>-->

    <el-menu
        mode="horizontal"
        :ellipsis="false"
        @select="menuHandleSelect"
        default-active="1"
    >
      <el-menu-item index="100">首页</el-menu-item>
      <el-menu-item index="101">博客</el-menu-item>
      <el-menu-item index="102">留言板</el-menu-item>
      <el-menu-item index="103">友链</el-menu-item>
      <el-menu-item index="1">关于</el-menu-item>
      <el-sub-menu index="2">
        <template #title>自己</template>
        <el-menu-item index="2-1">Gitee</el-menu-item>
        <el-menu-item index="2-2">Github</el-menu-item>
        <el-menu-item index="2-3">个人经历</el-menu-item>
        <el-menu-item index="2-4">联系方式</el-menu-item>
        <el-sub-menu index="2-5">
          <template #title>系统推荐</template>
          <el-menu-item index="2-5-1">个人博客</el-menu-item>
          <el-menu-item index="2-5-2">相亲阁</el-menu-item>
          <el-menu-item index="2-5-3">投资分析系统</el-menu-item>
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

interface headerData {
  // id
  id: string,
  // inner：内部跳转   share：外部跳转
  type: string,
  // 显示的类型
  showType:string,
  // 显示的名称
  showContent: string,
  // 跳转路径
  url: string,
  // 子节点
  child: headerData[],
}

const menuHandleSelect = (index: string, pathList: string[]) => {
  console.log('menuHandleSelect被单击')
  if ('0' === index) {
    router.push('/')
  }
}

const menuItemClick = ()=> {
  console.log('menuItemClick被单击')
}

onMounted(() => {

})

</script>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 1380px;
  display: flex;
  .el-menu {
    .el-image:hover {
      background: v-bind(hoverColor);
    }
  }



}
</style>
