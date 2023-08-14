<template>
  <div class="container">
    <div class="up">
      <!--最新博客-->
      <div class="new-blog">
        <span class="title">
          最新博客
        </span>
        <span class="more">
          <el-link href="https://element-plus.org" target="_blank">
            更多
          </el-link>
        </span>
      </div>
      <div class="content">
        <ul>
          <li v-for="item in 8" @click="blogClick(1)">
            Spring两大核心竟然这么简单，看了学不会来打我
          </li>
        </ul>
      </div>
    </div>
    <div class="centre">
      中
    </div>
    <div class="below">
      下
    </div>
  </div>
</template>

<script setup lang="ts">
const blogClick = (id:number)=> {
  console.log(id);
}

</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  .up {
    background: beige;
    height: 300px;
    width: 100%;

    .new-blog {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        margin-left: 10px;
      }
      .more {
        margin-right: 10px;
        ::v-deep(.el-link__inner){
          font-size: 16px;
        }
      }
    }

    .content {
      height: 210px;
      width: 100%;
      ul {
        li {
          height: 20px;
          margin: 10px 10px;
          font-size: 16px;
          //文字溢出显示省略号
          text-overflow: ellipsis;
          //强制文字在一行
          white-space: nowrap;
          //超出宽度隐藏
          overflow: hidden;
          // 鼠标变小手
          cursor:pointer;
        }
        // 悬浮样式
        li:hover{
          color: blue;
        }
        li:active {
          color: black;
        }
      }
    }
  }
  .centre {
    margin-top: 20px;
    height: 560px;
    width: 100%;
    background: rgba(251, 204, 212, 0.89);
  }
  .below {
    margin-top: 20px;
    height: 300px;
    width: 100%;
    background: rgb(87, 63, 63);
  }
}
</style>
