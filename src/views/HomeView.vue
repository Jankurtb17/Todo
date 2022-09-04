<template>
  <div class="home">
    <h1 class="text-3xl font-bold sm:text-center md:text-center text-center mt-5 mb-5">Project List</h1>
    <div v-if="isLoading">
      <Loading 
        :item="getLength"
      />
      </div>
      <div v-else>
        <div v-for="project in projects" :key="project">
          <SingleProject
            :project="project"
            @openDialog="openModal"
            @deleteProj="deleteProjects"
          />
        </div>
      </div>

      <transition name="fade">
        <Teleport to=".modals" v-if="deleteModal">
          <Modal teleport="body" 
            title="Delete Project"
            message="Are you sure you want to delete this project?"
            type="warning"
            @closeModal="openModal"
          >
            <button class="rounded px-4 bg-white border border-slate-300 py-1" @click="openModal">Cancel</button>
            <button class="rounded px-4 bg-white border bg-red-700 text-white focus:bg-red-800 border-slate-300 py-1" @click="removeProject(deleteProjects)">Delete</button>
          </Modal>
        </Teleport>
      </transition>
      
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUpdated, ref, watchEffect }  from "vue";
import AlertMessage from "@/components/AlertMessage.vue";
import TaskList from "@/components/TaskList.vue";
import useProjects from "@/composables/Projects.ts";
import SingleProject from "@/components/SingleProject.vue";
import Loading from "@/components/LoadingComponent.vue";
import Modal from "@/components/ModalComponent.vue";
const { getData, deleteProject } = useProjects();
const projects = ref([] as Projects[]);
const isLoading = ref(false);
const deleteModal = ref(false);
const updateModal = ref(false);
const delId = ref();

type Projects = {
  id: string,
  title: string,
  description: string,
  completed: boolean
}

const openModal = () => {
  return deleteModal.value = !deleteModal.value
}

const updateDialog = () => {
  return updateModal.value = !updateModal.value;
}

const displayProjects = async () => {
  isLoading.value = true;
  projects.value = await getData();
  isLoading.value = false;
  deleteModal.value = false;
}

const deleteProjects = (id: any) => {
  delId.value = id;
}

const removeProject = async () => {
  try {
    await deleteProject(delId.value)
    displayProjects()
  } catch(e) {
    console.log(e.message)
  }
}

const getLength = computed(() => {
  return projects.value.length;
})

onMounted(() => {
  displayProjects();
})

</script>

<style scoped>

h1 {
  color: #314cb6;
}
.fade-enter-from {
  opacity: 0;
} 

.fade-enter-active {
  transition: all .5s ease-in;
  transform: translateX(30px);
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all .5s ease-out;
}
</style>