<template>
  <div class="project shadow py-5 px-10 mt-3 rounded border " >
    <div class="actions flex justify-between">
      <h3 @click="showDetails = !showDetails" class="cursor-pointer">{{props.project.title}}</h3>
      <div>
        <span class="material-icons cursor-pointer done px-1 text-lime-600 hover:text-lime-700" @click="completeTask(props.project.id)">done</span>
        <span class="material-icons cursor-pointer edit px-1 text-yellow-500 hover:text-yellow-600"><router-link :to="{ name: 'editProject', params: {id: props.project.id}}">edit</router-link></span>
        <span class="material-icons cursor-pointer delete px-1 text-red-600 hover:text-red-800" @click="deleteTask(props.project.id)">delete</span>
      </div>
    </div>
    <transition name="fade">
      <div class="details" v-if="showDetails">
        <p>{{props.project.description}}</p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>  
import { ref } from "vue";
const props = defineProps(["project", "id"])
const emit = defineEmits<{
  (e: "openDialog"): void
  (e: "deleteProj", id: any): boolean
  (e: "updateDialog", id: any): boolean
  (e: "updateStatus", id: boolean): boolean
  (e: "task", task: any): any
}>()
const showDetails = ref(false);
const completed = ref(false);

const completeTask = (id: any) => {
  completed.value = true
  const task = {
    id: id,
    title: props.project.title,
    description: props.project.description,
    completed: completed.value
  }
  emit("task", task);
}

const editTask = (id: any) => {
  emit("updateDialog", id)
}

const deleteTask = (id: any) => {
  emit("openDialog")
  emit("deleteProj", id)
}

</script>

<style>
.fade-enter-from {
  opacity: 0;
} 

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all .5s ease-in-out;
}


</style>