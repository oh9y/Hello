<template>
  <div class="top-tips">
    <span>Welcome!</span>
    <span @click="changeFlg" class="top-tips-span">注册</span>
  </div>
  <h1 class="h1-text">{{ store.name }}</h1>
  <div class="other-login">
    <img src="../assets/QQ.png" alt="" />
    <span>使用QQ登录</span>
  </div>
  <div class="login-form">
    <form action="" @submit.prevent="goTo()">
      <div>
        <span>账号</span>
      </div>
      <input type="text" />
      <div>
        <span>密码</span>
      </div>
      <input type="password" autocomplete="off" />
      <button>denglu</button>
    </form>
    <button class="btn">登录</button>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
// import { toRefs } from 'vue'
import { loginDateStore } from '@/stores/login_date'
import { useRouter } from 'vue-router'

const store = loginDateStore()
const changeFlg = () => {
  store.changeLoginDate()
}

const router = useRouter()
const goTo = () => {
  router.replace('/test')
  console.log(1)
}
</script>

<style scoped lang="less">
.top-tips {
  span:nth-child(1) {
    font-size: 25px;
    font-weight: 600;
  }
  .top-tips-span {
    font-size: 15px;
    color: rgb(79, 133, 226);
    border-bottom: 1px solid rgb(79, 133, 226);
    float: right;
    line-height: 25px;
    cursor: pointer;
  }
}
.other-login {
  width: 60%;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  color: #fff;
  margin: 40px 0;
  background-color: rgb(79, 133, 226);
  padding-bottom: 2px;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
    color: #fff;
  }
}
.login-form {
  form {
    span {
      color: rgb(123, 122, 123);
      margin: 5px;
    }

    input {
      width: 100%;
      height: 50px;
      margin: 5px 0;
      border-radius: 5px;
      border: 0;
      font-size: 17px;
      padding: 0 20px;
      box-sizing: border-box;
    }
    input:focus {
      outline: none;
      border: 1px solid rgb(79, 133, 226);
    }
    .btn {
      width: 150px;
      height: 50px;
      margin: 20px 0;
      background-color: rgb(59, 58, 59);
      border: 0;
      border-radius: 5px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .btn {
    width: 150px;
    height: 50px;
    margin: 20px 0;
    background-color: rgb(59, 58, 59);
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
}
h1 {
  color: black;
  font-size: 45px;
  margin: 20px 0;
}
span {
  color: black;
}
</style>
