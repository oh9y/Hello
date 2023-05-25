import { defineStore } from 'pinia'
// 第一个参数是应用程序中 store 的唯一 id
export const loginDateStore = defineStore('logindate', {
  // flg控制页面登录注册页面切换
  state: () => {
    return {
      name: '登录',
      flg: true,
      isday: true
    }
  },
  actions: {
    //实现页面切换
    changeLoginDate() {
      if (this.flg === true) {
        this.name = '登录'
      } else {
        this.name = '注册'
      }
      this.flg = !this.flg
    }
  }
})
