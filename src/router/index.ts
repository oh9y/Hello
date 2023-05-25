import { createRouter, createWebHistory } from 'vue-router'
import testVue from '@/components/main/testDemo.vue'
import indexPageVue from '@/components/main/index-page.vue'
import LoginBoxVue from '@/components/login/LoginBox.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginBoxVue
    },
    {
      path: '/test',
      name: 'test',
      component: testVue
    },
    {
      path: '/index',
      name: 'main',
      component: indexPageVue
    }
  ]
})

export default router
