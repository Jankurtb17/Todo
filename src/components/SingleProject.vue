<template>
  <div class="project py-5 px-10 rounded border ">
    <div class="actions flex justify-between">
      <h3 @click="showDetails = !showDetails" class="cursor-pointer">{{props.project.title}}</h3>
      <div>
        <span class="material-icons cursor-pointer px-1">done</span>
        <span class="material-icons cursor-pointer px-1">edit</span>
        <span class="material-icons cursor-pointer px-1" @click="deleteTask(props.project.id)">delete</span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{props.project.description}}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps(["project"])
const emit = defineEmits<{
  (e: "openDialog"): void
  (e: "deleteProj", id: any): void
}>()
const showDetails = ref(false);
const delProject = ref(false);
const completeTask = () => {
  
}

const deleteTask = (id: any) => {
  emit("openDialog")
  emit("deleteProj", id)
  console.log(id);
}

</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  border-left: 4px solid #e90074;
}

.material-icons {
  color: #bbb;
}

.material-icons:hover {
  color: #777;
}

</style>