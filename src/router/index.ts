import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TaskForm from "@/components/TaskForm.vue";
import EditProject from "@/components/EditForm.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/project",
    name: "project",
    component: TaskForm,
  },
  {
    path: "/project/:id",
    name: "editProject",
    component: EditProject
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
