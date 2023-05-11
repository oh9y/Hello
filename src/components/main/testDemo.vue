<template>
  <div class="text_box">
    <div class="test_hm">
      <h1>这是测试页面</h1>
      <button @click="toLogin">登录</button>
      <button @click="toMain">主页</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toLogin = () => {
  router.push('/')
}

const toMain = () => {
  router.push('/index')
}
</script>

<style lang="less" scoped>
h1 {
  color: black;
}
.text_box {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
</style>
