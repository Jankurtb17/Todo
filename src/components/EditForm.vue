<template>
  <h1 class="text-3xl font-bold text-center mt-5 mb-5">Edit Project </h1> 
  <div class="form-section">
    <div class="container sm:px-2">
      <form @submit.prevent>
        <h1 class="text-sm uppercase">Title</h1>
        <input type="text" v-model="form.title" class="mb-5 w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
        <h1 class="text-sm uppercase">Description</h1>
        <textarea v-model="form.description" class="mb-5 w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
        <button class="button w-full rounded py-2" @click="updateProjects">Update Task</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useProjects from "@/composables/Projects";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
const { getProject, updateProject } = useProjects();
const router = useRouter();
const route = useRoute();

interface Task {
  name: string,
  description: string
}
const task = ref([] as Task[]);
let form = reactive({
  title: "",
  description: "",
});

const updateProjects = async (id:any) => {
  try {
    await updateProject(
      route.params.id,
      form.title,
      form.description
    )
    router.push("/")
  } catch (error) {
    if(error) {
      console.log(error)
    }
  }
}

const loadData = async () => {
  const project = await getProject(
    route.params.id
  )
  form.title = project.title
  form.description = project.description
  return project;
}

onMounted(() => {
  loadData();
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