import { defineStore } from "pinia";

export const useUsers = defineStore({
        id: "userList",
        state: () => ({
                users: [],
        }),
        getters: {
                doubleCount: (state) => state.users * 2,
        },
        actions: {
                increment() {
                        this.users++;
                },
        },
});
