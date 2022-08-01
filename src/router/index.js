import { createRouter, createWebHistory } from 'vue-router';
import ListTasks from "../views/ListTasks/ListTasks.vue";

const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
                {
                        path: "/",
                        name: "main",
                        component: ListTasks,
                }
        ],
});

export default router;
