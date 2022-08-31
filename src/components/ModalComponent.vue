<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

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