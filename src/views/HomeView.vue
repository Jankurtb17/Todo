<template>
  <!-- <div class="home">
    <Navbar />
    <TabMenu /> -->
    <div class="lower-item ">
      <div v-if="isLoading" class="mt-5 grid justify-items-center">
          <Loading />
      </div>
      <div v-else>
        <TransitionGroup name="fade" tag="p">
          <span v-for="project in projects" :key="project._id">
            <SingleProject
              v-if="!project.completed && project.author === store.getUser()"
              :project="project"
              @openDialog="openModal"
              @deleteProj="deleteProjects"
              @task="completeTask"
            />
          </span>
        </TransitionGroup>
      </div>
    </div>
<!-- 
    <transition name="fade">
      <div v-if="deleteModal">
        <Teleport to=".modals">
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
      </div>
    </transition>
  </div> -->
</template>

<script lang="ts" setup>
import TabMenu from "@/components/TabMenu.vue";
import Navbar from "@/components/AppNavbar.vue";
import { computed, onMounted, ref }  from "vue";
import Loading from "@/components/LoadingComponent.vue";
import useProjects from "@/composables/Projects";
import SingleProject from "@/components/SingleProject.vue";
import Modal from "@/components/ModalComponent.vue";
import AlertMessage from "@/components/AlertMessage.vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store/index"
const store = useStore()
const { getData, deleteProject, updateStatus } = useProjects();
const router = useRouter();
const projects = ref([] as Projects[]);
const isLoading = ref(false);
const deleteModal = ref(false);
const updateModal = ref(false);
const delId = ref();
let completed = ref(false);

type Projects = {
  _id?: string,
  title: string,
  description: string,
  author: string,
  completed: boolean
}

const openModal = () => {
  return deleteModal.value = !deleteModal.value
}

const updateDialog = () => {
  return updateModal.value = !updateModal.value;
}

const completeTask = async (task: any) => {
  await updateStatus(
    task._id, 
    task.title,
    task.description,
    task.author,
    task.completed
  )
  completed.value = true;
  router.push('/task-completed')
} 

const displayProjects = async () => {
  isLoading.value = true;
    projects.value = await getData();
  isLoading.value = false;
  deleteModal.value = false;
}

const deleteProjects = (id: any) => {
  deleteModal.value = true;
  delId.value = id;
  console.log(deleteModal.value)
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
#date {
  font-family: 'Roboto ', sans-serif;
}


.fade-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}

.fade-enter-active {
  transition: all 0.4s ease;
}

.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.fade-leave-active {
  transition: all 0.4s ease;
}
</style>