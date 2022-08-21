<template>
  <Navbar />  
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
.app {
  margin: auto 550px;
}
</style>