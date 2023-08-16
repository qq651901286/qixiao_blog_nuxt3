<template>
  <div class="container">
    <div class="content">
      <ul>
        <li class="item" v-for="item in 5">
          <div class="left">
            <el-image
            src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
            :zoom-rate="1.2"
            hide-on-click-modal
            fit="cover"
            :preview-src-list="previewSrcList"
            />

          </div>
          <div class="right">
            <div class="top">
              <div class="title">
                <el-text truncated type="primary" size="large">
                  演示spring AOP的切入表达式重用和优先级问题以及怎么实现基于xml的AOP
                </el-text>
              </div>
            </div>
            <div class="content">
              <label>
                本篇的Spring-AOP系类文章第五篇讲解了演示spring AOP的切入表达式重用
                本篇的Spring-AOP系类文章第五篇讲解了演示spring AOP的切入表达式重用
                本篇的Spring-AOP系类文章第五篇讲解了演示spring AOP的切入表达式重用
                本篇的Spring-AOP系类文章第五篇讲解了演示spring AOP的切入表达式重用
                本篇的Spring-AOP系类文章第五篇讲解了演示spring AOP的切入表达式重用
                本篇的Spring-AOP系类文章第五篇讲解了演示spring AOP的切入表达式重用
                本篇的Spring-AOP系类文章第五篇讲解了演示spring AOP的切入表达式重用
                和优先级问题以及怎么实现基于xml的AOPfdsafad
                热瓦然而我污染而为人埃尔文阿输入法大师傅阿斯顿发大师傅a
                阿发大水发阿萨德sfaewrtaewr
                阿发大水发阿萨德sfaewrtaewr
                阿发大水发阿萨德sfaewrtaewr
                阿发大水发阿萨德sfaewrtaewr
                阿发大水发阿萨德sfaewrtaewr
                阿发大水发阿萨德sfaewrtaewr
                阿发大水发阿萨德sfaewrtaewr
                阿发大水发阿萨德sfaewrtaewr
                阿发大水发阿萨德sfaewrtaewr
              </label>
            </div>
            <div class="bottom">
              底部
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="page">
      <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="currentPageSize"
          :page-sizes="[5]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="150"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta(
    { title: '首页' }
)

const previewSrcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
]
</script>

<style scoped lang="scss">
.container {
  width: 720px;
  height: 1160px;

  display: flex;
  flex-direction: column;
  .content {
    height: 1100px;
    .item {
      margin-top: 20px;
      height: 200px;
      display: flex;
      .left {
        width: 200px;
        height: 200px;
        .el-image {
          width: 200px;
          height: 200px;
        }
      }
      .right {
        background: #f2f2f2;
        height: 200px;
        width: 520px;
        display: flex;
        flex-direction: column;
        .top {
          width: 520px;
          height: 50px;
          .title {
            margin-left: 10px;
            line-height: 50px;
            height: 50px;
          }
        }
        .content {
          background: red;
          margin-left: 10px;
          width: 510px;
          height: 110px;
          display: flex;
          label {
            // 超出显示省略号
            text-overflow: ellipsis;
            overflow: hidden;
            // 首行缩进2字符
            text-indent: 2ch;
            width: 510px;
            height: 110px;
            font-size: 12px;
          }
        }
        .bottom {
          width: 520px;
          height: 40px;
        }
      }
    }
  }
  .page {
    height: 60px;
    display: flex;
    justify-content: center;
  }
}
</style>
