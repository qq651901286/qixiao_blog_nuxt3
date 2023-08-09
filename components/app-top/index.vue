<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="https://blog.nineya.com/upload/2023/04/logo.png">

        <ul>
          <li>首页</li>
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
            placeholder="搜索"
            @change="searchHandleChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 搜索的字符串
let searchStr = ref<string>('');

// 搜索出来的内容
interface searchContentArr {
  key: string
  value: string
}

const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  cb()
}

const searchHandleChange = (item: any) => {

}


</script>

<style scoped lang="scss">
.top {
  // 固定最上面
  position: fixed;
  z-index: 999;

  width: 100%;
  height: 80px;
  background: #d4d4e2;

  // 让内容居中
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 80px;
    background: #af3db5;

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
