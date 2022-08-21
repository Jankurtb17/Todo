<template>
  <div v-for="task in props.task" :key="task">
    <div class="bg-gray-300 py-5 px-5 rounded mb-3 text-white">
        {{task}}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["task"])

</script>
