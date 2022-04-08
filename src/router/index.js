import { createRouter, createWebHashHistory } from 'vue-router'
import { canAccess } from '../utils/auth'

const routes = [
  {
    path: '/', component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/results/:id', component: () => import('../pages/QueryResult.vue'),
  },
  {
    path: '/login', component: () => import('../pages/UserLogin.vue'),
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

router.beforeEach(async (to) => {
  if (!canAccess(to)) return '/login'
})

export default router