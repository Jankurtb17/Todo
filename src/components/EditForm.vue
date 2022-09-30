<template>
   <transition name="fade">
    <AlertMessage 
      :type="type"
      :message="message"
      v-if="alert"/>
  </transition>
  <h1 class="text-3xl font-bold text-center mt-5 mb-5">Edit Project </h1> 
  <div class="form-section">
    <div class="container sm:px-2">
      <form @submit.prevent="updateProjects">
        <h1 class="text-sm uppercase">Title</h1>
        <input 
          type="text" 
          v-model="form.title" 
          class="mb-5 w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          @keyup="validateInput"
        />
        <span v-if="titleErr" class="mt-5">{{titleMsg}}</span>
        <h1 class="text-sm uppercase">Description</h1>
        <textarea 
          v-model="form.description" 
          class="mb-5 w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          @keyup="validateInput"  
        />
        <span v-if="descErr">{{descMsg}}</span>
        <button class="button w-full rounded py-2">Update Task</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AlertMessage from "./AlertMessage.vue";
import useProjects from "@/composables/Projects";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
const { getProject, updateProject } = useProjects();
const router = useRouter();
const route = useRoute();
const alert = ref(false);
const message = ref();
const type = ref();
const titleErr = ref(false)
const titleMsg = ref("")
const descErr = ref(false)
const descMsg = ref("")

interface FormType {
  title: string,
  description: string
}
let form = reactive<FormType>({
  title: "",
  description: "",
});

const updateProjects = async () => {
  if(titleErr.value === true ||  descErr.value == true) {
    return;
  } else {
    try {
      await updateProject(
        route.params.id,
        form.title,
        form.description
      )
      alert.value = true;
      message.value = "Successfully updated!";
      type.value = "success"
      setTimeout(() => {
        router.push("/")
      }, 3000)
    } catch (error) {
      if(error) {
        console.log(error)
      }
    }
  }
}

const validateInput = () => {
  if(form.title === "" || undefined) {
     titleErr.value = true;
     titleMsg.value = "Title field is required"
  } else if(form.description === "" || undefined) {
    descErr.value = true;
    descMsg.value = "Description field is required"
  } else {
    titleErr.value = false;
    descErr.value = false;
  }
}

const loadData = async () => {
  const project = await getProject(
    route.params.id
  )
  project.map((item: any) => {
    form.title = item.title
    form.description = item.description
  })
  console.log(project)
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

.fade-enter-to,
.fade-leave-from {
  opacity: 1
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5 ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}


</style>