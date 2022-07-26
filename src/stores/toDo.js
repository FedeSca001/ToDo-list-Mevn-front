import { defineStore } from "pinia";

export const useToDoList = defineStore({
        id: "toDoList",
        state: () => ({
                list: [],
        }),
        getters: {
                doubleCount: (state) => state.list * 2,
        },
        actions: {
                increment() {
                        this.list++;
                },
        },
});
