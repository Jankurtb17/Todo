<template>
  <div class="container mx-auto">
    <transition name="fade">
      <AlertMessage :type="type" :message="message" />
    </transition>
    <h1 class="text-3xl font-bold text-gray-500 text-center mt-3 mb-5"></h1>
    <div class="form-section">
      <div class="sm:px-2">
        <form @submit.prevent="updateProjects" class="grid">
          <input
            type="text"
            v-model="form.title"
            class="mb-3 sm:w-full md:w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            @keyup="validateInput"
            placeholder="Title"
          />
          <span v-if="titleErr">{{ titleMsg }}</span>
          <textarea
            v-model="form.description"
            class="mb-5 sm:w-full md:w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            @keyup="validateInput"
            placeholder="Description"
          />
          <span v-if="descErr">{{ descMsg }}</span>
          <button class="button sm:w-full md:w-full rounded py-2">
            Update Task
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AlertMessage from "./AlertMessage.vue";
import useProjects from "@/composables/Projects";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/store/index";
const store = useStore();
const { getProject, updateProject } = useProjects();
const router = useRouter();
const route = useRoute();
const alert = ref(false);
const message = ref();
const type = ref();
const titleErr = ref(false);
const titleMsg = ref("");
const descErr = ref(false);
const descMsg = ref("");
const props = defineProps(["id"]);
interface FormType {
  title: string;
  description: string;
  completed: boolean;
}
let form = reactive<FormType>({
  title: "",
  description: "",
  completed: false,
});

const updateProjects = async () => {
  if (titleErr.value === true || descErr.value == true) {
    return;
  } else {
    try {
      await updateProject(
        props.id,
        form.title,
        form.description,
        store.getUser(),
        form.completed
      );
      alert.value = true;
      message.value = "Successfully updated!";
      type.value = "success";
      setTimeout(() => {
        router.push("/task-list");
      }, 3000);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  }
};

const validateInput = () => {
  if (form.title === "" || undefined) {
    titleErr.value = true;
    titleMsg.value = "Title field is required";
  } else if (form.description === "" || undefined) {
    descErr.value = true;
    descMsg.value = "Description field is required";
  } else {
    titleErr.value = false;
    descErr.value = false;
  }
};

const loadData = async () => {
  const project = await getProject(route.params.id);
  project.map((item: any) => {
    form.title = item.title;
    form.description = item.description;
    form.completed = item.completed;
  });
  console.log(project);
  return project;
};

onMounted(() => {
  loadData();
});
</script>

<style scoped>
.button {
  background-color: #f1a661;
  color: white;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
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
