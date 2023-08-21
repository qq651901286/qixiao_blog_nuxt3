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


interface LinkItem {
  value: string
  link: string
}
// 搜索框内容
const links = ref<LinkItem[]>([])

// 搜索框数据
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}

// 搜索内容
const searchContent = ref('');

// 搜索内容被选择
const searchSelect = (item: any)=> {
  console.log(item)
}

let timeout: NodeJS.Timeout
// 返回搜索框数据
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
      ? links.value.filter(createFilter(queryString))
      : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 100 * Math.random())
}
// 过滤搜索框
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

onMounted(() => {
  // 加载搜索数据
  links.value = loadAll()
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
