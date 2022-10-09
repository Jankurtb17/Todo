<template>
  <div class=" project shadow py-5 px-10 ml-5 mr-5 mt-3 rounded border w-10/12" >
    <div class="actions flex justify-between">
      <h3 @click="showDetails = !showDetails" class="cursor-pointer">{{props.project.title}}</h3>
      <div v-if="!props.project.completed">
        <span class="material-icons cursor-pointer done px-1 text-lime-600 hover:text-lime-700" @click="completeTask(props.project._id)">done</span>
        <span class="material-icons cursor-pointer edit px-1 text-yellow-500 hover:text-yellow-600"><router-link :to="{ name: 'editProject', params: {id: props.project._id}}">edit</router-link></span>
        <span class="material-icons cursor-pointer delete px-1 text-red-600 hover:text-red-800" @click="deleteTask(props.project._id)">delete </span>
      </div>
      <div v-if="props.project.completed">
        <span class="material-icons done px-1 text-lime-600 hover:text-lime-700" >check_circle</span>
      </div>
    </div>
    <transition name="fade">
      <div class="details " v-if="showDetails">
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

const completeTask = (_id: any) => {
  completed.value = true
  const task = {
    _id: _id,
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