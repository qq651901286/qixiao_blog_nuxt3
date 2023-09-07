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
        <el-form
            ref="sendMessageDataFormRef"
            :model="sendMessageDataForm"
            :rules="sendMessageDataRules"
            label-width="120px"
        >
          <el-form-item label="名称" prop="name">
            <el-input
                v-model="sendMessageDataForm.name"
                placeholder="请输入名称"
            >
            </el-input>
          </el-form-item>

          <el-form-item label="留言内容" prop="text">
            <el-input
                v-model="sendMessageDataForm.text"
                placeholder="请输入留言内容"
            >
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="sendMessageClick">留言</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import vueDanmaku from 'vue3-danmaku'
import {FormInstance,FormRules} from "element-plus";

const sendMessageDataFormRef:any = ref<FormInstance>()

// 留言内容
const sendMessageDataForm = reactive({
  name:'',
  text:'',
})

// 留言表单内容类型
interface SendMessageDataForm {
  name:string,
  text:string,
}

// 留言内容校验器
const sendMessageDataRules = reactive<FormRules<SendMessageDataForm>>({
  name:[
    { required: true, message: '请输入名称', trigger: 'blur' },
  ],
  text:[
    { required: true, message: '请输入内容', trigger: 'blur' },
  ],
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
  sendMessageDataFormRef.value.validate((valid: any, fields: any) => {
    if (valid) {

      let name = sendMessageDataForm.name;
      let text = sendMessageDataForm.text;

      // 发送弹幕到屏幕
      danmakuRef.value.add(
          {
            'name':name,
            'text':text,
          }
      )

      // 发送到后端
    } else {
      return
    }
  })
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
      display: flex;
      justify-content: center;
      .el-form{
        width: 400px;
      }
    }
  }
}
</style>
