import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/project",
    name: "project",
    component: () => import("@/components/TaskForm.vue"),
  },
  {
    path: "/project/:id",
    name: "editProject",
    component: () => import("@/components/EditForm.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
    meta: {
      hideNavbar: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/SignIn.vue"),
    meta: {
      hideNavbar: true
    }
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
