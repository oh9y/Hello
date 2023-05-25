<template>
  <div class="main_wide_box">
    <div class="common-layout">
      <el-container>
        <el-header id="main_wide_header_box"><Header></Header></el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './header/HeaderIndex.vue'
</script>

<style scoped lang="less">
//主页面盒子样式
.main_wide_box {
  width: 100vw;
  height: 100vh;
  background-color: black;
  //主页面头部样式
  #main_wide_header_box {
    padding: 0;
  }
}
</style>
