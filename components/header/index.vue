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
    <el-autocomplete
        v-model="searchContent"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="searchSelect"
        clearable
    ></el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import {useSettingStore} from "~/stores/setting";

const settingStore = useSettingStore()
const hoverColor = ref<string>(settingStore.hoverColor);

// 路由
const router = useRouter()

const menuHandleSelect = (index: string, pathList: string[]) => {
  console.log('menuHandleSelect被单击')
}

const menuItemClick = () => {
  console.log('menuItemClick被单击')
}


const searchContentData = ref<[]>([
  { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
  { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
  { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
  { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
]);

// 搜索内容
const searchContent:string = ref<string>('');

// 搜索内容被选择
const searchSelect = (item)=> {
  console.log(item)
}

// 输入内容进行搜索
const querySearchAsync = (queryString, cb) => {
  console.log(queryString)
  console.log(searchContentData)
  cb(searchContentData);
}

onMounted(() => {

})


</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-menu {
    img {
      width: 180px;
      height: 58px;
    }
  }
}

</style>
