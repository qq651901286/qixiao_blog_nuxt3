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

    .blog {
      margin-top: 20px;
    }
  }
}
</style>
