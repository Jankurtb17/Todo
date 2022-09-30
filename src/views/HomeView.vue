<template>
  <div class="home">
    <h1 class="text-3xl font-bold sm:text-center md:text-center text-center mt-5 mb-5">{{day}}</h1>
    <h1 class="text-3xl font-bold sm:text-center md:text-center text-center mt-5 mb-5">{{date}}</h1>
    <div v-if="isLoading">
      <Loading 
        :item="getLength"
      />
    </div>
    <div v-else>
      <div class="projects-ongoing">
        <div v-if="projects.length">
          <div class="ongoing mx-20 sm:mx-2 sm:mb-4">
            <TransitionGroup name="fade" tag="p">
              <p class="uppercase text-sm font-bold text-gray-400 tracking-wide">Ongoing</p>
              <span class="list-items" v-for="project in projects" :key="project._id">
                <SingleProject
                  v-if="!project.completed"
                  :project="project"
                  @openDialog="openModal"
                  @deleteProj="deleteProjects"
                  @task="completeTask"
                />
              </span>
            </TransitionGroup>
          </div>
          <div class="completed mx-20 sm:mx-2">
            <TransitionGroup name="fade" tag="p">
              <p class="uppercase text-sm font-bold text-gray-400 tracking-wide">Completed</p>
              <span class="list-items line-through" v-for="project in projects" :key="project._id">
                  <SingleProject
                    v-if="project.completed"
                    :project="project"
                    @openDialog="openModal"
                    @deleteProj="deleteProjects"
                    @task="completeTask"
                  />
              </span>
            </TransitionGroup>
          </div>
        </div>
        <div v-else>
          <p class="text-gray-400">Wohooo, nothing left on task</p>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="deleteModal">
        <Teleport to=".modals" >
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
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref }  from "vue";
import useProjects from "@/composables/Projects";
import SingleProject from "@/components/SingleProject.vue";
import Loading from "@/components/LoadingComponent.vue";
import Modal from "@/components/ModalComponent.vue";
import AlertMessage from "@/components/AlertMessage.vue";
const { getData, deleteProject, updateStatus } = useProjects();
const projects = ref([] as Projects[]);
const isLoading = ref(false);
const deleteModal = ref(false);
const updateModal = ref(false);
const delId = ref();
let completed = ref(false);

const getDate = new Date();
const day = getDate.toLocaleDateString(
  'default', {
    weekday: 'long'
  }
);


type Projects = {
  _id?: string,
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

const completeTask = async (task: any) => {
  isLoading.value = true
  await updateStatus(
    task._id, 
    task.title,
    task.description,
    task.completed
  )
  completed.value = true;
  isLoading.value = false;
  displayProjects() 
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
h1 {
  color: #314cb6;
}

.ongoing {
  min-height: 40vh;
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