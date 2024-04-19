import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/HomePage.vue"),
  },
  // {
  //   path: "/dashboard",
  //   component: () => import("../pages/DashboardView.vue"),
  // },
  { path: "/about", component: () => import("../pages/AboutPage.vue") },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/NotFoundPage.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
