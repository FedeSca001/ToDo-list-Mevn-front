import axios from "axios";
import { defineStore } from "pinia";

export const useUsers = defineStore({
        id: "userList",
        state: () => ({
            user: {},
            createUser: false,
            find: {
                name: '',
                password: ''
            }
        }),
        getters: {
        },
        actions: {
            switch() {
                this.createUser = !this.createUser;
                console.log(this.createUser);
            },
            async getUsers(){
                try {
                    const url ="http://localhost:5000/todo";
                    const data = await axios.get(url);
                    this.user = await data.json();
                    console.log(this.user)
                }catch{
                    err => console.log(err);
                }
            }
        },
});
