<template>
  <div class="container">
    <div class="advertising">
      <div class="qr">
        二维码
      </div>
      <div class="describe">
        加我微信
      </div>
    </div>
    <!--个人信息-->
    <div class="me">
      <div v-if="isLogin" class="online">
        <!--头像-->
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <!--名称-->
        <label>奇小</label>
        <!--个性签名-->
        <label>IT界奇小，江湖id奇小</label>
        <!--ip地址-->
        <div class="addr">
          <svg t="1692027363157" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4100" width="16" height="16"><path d="M512 64C306.4 64 140 230.4 140 436c0 101.6 40.8 194.4 107.2 261.6L512 960l264-263.2c66.4-67.2 107.2-159.2 107.2-261.6C884 230.4 717.6 64 512 64z m128 331.2c-4.8 62.4-54.4 112-116.8 116.8-75.2 6.4-138.4-53.6-138.4-127.2 0-70.4 57.6-128 128-128 73.6 0 133.6 63.2 127.2 138.4z" p-id="4101" fill="#ffb6c1"></path></svg>
          <span>深圳罗湖区</span>
        </div>
        <!--博客 分类 标签-->
        <div class="">
          <div>
            <span>博客</span>
            <span>111</span>
          </div>
          <div>
            <span>分类</span>
            <span>20</span>
          </div>
          <div>
            <span>标签</span>
            <span>15</span>
          </div>
        </div>
        <el-button>个人中心</el-button>
        <!--个人资料-->
        <div>
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

  .me {
    width: 100%;
    height: 300px;
    background: #36e4da;
    .online {

    }
  }
}
</style>