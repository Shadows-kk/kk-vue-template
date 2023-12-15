import localCache from "@/plugins/cache";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/",
      name: "layout",
      component: () => import("../layout/layout.vue"),
      redirect: "/formModule",
      children: [
        {
          path: "formModule",
          name: "formModule",
          component: () => import("../views/formModule/index.vue"),
          meta: {
            module: "formModule",
          },
        },
        {
          path: "3DModule",
          name: "3DModule",
          component: () => import("../views/3DModule/index.vue"),
          meta: {
            module: "3DModule",
          },
        },
        {
          path: "echartsModule",
          name: "echartsModule",
          component: () => import("../views/echartsModule/index.vue"),
          meta: {
            module: "echartsModule",
          },
        },
      ],
    },
  ],
});
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("kk-template-token");
    if (!token) {
      return "/login";
    }
  }
});

export default router;
