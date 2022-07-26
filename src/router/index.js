import { createRouter, createWebHistory } from 'vue-router';
import ListTasks from "../views/ListTasks/ListTasks.vue";

const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
                {
                        path: "/",
                        name: "main",
                        component: ListTasks,
                },
                {
                        path: "/login",
                        name: "login",
                        component: () => import("../views/LogIn/LogIn.vue"),
                },
                {
                        path: "/createuser",
                        name: "createuser",
                        component: ()=> import('../views/CreateUser/CreateUser.vue')
                }
        ],
});

export default router;
