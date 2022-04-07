import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/', component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/results/:id', component: () => import('../pages/QueryResult.vue'),
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})