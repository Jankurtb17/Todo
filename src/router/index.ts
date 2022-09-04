import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TaskForm from "@/components/TaskForm.vue";
import EditProject from "@/components/EditForm.vue";
import SignIn from "@/views/SignIn.vue";
import Register from "@/views/Register.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true
    }
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
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: SignIn
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if(to.matched.some((record:any) => record.meta.requiresAuth)) {
    if(await getCurrentUser) {
      next();
    } else {
      next("/login")
    }
  } else {
    next();
  }
});


export default router;
