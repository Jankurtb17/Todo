<template>
  <Navbar v-if="!$route.meta.hideNavbar"/>  
  <div class="app">
    <div class="container mx-auto">
      <div class="upper-item " v-if="!$route.meta.hideMainLogo">
        <h1 id="date" class="text-7xl text-red-400 font-bold sm:text-center md:text-center text-center mt-5">{{date}}</h1>
        <h1 id="date" class="text-3xl text-red-400 font-bold sm:text-center md:text-center text-center mb-1 ">{{day}}</h1>
        <h1 id="date" class="text-xl text-gray-400 font-bold sm:text-center md:text-center text-center ">{{month}} , {{year}}</h1>
        <TabMenu/>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TabMenu from "./components/TabMenu.vue";
import Navbar from "@/components/NavbarComponent.vue"

const getDate = new Date();
const day:string = getDate.toLocaleDateString(
  'default', {
    weekday: 'long'
  }
);
const date = getDate.getDate()
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = monthNames[getDate.getMonth()]
const year = getDate.getFullYear()

</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Condensed', sans-serif;
}
</style>