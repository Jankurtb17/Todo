<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <div class="flex px-4 py-4">
        <span class="material-icons text-red-500 pr-3 py-1">{{props.type}}</span> 
        <div>
          <h1 class="font-medium tracking-wide text-xl">{{props.title}}</h1>
          <p>{{props.message}}</p>
        </div>
      </div>
      <div class="flex justify-end bg-gray-100 space-x-2 mt-5 py-2 px-1 rounded-lg">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["type", "title", "message"])
const emit = defineEmits<{
  (e: "closeModal"): void
}>()

const closeModal = () => {
  emit("closeModal");
}

</script>

<style scoped>
.modal {
  width: 550px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
}

.backdrop {
  top:0;
  position: fixed;
  background:  rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>