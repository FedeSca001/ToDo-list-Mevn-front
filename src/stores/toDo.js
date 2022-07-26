import axios from "axios";
import { defineStore } from "pinia";

export const useToDoList = defineStore({
        id: "toDoList",
        state: () => ({
                list: [],
        }),
        actions: {
                increment() {
                        this.list++;
                },
                async getToDoList (){
                        const url = "http://localhost:5000/todo";
                        const dataGet = await axios.get(url);
                        this.list = await dataGet.data;
                }
        },
});
