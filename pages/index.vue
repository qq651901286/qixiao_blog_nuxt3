<template>
  <div class="container">
    <div class="content">
      <!--广告区域-->
      <el-row class="ad" :gutter="20">
        <el-col :span="16">
          <el-carousel height="500px" :interval="5000">
            <el-carousel-item>
              <el-image fit="fill" src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/3.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <el-image fit="fill" src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/4.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <el-image fit="fill" src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/5.jpg" alt=""/>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="8">

          <el-row>
            <el-image fit="fill" src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/5.jpg" alt=""/>
          </el-row>

          <el-row>
            <div></div>
          </el-row>

          <el-row>
            <el-image fit="fill" src="https://china-qixiao.oss-cn-beijing.aliyuncs.com/qixiao-blog/ad/4.jpg" alt="" />
          </el-row>
        </el-col>
      </el-row>

      <el-card>

      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: '首页'
})
import { useSettingStore } from '@/stores/setting'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
const setting = useSettingStore()
const btnClick = ()=> {
  counter.increment()
}

</script>

<style scoped lang="scss">
.container {
  .el-row {
    &.ad {
      max-height: 500px;
      min-height: 500px;
      .el-col {
        .el-carousel {
          .el-image {
            width: 100%;
            height: 100%;
          }
        }
        .el-row {
          .el-image {
            height: 240px;
          }
          div {
            height: 20px;
          }
        }
      }
    }
  }

  .el-card {
    &.content {
      margin-top: 20px;


    }
  }
}
</style>
