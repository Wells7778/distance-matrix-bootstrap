<template>
  <div class="container">
    <div class="row">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link
            to="/admin/stations"
            class="nav-link"
            :class="{ active: isActive('/admin/stations') }"
          >
            服務網清單
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/admin/freeways"
            class="nav-link"
            :class="{ active: isActive('/admin/freeways') }"
          >
            交流道清單
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/admin/notes"
            class="nav-link"
            :class="{ active: isActive('/admin/notes') }"
          >
            派車注意事項
          </router-link>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const isActive = (path) => {
      return route.path === path
    }
    return {
      isActive,
    }
  }
}
</script>