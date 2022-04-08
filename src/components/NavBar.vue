<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top position-fixed">
    <div class="container-fluid">
      <router-link
        to="/"
        class="navbar-brand"
        :class="{ active: isActive('/') }"
      >
        服務網搜尋
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/admin/stations"
              class="nav-link"
              :class="{ active: isActive('/admin/stations') }"
            >
              後台
            </router-link>
          </li>
          <li
            v-if="isLogin"
            class="nav-item"
          >
            <a
              href="#/"
              class="nav-link"
              @click="onLogout"
            >
              登出
            </a>
          </li>
          <li
            v-else
            class="nav-item"
          >
            <router-link
              to="/login"
              class="nav-link"
              :class="{ active: isActive('/login') }"
            >
              登入
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { inject, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { logout } from '../utils/auth'

export default {
  setup() {
    const route = useRoute()
    const mapStore = inject('mapStore')
    const { state, signOut } = mapStore
    const isActive = (path) => {
      return route.path === path
    }
    const paths = [
      {
        path: '/admin/stations',
        name: '後台',
      },
    ]
    const onLogout = () => {
      signOut()
      logout()
    }
    return {
      isActive,
      paths,
      onLogout,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
