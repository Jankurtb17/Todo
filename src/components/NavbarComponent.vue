<template>
  <nav class="py-5 uppercase text-white ">
    <div class="container mx-auto flex justify-between font-bold w-full">
      <div>
        <router-link to="/" class="px-2">jfetm</router-link>
      </div>
      <div class="flex space-x-4">
        <router-link to="/" v-if="isLoggedIn">List</router-link>
        <router-link to="/project" v-if="isLoggedIn">Projects</router-link>
        <router-link to="/register" v-if="!isLoggedIn">Register</router-link>
        <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
        <button @click="logoutUser" v-if="isLoggedIn" class="uppercase pr-2">Sign Out</button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const isLoggedIn = ref(false);

let auth:any;

const logoutUser = () => {
  signOut(auth).then(() => {
    router.push("/login")
  })
}

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
})
  
</script>

<style scoped>
nav {
  background-color: #314cb6;
}

</style>