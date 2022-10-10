<template>
  <div class="alert grid justify-items-center" >
    <div class="flex justify-between lg:w-10/12 px-2 py-5 text-white rounded" :class="bgColor">
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
  return props.type === 'success' ? 'bg-green-800' : 'bg-red-300'
})

</script>

<style scoped>
.alert-success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
}

/* .alert {
  position: absolute;
} */

.material-icons {
  font-size: 19px;
}

</style>