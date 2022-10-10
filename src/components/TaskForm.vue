<template>
  <transition name="fade">
    <AlertMessage 
      :type="type"
      :message="message"
      v-if="alert"/>
  </transition>
  <!-- {{displayUser}} -->
  <h1 class="text-3xl text-gray-500 font-bold text-center mt-5 mb-5">Create Task </h1> 
  <div class="form-section">
    <div class="container sm:px-2">
      <form @submit.prevent class="grid justify-items-center">
        <input type="text" v-model="form.title" class="mb-5 sm:w-full md:w-full lg:w-10/12 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Title"/>
        <textarea placeholder="Description" v-model="form.description" class="mb-5 sm:w-full md:w-full lg:w-10/12 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
        <button class="button lg:w-10/12 sm:w-full md:w-full rounded py-2" @click="submitTask">Add Task</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AlertMessage from "./AlertMessage.vue";
import useProjects from "@/composables/Projects";
import { useStore } from "@/store/index"
import { reactive, ref, computed, onMounted } from "vue";
import { useRouter } from 'vue-router'
const store = useStore()
const { addProjects } = useProjects();
const router = useRouter();
const alert = ref(false);
const message = ref();
const type = ref();
interface Task {
  name: string,
  description: string
  author: string
}
const task = ref([] as Task[]);
const form = reactive({
  title: "",
  description: "",
  author: "",
  completed: false
});

const rules = {
  title: [
    {
      required: true,
      message: "Please enter a title",
      trigger: "blur"
    }
  ],
  description: [
    {
      required: true,
      message: "Please enter a description",
      trigger: "blur"
    }
  ],
}

const submitTask = async () => {
  if (form.title === "" && form.description === "") {
    return;
  } else {
    try {
      await addProjects(
        form.title,
        form.description,
        store.getUser(),
        form.completed
      )
      alert.value = true
      message.value = "Successfully added"
      type.value = "success"
      console.log(form)
      setTimeout(() => {
        router.push("/")
        alert.value = false
      }, 3000)
    } catch (error) {
      alert.value = true
      message.value = error.message
      type.value = "danger"
      setTimeout(() => {
        alert.value = false
      }, 3000)
      console.log(error)
    }
  }
};

const length = computed(() => {
  return task.value.length < 1 ? false : true;
})

onMounted(() => {
  console.log(store.getUser())
})

</script>

<style scoped>
/* h1 {
  color: #314cb6;
} */
.button {
  background-color: #749F82;
  color: white;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.fade-enter-to {
  opacity: 1;
}


.fade-leave-from {
  opacity: 1;
}



</style>