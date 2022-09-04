<template>
  <h1 class="text-3xl font-bold text-center mt-5 mb-5">Create Project </h1> 
  <div class="form-section">
    <div class="container mx-auto">
      <form @submit.prevent>
        <h1 class="text-sm uppercase">Title</h1>
        <input type="text" v-model="form.title" class="mb-5 sm:w-full md:w-full w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
        <h1 class="text-sm uppercase">Description</h1>
        <textarea v-model="form.description" class="mb-5 w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
        <button class="button w-full rounded py-2" @click="submitTask">Add Task</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useProjects from "@/composables/Projects";
import { reactive, ref, computed } from "vue";
import { useRouter } from 'vue-router'
import { v4 as uuidv4 } from "uuid";
const { addProjects } = useProjects();
const router = useRouter();

interface Task {
  name: string,
  description: string
}
const task = ref([] as Task[]);
const form = reactive({
  title: "",
  description: "",
  completed: false
});

const submitTask = async () => {
  if (form.title === undefined) {
    return;
  }
  try {
    await addProjects(
      uuidv4,
      form.title,
      form.description,
      form.completed
    )
    router.push("/")
  } catch (e) {
    console.log(e)
  }
};

const length = computed(() => {
  return task.value.length < 1 ? false : true;
})

</script>

<style scoped>
h1 {
  color: #314cb6;
}
.button {
  background-color: #0a81d1;
  color: white;
}
.fade-enter-active {
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}
</style>