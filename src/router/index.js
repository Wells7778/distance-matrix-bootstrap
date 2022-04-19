import { createRouter, createWebHashHistory } from 'vue-router'
import { isLogin } from '../utils/auth'

const notAuthenticated = (to, from, next) => {
  if (!isLogin()) {
    next()
    return
  }
  const path = from?.fullPath || from?.path
  const target = path === '/' ? '/' : 'path'
  next(target)
}

const routes = [
  {
    path: '/', component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/results/:id', component: () => import('../pages/QueryResult.vue'),
  },
  {
    path: '/login', component: () => import('../pages/UserLogin.vue'), beforeEnter: notAuthenticated,
  },
  {
    path: '/admin',
    component: () => import('../pages/AdminPage.vue'),
    meta: { requireAuth: true},
    children: [
      {
        path: 'stations', component: () => import('../pages/AdminStations.vue'), meta: { requireAuth: true},
      },
      {
        path: 'freeways', component: () => import('../pages/AdminFreeways.vue'), meta: { requireAuth: true},
      },
      {
        path: 'notes', component: () => import('../pages/AdminNotes.vue'), meta: { requireAuth: true},
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(({ meta })=> meta.requireAuth)) {
    const isAuthenticated = isLogin()
    if (!isAuthenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router