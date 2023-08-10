<template>
  <div class="container">
    <div class="top">
      <div class="content">
        <div class="left">
          <img src="https://blog.nineya.com/upload/2023/04/logo.png" @click="logoClick()" />

          <ul>
            <li class="activate">首页</li>
            <li>生活</li>
            <li>归档</li>
            <li>分类</li>
            <li>标签</li>
            <li>动态</li>
            <li>相册</li>
            <li>友链</li>
            <li>关于</li>
          </ul>
        </div>
        <div class="right">
          <el-autocomplete
              v-model="searchStr"
              :fetch-suggestions="querySearchAsync"
              placeholder="搜索..."
              value-key="value"
              @select="handleSelect"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const searchStr = ref('')

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
// 选择搜索框内容
const handleSelect = (item: LinkItem) => {
  console.log(item)
}

// logon被单击
const logoClick = ()=> {
  router.push({
    path:'/'
  });
}

onMounted(() => {
  // 加载搜索数据
  links.value = loadAll()
})
</script>

<style scoped lang="scss">
.top {
  // 让内容居中
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 80px;
    background: #cccccc;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;

      img {
        margin-left: 15px;
        width: 120px;
        height: 30px;
      }

      ul {
        display: flex;

        li {
          margin-left: 15px;
          cursor:pointer;

          &.activate {
            color: blue;
          }
        }
      }
    }

    .right {
      display: flex;
      margin-right: 15px;
    }
  }
}
</style>
