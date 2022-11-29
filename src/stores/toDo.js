import axios from "axios";
import { defineStore } from "pinia";

export const useToDoList = defineStore({
        id: "toDoList",
        state: () => ({
                list: [],
        }),
        actions: {
                async getToDoList (){
                        const url = "https://to-do-list-nbcl.onrender.comtodo";
                        const dataGet = await axios.get(url);
                        this.list = await dataGet.data;
                        console.log(this.list);
                },
                async deletItem (idItem){
                        try{
                                const url = "https://to-do-list-nbcl.onrender.comtodo/delete/"+ String(idItem);
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
                        const url = "https://to-do-list-nbcl.onrender.comtodo/item";
                        const post = await axios.post(url, data);
                        this.getToDoList();
                }
        },
});