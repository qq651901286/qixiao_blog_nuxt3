<template>
  <div class="container">
    <div class="top">
      <div class="content">
        <div class="left">
          <NuxtLink to="/">
            <img src="~/assets/img/logo.png"/>
          </NuxtLink>
          <ul>
            <li>
              <NuxtLink to="/">
                <el-link>
                  首页
                </el-link>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/tag">
                <el-link>
                  标签
                </el-link>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/dynamic">
                <el-link>
                  动态
                </el-link>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/photo">
                <el-link>
                  相册
                </el-link>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/friendLink">
                <el-link>
                  友链
                </el-link>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">
                <el-link>
                  关于
                </el-link>
              </NuxtLink>
            </li>
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
    background: pink;

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
          //鼠标样式
          cursor:pointer;

          ::v-deep(.el-link__inner){
            font-size: 16px;
          }

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
