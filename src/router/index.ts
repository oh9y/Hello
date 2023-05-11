import { createRouter, createWebHistory } from 'vue-router'
import HomeLoginVue from '@/components/Home-login.vue'
import testVue from '@/components/main/testDemo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLoginVue
    },
    {
      path: '/test',
      name: 'test',
      component: testVue
    }
  ]
})

export default router
