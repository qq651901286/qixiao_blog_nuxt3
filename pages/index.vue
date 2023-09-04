<template>
  <div class="container">
    <div class="content">
      <!--广告区域-->
      <div class="ad">
        <div class="left">
          <el-carousel height="500px" :interval="5000">
            <el-carousel-item>
              <el-image src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/5.jpg" alt=""/>
            </el-carousel-item>
            <el-carousel-item>
              <el-image src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/4.jpg" alt=""/>
            </el-carousel-item>
            <el-carousel-item>
              <el-image src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/3.jpg" alt=""/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <div class="top">
            <el-image src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/4.jpg" alt=""/>
          </div>
          <div class="bottom">
            <el-image src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/4.jpg" alt=""/>
          </div>
        </div>
      </div>

      <!--分类-->
      <div class="category">
        <el-cascader-panel v-model="categoryValue" @change="categoryClick" :options="categoryList"
                           :props="categoryPanelProps"/>
      </div>

      <!--博客区域-->
      <div class="blog">
        <IndexBlog></IndexBlog>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

definePageMeta({
  title: '首页'
})

interface Category {
  // id：'1'
  id: string,
  // 名称：后端
  name: string,
  // 父分类id
  pid: string,
  // 该分类下的子分类
  children: Category[] | unknown,
}

// 分类数据
const categoryList: Category[] = reactive([
  {
    id: '100',
    name: '100-编程语言',
    pid: '',
    children: [
      {
        id: '110',
        name: '110-Java',
        pid: '100',
        children: [
          {
            id: '111',
            name: '111-Java',
            pid: '110',
          },
          {
            id: '112',
            name: '112-Python',
            pid: '110',
          },
          {
            id: '113',
            name: '113-Python',
            pid: '110',
          },
          {
            id: '114',
            name: '114-PHP',
            pid: '110',
          },
          {
            id: '115',
            name: '115-C#',
            pid: '110',
          },
        ]
      },
      {
        id: '120',
        name: '120-Python',
        pid: '100',
      },
      {
        id: '130',
        name: '130-Python',
        pid: '100',
        children: [
          {
            id: '131',
            name: '131-Java',
            pid: '130',
          },
          {
            id: '132',
            name: '132-Python',
            pid: '130',
          },
          {
            id: '133',
            name: '133-Python',
            pid: '130',
          },
          {
            id: '134',
            name: '134-PHP',
            pid: '130',
          },
          {
            id: '135',
            name: '135-C#',
            pid: '130',
          },
        ]
      },
      {
        id: '140',
        name: '140-PHP',
        pid: '100',
      },
      {
        id: '150',
        name: '150-C#',
        pid: '100',
      },
    ]
  },
  {
    id: '200',
    name: '200-编程语言',
    pid: '',
    children: [
      {
        id: '210',
        name: '210-Java',
        pid: '200',
        children: [
          {
            id: '211',
            name: '211-Java',
            pid: '210',
          },
          {
            id: '212',
            name: '212-Python',
            pid: '210',
          },
        ]
      },
    ]
  },
]);

// 分类id
let categoryValue: any = ref();

// 获取分类id
const getCategoryIdByCategoryValue = (categoryValue: any) => {
  let categoryIds = '';

  for (let i = 0; i < categoryValue.value.length; i++) {
    // 一行元素 ["100","110","141"]
    let row = categoryValue.value[i]
    // 取最后一个值作为key用来查询分类，多个逗号隔开
    if ('' === categoryIds) {
      // 第一个值不用拼接逗号
      categoryIds = row[row.length - 1]
    } else {
      // 第二个开始需要拼接逗号
      categoryIds = categoryIds + ',' + row[row.length - 1]
    }
  }
  return categoryIds
}

// 通过分类id获取分类数组，用来显示已选的分类
const getCategoryValueByCategoryId = (categoryIds: string) => {
  let result = []
  for (let categoryId of categoryIds.split(',')) {
    result.push(categoryIdMap[categoryId])
  }

  return result
}

// 通过分类id获取父id所有
const categoryIdMap = reactive({
  "111": [
    "100",
    "110",
    "111"
  ],
  "112": [
    "100",
    "110",
    "112"
  ],
  "113": [
    "100",
    "110",
    "113"
  ],
  "114": [
    "100",
    "110",
    "114"
  ],
  "115": [
    "100",
    "110",
    "115"
  ],
  "120": [
    "100",
    "120"
  ],
  "131": [
    "100",
    "130",
    "131"
  ],
  "132": [
    "100",
    "130",
    "132"
  ],
  "133": [
    "100",
    "130",
    "133"
  ],
  "134": [
    "100",
    "130",
    "134"
  ],
  "135": [
    "100",
    "130",
    "135"
  ],
  "140": [
    "100",
    "140"
  ],
  "150": [
    "100",
    "150"
  ],
  "211": [
    "200",
    "210",
    "211"
  ],
  "212": [
    "200",
    "210",
    "212"
  ]
})

//分类被点击
const categoryClick = () => {

  let categoryId = getCategoryIdByCategoryValue(categoryValue)

  // 跳转
  router.push({
    path: '/',
    query: {
      categoryId: categoryId,
    }
  })
}

// 获取用户数据
const getDataInfo = () => {

}

const categoryPanelProps = {
  // 次级菜单的展开方式 'click' | 'hover'
  expandTrigger: 'hover',
  // 是否多选
  multiple: true,
  // 指定选项的子选项为选项对象的某个属性值
  children: 'children',
  // 指定选项的值为选项对象的某个属性值
  value: 'id',
  // 指定选项的值为选项对象的某个属性值
  label: 'name',
}

onMounted(() => {
  // 分类选择处理
  let categoryId: any = route.query.categoryId
  if (categoryId == null || '' === categoryId) {

  } else {
    categoryValue.value = getCategoryValueByCategoryId(categoryId)
  }

  getDataInfo()
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;

    .ad {
      height: 500px;
      display: flex;

      .left {
        width: 790px;

        .el-image {
          width: 790px;
          height: 500px;
        }
      }

      .right {
        margin-left: 20px;
        width: 390px;
        display: flex;
        flex-direction: column;

        .top, .bottom {
          width: 390px;
          height: 240px;

          .el-image {
            width: 390px;
            height: 240px;
          }
        }

        .bottom {
          margin-top: 20px;
        }
      }
    }

    .category {
      margin-top: 20px;
    }

    .blog {
      margin-top: 20px;
    }
  }
}
</style>
