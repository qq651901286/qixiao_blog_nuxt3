<template>
  <div>
    测试页面
  </div>
  <button @click="btn()">请求测试按钮</button>
</template>

<script setup lang="ts">
//引入http.ts封装的网络请求方法
import { http } from '~/composables/http';

const btn = async () => {
  //定义请求参数
  const obj = {
    method: "POST",
    url: '/user/login',
    //"POST"方法传参:
    body: {
      name: "测试",
      phone: "176xxxxxx1",
      password: "test123",
    },
    //"GET"方法URL传参:
    // query: {
    //     name:"test"
    // }
  }
  //开始请求
  let res = await http(obj)
  console.log("请求结果：", res);
}

</script>

