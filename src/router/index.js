import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView/MainView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LogIn/LogIn.vue"),
    },
  ],
});

export default router;
