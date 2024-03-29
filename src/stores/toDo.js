import axios from "axios";
import { defineStore } from "pinia";

export const useToDoList = defineStore({
        id: "toDoList",
        state: () => ({
                list: [],
        }),
        actions: {
                async getToDoList (){
                        const url =  "https://to-do-list-nbcl.onrender.com/todo";//"http://localhost:5050/todo"
                        const dataGet = await axios.get(url);
                        this.list = await dataGet.data;
                },
                async deletItem (idItem){
                        try{
                                const url =  "https://to-do-list-nbcl.onrender.com/todo/delete/"+ String(idItem);//"http://localhost:5050/todo/delete"
                                const delet = await axios.delete(url);
                                this.getToDoList();
                        } catch{
                                resizeBy.send(err)
                        }
                },
                async addItemTask (tit, tex, prior,user){
                        const data = {
                                title: tit,
                                text: tex,
                                priority: prior,
                                status: false,
                                user: user
                        };
                        const url =  "https://to-do-list-nbcl.onrender.com/todo/item";//"http://localhost:5050/todo/item"
                        const post = await axios.post(url, data);
                        this.getToDoList();
                        console.log(user);
                }
        },
});