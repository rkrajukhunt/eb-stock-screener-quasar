import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/HomeView.vue"),
    },
    {
      path: "/dashboard",
      component: () => import("../pages/DashboardView.vue"),
    },
    { path: "/about", component: () => import("../pages/AboutView.vue") },
    {
      path: "/:catchAll(.*)*",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});
