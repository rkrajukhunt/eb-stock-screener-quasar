const routes = [
  { path: "/", component: () => import("../pages/HomeView.vue") },
  { path: "/about", component: () => import("../pages/AboutView.vue") },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/NotFound.vue"),
  },
];

export default routes;
