<template>
  <div class="grid grid-cols-12 mt-10 flex items-center">
    <div class="col-span-6">
      <h1 class="text-6xl font-bold text-indigo-500 mb-4">Error 404</h1>
      <p class="text-4xl font-medium text-gray-600 mb-4">Opps! Page not found</p>
      <router-link to="/login" class="bg-indigo-800 py-2 px-8 rounded text-white hover:bg-indigo-900 cursor-pointer">Redirect</router-link>
    </div>
    <div class="col-span-6">
      <img src="@/assets/notfound.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>