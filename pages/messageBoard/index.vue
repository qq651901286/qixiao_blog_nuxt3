<template>
  <div class="container">
    <div class="content">
      <client-only>
        <vue-danmaku v-if="refreshDanmaku" ref="danmakuRef" v-model:danmus="danmus" useSlot loop>
          <template v-slot:dm="{ index, danmu }">
            <span class="text">{{ index }}{{ danmu.name }}：{{ danmu.text }}</span>
          </template>
        </vue-danmaku>
      </client-only>

      <div class="send">

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import vueDanmaku from 'vue3-danmaku'

const danmus = ref([
  { avatar: 'http://a.com/a.jpg', name: 'a', text: 'aaa' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
  { avatar: 'http://a.com/b.jpg', name: 'b', text: 'bbb' },
])
const danmakuRef = ref()
const refreshDanmaku = ref(true)

onMounted(()=>{
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
  .content{
    width: 1200px;
    height: 800px;

    .vue-danmaku {
      background: #332c2c;
      height: 300px;
      .text {
        color: #d37c8e;
      }
    }
    .send{
      height: 100px;
      margin-top: 20px;
      background: #2d8cf0;
    }
  }
}
</style>
