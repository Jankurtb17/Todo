<template>
  <nav class="py-5 uppercase text-white">
    <div class="container mx-auto flex justify-between font-bold">
      <div>
        <router-link to="/" class="px-2">jfetm</router-link>
      </div>
      <div>
        <router-link to="/" class="px-4">List</router-link>
        <router-link to="/project">Projects</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #314cb6;
}

</style>