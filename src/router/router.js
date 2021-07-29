import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/index',
  },
  //首页
  {
    path: '/index',
    name: 'index',
    component: () => import('@/view/index.vue'),
  },
  // 个人桌面
  {
    path: '/desktop',
    name: 'desktop',
    component: () => import('@/view/desktop.vue'),
  },
  // 审批中心
  {
    path: '/approval',
    name: 'approval',
    component: () => import('@/view/approval.vue'),
  },
  // 应用中心
  {
    path: '/application',
    name: 'application',
    component: () => import('@/view/application.vue'),
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
