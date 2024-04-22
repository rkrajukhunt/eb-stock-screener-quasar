import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/manage-stocks",
  },
  {
    path: "/manage-stocks",
    component: () => import("../pages/ManageStockPage.vue"),
  },
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
