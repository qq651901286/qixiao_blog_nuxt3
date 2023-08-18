<template>
  <div class="container">
    <el-menu
        mode="horizontal"
        :ellipsis="false"
        @select="menuHandleSelect"
    >
      <el-menu-item @click="menuItemClick" index="0">
        <el-image class="logo" src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/myPicture/logo.png" fit="cover"/>
      </el-menu-item>
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

// 头部数据
const headerDataList:headerData[] = reactive<headerData[]>([
  {
    id:'1',
    type:'inner',
    showType:'image',
    showContent:'https://china-qixiao.oss-cn-beijing.aliyuncs.com/myPicture/logo.png',
    url:'/',
    child:[]
  },
  {
    id:'2',
    type:'inner',
    showType:'title',
    showContent:'首页',
    url:'/',
    child:[]
  },
  {
    id:'3',
    type:'inner',
    showType:'title',
    showContent:'博客',
    url:'/blogs',
    child:[]
  },
  {
    id:'4',
    type:'inner',
    showType:'title',
    showContent:'留言板',
    url:'/guestbook',
    child:[]
  },
  {
    id:'5',
    type:'inner',
    showType:'title',
    showContent:'友链',
    url:'/friendLink',
    child:[]
  },
  {
    id:'6',
    type:'inner',
    showType:'title',
    showContent:'关于',
    url:'/about',
    child:[]
  },
  {
    id:'6',
    type:'inner',
    showType:'title',
    showContent:'自己',
    url:'',
    child:[
      {
        id:'7',
        type:'share',
        name:'Gitee',
        url:'/about',
        child:[]
      },
    ]
  },
]);

const activeIndex = ref('1')
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

  .el-menu {
    height: 60px;

    .el-menu-item {
      .logo {
        height: 58px;
      }
    }
  }
}
</style>
