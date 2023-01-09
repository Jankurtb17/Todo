<template>
   <div class="home">
    <AppNavbar />
    <TabMenu />
    <div class="lower-item ">
      <router-view />
      <!-- <div v-if="isLoading" class="mt-5 grid justify-items-center">
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
      </div> -->
    </div>
  </div>

</template>

<script lang="ts" setup>
import AppNavbar from '@/components/AppNavbar.vue';
import TabMenu from '@/components/TabMenu.vue';
</script>