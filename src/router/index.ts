import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    components: {
      MainContent: () => import("@/base/BaseLayout.vue"),
    },
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/task-list",
        name: "taskk-list",
        component: () => import("@/components/TaskList.vue"),
      },
      {
        path: "/create",
        name: "project",
        component: () => import("@/components/TaskForm.vue"),
      },
      {
        path: "/task-completed",
        name: "task-completed",
        component: () => import("@/components/TaskCompleted.vue"),
      },
      {
        path: "/:id",
        name: "task-edit",
        component: () => import("@/components/EditForm.vue"),
        props: true,
      },
    ]
  },
  {
    path: "/register",
    name: "register",
    components: {
      LoginContent: () => import("@/views/Register.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      LoginContent: () => import("@/views/SignIn.vue"),
    },
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: "/login",
  },
  {
    path: '*',
    name: 'catchAll',
    components: {
      LoginContent: () => import("@/views/SignIn.vue"),
    },
 }
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

router.beforeEach(async (to, _from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(await getCurrentUser()) {
      next();
    } else {
      next("/login")
    }
  } else {
    next();
  }
});


export default router;
