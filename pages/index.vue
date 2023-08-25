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
            <el-image  src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/4.jpg" alt=""/>
          </div>
          <div class="bottom">
            <el-image  src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/4.jpg" alt=""/>
          </div>
        </div>
      </div>

      <!--分类-->
      <div class="category">
        <el-cascader-panel :clearCheckedNodes="clearCheckedNodes" :options="categoryList" :props="categoryPanelProps"/>

      </div>

      <!--博客区域-->
      <div class="blog">
        <IndexBlog></IndexBlog>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: '首页'
})
import {useSettingStore} from '@/stores/setting'
import {useCounterStore} from '@/stores/counter'

const counter = useCounterStore()
const setting = useSettingStore()
const btnClick = () => {
  counter.increment()
}

interface Category {
  // id：'1'
  id: string,
  // 名称：后端
  name: string,
  // 父分类id
  pid: string,
  // 该分类下的子分类
  children: Category[],
}

// 分类数据
const categoryList:Category[] = ref<Category[]>();

//分类被点击
const categoryClick = (pane,ev)=> {
  // 从0开始，pane.index就是第几个
  // 获取元素内容
  let item = categoryList.value[pane.index]
  // 刷新页面
}

const categoryPanelProps = {
  // 次级菜单的展开方式 'click' | 'hover'
  expandTrigger: 'hover',
  // 是否多选
  multiple: true,
  // 指定选项的子选项为选项对象的某个属性值
  children:'children',
  // 指定选项的值为选项对象的某个属性值
  value:'id',
  // 指定选项的值为选项对象的某个属性值
  label:'name',
}

onMounted(() => {
  categoryList.value = [
    {
      id: '100',
      name: '编程语言',
      pid: '',
      children: [
        {
          id: '110',
          name: 'Java',
          pid: '100',
          children: [
            {
              id: '111',
              name: 'Java',
              pid: '110',
            },
            {
              id: '121',
              name: 'Python',
              pid: '110',
            },
            {
              id: '131',
              name: 'Python',
              pid: '110',
            },
            {
              id: '141',
              name: 'PHP',
              pid: '110',
            },
            {
              id: '151',
              name: 'C#',
              pid: '110',
            },
          ]
        },
        {
          id: '120',
          name: 'Python',
          pid: '100',
        },
        {
          id: '130',
          name: 'Python',
          pid: '100',
          children: [
            {
              id: '131',
              name: 'Java',
              pid: '130',
            },
            {
              id: '132',
              name: 'Python',
              pid: '130',
            },
            {
              id: '133',
              name: 'Python',
              pid: '130',
            },
            {
              id: '134',
              name: 'PHP',
              pid: '130',
            },
            {
              id: '135',
              name: 'C#',
              pid: '130',
            },
          ]
        },
        {
          id: '140',
          name: 'PHP',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
      ]
    },
    {
      id: '100',
      name: '编程语言',
      pid: '',
      children: [
        {
          id: '110',
          name: 'Java',
          pid: '100',
          children: [
            {
              id: '111',
              name: 'Java',
              pid: '110',
            },
            {
              id: '121',
              name: 'Python',
              pid: '110',
            },
            {
              id: '131',
              name: 'Python',
              pid: '110',
            },
            {
              id: '141',
              name: 'PHP',
              pid: '110',
            },
            {
              id: '151',
              name: 'C#',
              pid: '110',
            },
          ]
        },
        {
          id: '120',
          name: 'Python',
          pid: '100',
        },
        {
          id: '130',
          name: 'Python',
          pid: '100',
          children: [
            {
              id: '131',
              name: 'Java',
              pid: '130',
            },
            {
              id: '132',
              name: 'Python',
              pid: '130',
            },
            {
              id: '133',
              name: 'Python',
              pid: '130',
            },
            {
              id: '134',
              name: 'PHP',
              pid: '130',
            },
            {
              id: '135',
              name: 'C#',
              pid: '130',
            },
          ]
        },
        {
          id: '140',
          name: 'PHP',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
        {
          id: '150',
          name: 'C#',
          pid: '100',
        },
      ]
    },
  ]
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
        .top,.bottom {
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
