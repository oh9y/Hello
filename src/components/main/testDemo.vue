<template>
  <div class="text_box">
    <div class="test_hm">
      <h1>这是测试页面</h1>
      <el-button type="primary" round @click="toMain">主页</el-button>
      <el-button type="primary" round @click="toLogin">登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'
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
#1 {
  color: black;
}
h1 {
  color: black;
}
.text_box {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
</style>
