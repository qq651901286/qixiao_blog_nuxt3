<template>
  <div class="container">
    <div class="content">
      <client-only>
        <vue-danmaku
            ref="danmakuRef"
            v-model:danmus="danmuList"
            useSlot
            speeds="120"
            debounce="200"
            :channels="5"
        >
          <template v-slot:dm="{ index, danmu }">
            <span class="text">{{ danmu.name }}：{{ danmu.text }}</span>
          </template>
        </vue-danmaku>
      </client-only>

      <div class="sendMessage">
        <el-row justify="center" :gutter="20">
          <el-col :span="6">
            <el-input
                v-model="sendMessageData.name"
                placeholder="请输入名称"
            >
              <template #prepend>
                名称：
              </template>
            </el-input>
          </el-col>

          <el-col :span="8">
            <el-input
                v-model="sendMessageData.text"
                placeholder="请输入留言内容"
            >
              <template #prepend>
                内容：
              </template>
            </el-input>
          </el-col>

          <el-col :span="2">
            <el-button type="primary" @click="sendMessageClick">留言</el-button>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import vueDanmaku from 'vue3-danmaku'

// 留言内容
const sendMessageData = ref({
  name:'',
  text:'',
})

// 弹幕数据
const danmuList = ref([
  {avatar: 'http://a.com/a.jpg', name: '奇小', text: '666'},
  {avatar: 'http://a.com/a.jpg', name: '奇小2', text: '牛逼呀'},
  {avatar: 'http://a.com/a.jpg', name: '奇小3', text: '真牛逼'},
])
const danmakuRef = ref()

// 留言被点击
const sendMessageClick = ()=> {

  let name = sendMessageData.value.name;
  let text = sendMessageData.value.text;
  if(name == null || '' === name){
    name = '游客'
  }

  if(text == null || '' === text){
    // 提示内容不能为空
    ElMessage({
      message: '留言内容不能为空',
      type: 'error',
      duration: 2000,
      center:true,
    })
    return
  }

  // 发送弹幕到屏幕
  danmakuRef.value.add(
      {
        'name':name,
        'text':text,
      }
  )

  // 发送到后端
}

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      danmakuRef.value.resize();
      danmakuRef.value.play();
    }, 100);
  });
})

</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 800px;
    margin-top: 20px;

    .vue-danmaku {
      background: #fdf6ec;
      height: 300px;

      .text {
        color: #e6a23c;
      }
    }

    .sendMessage {
      margin-top: 20px;
      .el-row {
        .el-input,.el-button {
          height: 40px;
        }
      }
    }
  }
}
</style>
