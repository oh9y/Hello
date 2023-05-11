<template>
  <div class="box" :style="{ height: store.flg ? '85vh' : '90vh' }">
    <div
      class="content"
      :style="{
        height: store.flg ? '85vh' : '90vh',
        backgroundColor: store.flg ? 'rgb(156, 148, 208)' : 'rgb(228, 218, 232)'
      }"
    >
      <transition name="custom-classes" enter-active-class="animate__animated animate__fadeIn">
        <img v-if="!store.flg" class="login-img images" src="../assets/login.jpg" alt="登录" />
      </transition>
      <transition name="custom-classes" enter-active-class="animate__animated animate__fadeIn">
        <img v-if="store.flg" class="register-img images" src="../assets/register.jpg" alt="注册" />
      </transition>
      <div class="login_wrapper" :style="{ height: store.flg ? '70vh' : '80vh' }">
        <Signin v-if="store.flg"></Signin>
        <Signup v-if="!store.flg"></Signup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loginDateStore } from '@/stores/login_date'
import Signin from './sign-in.vue'
import Signup from './sign-up.vue'

const store = loginDateStore()
</script>
<style scoped lang="less">
//动画时长
.animate__fadeIn {
  --animate-duration: 2s;
  --animation-timing-function: ease-in;
}
.box {
  width: 90vw;
  height: 85vh;
  border-radius: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 1s;

  .content {
    width: 90vw;
    height: 85vh;
    background-color: rgb(228, 218, 232);
    border-radius: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all 1s;
    .login_button {
      cursor: pointer;
    }
    .images {
      margin-left: -150px;
      margin-right: 100px;
      position: absolute;
      left: 15%;
    }
    .login-img {
      width: 45%;
      border-radius: 15%;
    }
    .register-img {
      width: 45%;
      border-radius: 15%;
    }
    .login_wrapper {
      width: 30vw;
      height: 70vh;
      border-radius: 40px;
      backdrop-filter: blur(1px);
      background: rgba(244, 240, 245, 0.6);
      padding: 60px;
      box-sizing: border-box;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
      position: absolute;
      right: 10%;
      transition: all 1s;
    }
  }
}
// 控制变化
.box1 {
  width: 90vw;
  height: 90vh;
  border-radius: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 1s;
}
</style>
