<template>
  <div >
    <ul class="grid justify-items-center grid-flow-col mt-10 gap-4 " id="tabMenu">
      <router-link to="/" class="px-4"> <a> <span class="material-icons">checklist</span></a></router-link>
      <router-link to="/task-completed" class="px-4"> <span class="material-icons">task_alt</span></router-link>
      <router-link to="/project" class="px-4"> <span class="material-icons">post_add</span></router-link>
      <li class="px-4"> <span class="material-icons" @click="getNav('settings')">settings</span></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue"
const checklist = ref(true)
const task = ref(false)
const settings = ref(false) 
const emit = defineEmits<{
  (id: "clikedNav", name: string): string
}>()

const getNav = (item:string) => {
  if(item === "checklist") {
    emit("clikedNav", "checkList")
    console.log("click check")
  } else if(item === "task") {
    emit("clikedNav", "task")
    console.log("click task")
  } else if(item === "settings") {
    emit("clikedNav", "settings")
    console.log("click settings")
  }
}


</script>

<style scoped>
.router-link-active {
  color: #F87171;
  border-bottom: 5px solid #F87171;
}
</style>