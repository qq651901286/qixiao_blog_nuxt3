<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="content">
      <div class="friend" v-for="i in 10">
        <el-card class="friend-card" shadow="hover">
          <div class="friend-content">
            <!--头像-->
            <div class="avatar">
              <el-popover
                  placement="top-start"
                  :width="200"
                  content="大家好，我是奇小，江湖id奇小，大家好，我是奇小，江湖id奇小，大家好，我是奇小，江湖id奇小"
              >
                <template #reference>
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                </template>
              </el-popover>
            </div>

            <div class="name">
              <el-link :underline="false" href="https://gitee.com/qq651901286" target="_blank">
                奇小
              </el-link>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    display: flex;
    flex-wrap:wrap;
    .friend {
      margin-left: 20px;
      margin-top: 20px;
      width: 275px;
      .friend-content {
        display: flex;
        justify-content: center;
        .avatar {
          .el-avatar {
            width: 60px;
            height: 60px;
          }
        }
        .name {
          margin-left: 20px;
          display: flex;
          justify-content: center;
          .el-link {
            font-size: 20px;
          }
        }
      }
    }

  }
}
</style>
