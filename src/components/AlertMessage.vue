<template>
  <div class="alert w-48" >
    <div class="flex justify-between  px-2 py-5 text-white rounded" :class="bgColor">
      <div class="message">
          {{props.message}}
      </div>
      <span class="material-icons pr-1">close</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
const props = defineProps(["type", "message"])

const bgColor = computed(() => {
  return props.type === 'success' ? 'bg-green-300' : 'bg-red-300'
})

</script>

<style scoped>
.alert-success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
}

.alert {
  margin: 0 280px;
  position: absolute;
}

.material-icons {
  font-size: 19px;
}

</style>