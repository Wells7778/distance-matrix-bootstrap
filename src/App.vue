<template>
  <div class="container-fluid">
    <NavBar />
    <div class="row my-5" />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
