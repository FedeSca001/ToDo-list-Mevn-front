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
                },
                async deletItem (idItem){
                        try{
                                const url = "http://localhost:5000/todo/delete/"+ idItem;
                                const delet = await axios.delete(url);
                                this.getToDoList();
                        } catch{
                                err=> console.log(err);
                        }
                }
        },
});
