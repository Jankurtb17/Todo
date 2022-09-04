<template>
  <div class="alert" :class="props.type">
    <div class="flex justify-between">
      <div class="message">
        {{props.message}}
      </div>
      <div class="button">
        <Xmark/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Xmark } from '@heroicons/vue/24/solid';
const props = defineProps(["type", "message"])

</script>

<style>
.alert-success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
}

</style>