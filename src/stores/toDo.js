import axios from "axios";
import { defineStore } from "pinia";

export const useToDoList = defineStore({
        id: "toDoList",
        state: () => ({
                list: [],
        }),
        actions: {
                async getToDoList (){
                        const url = "http://localhost:5000/todo";
                        const dataGet = await axios.get(url);
                        this.list = await dataGet.data;
                },
                async deletItem (idItem){
                        try{
                                const url = "http://localhost:5000/todo/delete/"+ String(idItem);
                                const delet = await axios.delete(url);
                                this.getToDoList();
                        } catch{
                                err=> console.log(err);
                        }
                },
                async addItemTask (tit, tex, prior){
                        const data = {
                                title: tit,
                                text: tex,
                                priority: prior,
                                status: false,
                        };
                        const url = "http://localhost:5000/todo/item";
                        const post = await axios.post(url, data);
                        this.getToDoList();
                }
        },
});