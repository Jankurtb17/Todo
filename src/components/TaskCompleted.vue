<template>
  <div v-if="isLoading" class="mt-5 grid justify-items-center">
    <LoadingComponent />
  </div>
  <div v-else class="mt-3">
    <div class="ongoing mx-20 sm:mx-2 sm:mb-4">
      <TransitionGroup name="fade" tag="p">
        <span class="list-items grid justify-items-center" v-for="project in projects" :key="project._id">
          <SingleProject
            v-if="project.completed && project.author === store.getUser()"
            :project="project"
          />
        </span>
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useProjects from "@/composables/Projects"
import { onMounted, ref } from "vue";
import LoadingComponent from "./LoadingComponent.vue";
import SingleProject from "./SingleProject.vue";
import { useStore } from "@/store/index"
const store = useStore();
const { getData } = useProjects();
const isLoading = ref(false);

type Projects = {
  _id?: string,
  title: string,
  description: string,
  author: string,
  completed: boolean
}

let projects = ref([] as Projects[])

const displyData = async () => {
  isLoading.value = true;
  projects.value = await getData().
  catch((err) => {
    console.log(err)
  }).
  finally(() => {
    isLoading.value = false;
  })
}

onMounted(() => {
  displyData();
})

</script>