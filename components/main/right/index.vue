<template>
  <div class="container">
    <div class="advertising">
      <div class="qr">
        <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
      </div>
      <div class="describe">
        微信扫一扫
      </div>
    </div>
    <!--个人信息-->
    <div class="me">
      <div v-if="isLogin" class="online">
        <!--头像-->
        <el-avatar size="large" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <!--名称-->
        <label class="name">奇小</label>
        <!--个性签名-->
        <label class="introduce">浪迹互联网世界，IT界奇小，江湖id奇小，18岁，编程经验40年。</label>
        <!--ip地址-->
        <div class="addr">
          <svg t="1692027363157" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4100" width="16" height="16"><path d="M512 64C306.4 64 140 230.4 140 436c0 101.6 40.8 194.4 107.2 261.6L512 960l264-263.2c66.4-67.2 107.2-159.2 107.2-261.6C884 230.4 717.6 64 512 64z m128 331.2c-4.8 62.4-54.4 112-116.8 116.8-75.2 6.4-138.4-53.6-138.4-127.2 0-70.4 57.6-128 128-128 73.6 0 133.6 63.2 127.2 138.4z" p-id="4101" fill="#ffb6c1"></path></svg>
          <span>深圳罗湖区</span>
        </div>
        <!--博客 分类 标签-->
        <div class="data">
          <div class="blog">
            <label class="title">博客</label>
            <label class="count">111</label>
          </div>
          <div class="category">
            <label class="title">分类</label>
            <label class="count">20</label>
          </div>
          <div class="tag">
            <label class="title">标签</label>
            <label class="count">15</label>
          </div>
        </div>
        <el-button>个人中心</el-button>
        <!--个人资料-->
        <div class="contact">
          <span>Github</span>
          <span>QQ</span>
          <span>Email</span>
          <span>个人介绍</span>
        </div>
      </div>
      <div v-else class="offline">
        未登录
      </div>
    </div>

    <!--友链-->
    <div class="friend-link">
      <ul>
        <li>
          <span>头像</span>
          <span>名字</span>
          <span>地址</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
const isLogin = ref<boolean>(true);
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;

  .advertising {
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 130px;
      height: 130px;
    }
  }

  .me {
    background: #a8b7b6;
    height: 500px;

    ::v-deep(.el-avatar),.name,.introduce,
    .addr,.data,::v-deep(.el-button),.contact
    {
      margin-top: 15px;
    };

    .online {
      display: flex;
      flex-direction: column;
      align-items: center;
      ::v-deep(.el-avatar){
        margin-top: 10px;
      }
      .name {
        font-size: 20px;
      }
      .introduce {
        font-size: 12px;
        color: #4f5555;
      }
      .addr {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .data {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .blog,.category,.tag {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          font-size: 12px;
        }
        .count {
          margin-top: 5px;
          font-size: 25px;
        }
      }
      ::v-deep(.el-button) {
        width: 100%;
      }
    }
  }
}
</style>