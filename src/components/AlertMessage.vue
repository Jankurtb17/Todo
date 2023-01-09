<template>
  <!-- <div class="alert grid justify-items-center" >
    <div class="flex justify-between lg:w-10/12 px-2 py-5 text-white rounded" :class="bgColor">
      <div class="message">
          {{props.message}}
      </div>
      <span class="material-icons pr-1">close</span>
    </div>
  </div> -->
  <div
    id="alert-3"
    class="flex p-4 mb-4 text-green-700 bg-green-100 rounded-lg"
    role="alert"
    v-if="success"
  >
    <div class="ml-3 text-sm font-medium">
      {{ props.message }}
    </div>
    <button
      type="button"
      class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8"
      data-dismiss-target="#alert-3"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
  <div
    id="alert-2"
    class="flex p-4 mb-4 text-red-700 bg-red-100 rounded-lg"
    role="alert"
    v-if="danger"
  >
    <div class="ml-3 text-sm font-medium">
      {{ props.message }}
    </div>
    <button
      type="button"
      class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8"
      data-dismiss-target="#alert-2"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <svg
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
const props = defineProps(["success", "message", "danger"]);
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
