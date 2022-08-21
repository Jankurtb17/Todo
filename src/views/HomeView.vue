<template>
  <div class="home">
    <h1 class="text-3xl font-bold text-center mt-5 mb-5">Project List</h1>
      <div v-if="isLoading">
        <Loading />
      </div>
      <div v-else>
        <div v-for="project in projects" :key="project">
          <SingleProject
            :project="project"
            @openDialog="openModal"
          />
        </div>
      </div>
    <Teleport to=".modals" v-if="deleteModal">
      <Modal teleport="body" @closeModal="openModal">
        <div class="flex px-4 py-4">
          <span class="material-icons text-red-500 pr-3">warning</span> 
          <div>
            <h1 class="font-medium tracking-wide text-xl">Delete Project</h1>
            <p>Are you sure you want to delete this project ?</p>
          </div>
        </div>
        <div class="flex justify-end bg-gray-100 space-x-2 mt-5 py-2 px-1 rounded">
          <button class="rounded px-4 bg-white border border-slate-300 py-1" @click="openModal">Cancel</button>
          <button class="rounded px-4 bg-white border bg-red-700 text-white focus:bg-red-800 border-slate-300 py-1">Delete</button>
        </div>
      </Modal>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref }  from "vue";
import TaskList from "@/components/TaskList.vue";
import useProjects from "@/composables/Projects.ts";
import SingleProject from "@/components/SingleProject.vue";
import Loading from "@/components/LoadingComponent.vue";
import Modal from "@/components/ModalComponent.vue";
const { getData, deleteProject } = useProjects();
const projects = ref([] as Projects[])
const isLoading = ref(false)
const deleteModal = ref(false);

type Projects = {
  id: string,
  title: string,
  description: string,
  completed: boolean
}

const openModal = () => {
  return deleteModal.value = !deleteModal.value
}

const displayProjects = async () => {
  isLoading.value = true;
  projects.value = await getData();
  isLoading.value = false;
}

const deleteProjects = async (id: any) => {
  try {
    await deleteProject(id)
  } catch (e) {
    if(e === typeof("string"))
    {
      
    }
  }

}

onMounted(() => {
  displayProjects();
})

</script>
