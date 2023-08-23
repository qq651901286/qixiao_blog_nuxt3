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
        <el-card shadow="never">
          <el-tabs tab-position="left" @tab-click="categoryClick">
            <el-tab-pane :key="item.id" :label="item.name" v-for="item in categoryList">
              <el-space wrap>
                <el-check-tag v-for="tag in item.tagList" :checked="tag.isChoice" @change="tagClick(tag)">
                  {{ tag.name  }}
                </el-check-tag>
              </el-space>
            </el-tab-pane>
          </el-tabs>
        </el-card>
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

interface Tag {
  // id：'1'
  id: string,
  // 标题：python,java
  name: string,
  // 选择状态
  isChoice:false,
}

interface Category {
  // id：'1'
  id: string,
  // 名称：后端
  name: string,
  // 标签
  tagList: Tag[],
}
const checked = ref(false)
const onChange = (status: boolean) => {
  checked.value = status
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

// 标签被点击
const tagClick = (tag:Tag)=> {
  tag.isChoice = !tag.isChoice

  // 刷新列表
}

onMounted(() => {
  categoryList.value = [
    {
      id:'1',
      name:'编程语言',
      tagList:[
        {
          id:'1',
          name:'Java',
          isChoice:false,
        },
        {
          id:'2',
          name:'Python',
          isChoice:false,
        },
        {
          id:'5',
          name:'Python',
          isChoice:false,
        },
        {
          id:'3',
          name:'PHP',
          isChoice:false,
        },
        {
          id:'4',
          name:'C#',
          isChoice:false,
        },
      ]
    },
    {
      id:'2',
      name:'Java',
      tagList:[
        {
          id:'1',
          name:'java',
          isChoice:false,
        },
        {
          id:'2',
          name:'tomcat',
          isChoice:false,
        },
        {
          id:'3',
          name:'jvm',
          isChoice:false,
        },
        {
          id:'4',
          name:'StringBoot',
          isChoice:false,
        },
        {
          id:'5',
          name:'StringCloud',
          isChoice:false,
        },
        {
          id:'6',
          name:'String',
          isChoice:false,
        },
      ]
    },
    {
      id:'3',
      name:'Unity3D',
      tagList:[
        {
          id:'1',
          name:'建模',
          isChoice:false,
        },
        {
          id:'2',
          name:'材质',
          isChoice:false,
        },
        {
          id:'3',
          name:'C#',
          isChoice:false,
        },
        {
          id:'4',
          name:'游戏开发',
          isChoice:false,
        },
        {
          id:'5',
          name:'王者荣耀',
          isChoice:false,
        },
        {
          id:'6',
          name:'3D游戏',
          isChoice:false,
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
      .el-card {
      }
    }
  }
}
</style>
