<template>
  <div class="container-fluid">
    <NavBar />
    <div class="row my-5" />
    <router-view />
  </div>
</template>

<script>
import { provide } from 'vue'
import NavBar from './components/NavBar.vue'
import store from './store'

export default {
  components: {
    NavBar
  },
  setup() {
    provide('mapStore', store)
  }
}
</script>
