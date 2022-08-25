import { createRouter, createWebHistory } from 'vue-router';
import welcome from "../views/Welcome/Welcome.vue"
const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
                {
                        path: "/",
                        name: "main",
                        component: welcome,
                },
                {
                        path: "/allTasks",
                        component: ()=> import("../views/ListTasks/ListTasks.vue")
                }
        ],
});

export default router;
