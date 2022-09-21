<template>
  <Navbar v-if="!$route.meta.hideNavbar"/>  
  <div class="app">
    <div class="container mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "@/components/NavbarComponent.vue"
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Condensed', sans-serif;
}
</style>