<template>
  <div class="container mx-auto">
    <div class="upper-item">
      <h1 id="date" class="text-7xl text-red-400 font-bold sm:text-center md:text-center text-center mt-5">{{date}}</h1>
      <h1 id="date" class="text-3xl text-red-400 font-bold sm:text-center md:text-center text-center mb-1 ">{{day}}</h1>
      <h1 id="date" class="text-xl text-gray-400 font-bold sm:text-center md:text-center text-center ">{{month}} , {{year}}</h1>
    </div> 
    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 ">
    <ul class="flex ">
        <li>
            <router-link to="/task-list" class="block p-4 dark:hover:text-gray-300">Ongoing</router-link>
        </li>
        <li>
            <router-link to="/task-completed" class="block p-4 dark:hover:text-gray-300">Task Done</router-link>
        </li>
        <li>
            <router-link to="/create" class="block p-4 dark:hover:text-gray-300">Create Task</router-link>
        </li>
        <li>
            <router-link to="/settings" class="block p-4 dark:hover:text-gray-300">Settings</router-link>
        </li>
    </ul>
</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
const checklist = ref(true)
const task = ref(false)
const settings = ref(false) 
const emit = defineEmits<{
  (id: "clikedNav", name: string): string
}>()
const active = ref(false);
const tabMenus = [
  "Ongoing",
  "Task Done",
  "Create Task",
  "Settings"
]
const userSubscriptionKey = ref({
  active: ''
});

const checkIfClassActive = (key: any) => {
  if(userSubscriptionKey === key.active) {
    return 'active'
  }
}

const setActive = (key: any) => {
  
}

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

const getDate = new Date();
const day:string = getDate.toLocaleDateString(
  'default', {
    weekday: 'long'
  }
);
const date = getDate.getDate()
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = monthNames[getDate.getMonth()]
const year = getDate.getFullYear()



</script>

<style scoped>
.router-link-active {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 5px solid #F87171;
}

</style>