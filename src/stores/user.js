import axios from "axios";
import { defineStore } from "pinia";

export const useUsers = defineStore({
        id: "userList",
        state: () => ({
            user: 'none',
            createUser: false,
            logInU: {
                name: '',
                pass: ''
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
                }catch{
                    err => console.log(err);
                }
            },
            async logInUser (){
                try {
                    const name = this.logInU.name;
                    const pass = this.logInU.pass;
                    const url = "http://localhost:5000/user/"+String(name)+"/"+String(pass);
                    const dataGet = await axios.get(url);
                    return (this.user = await dataGet.data);
                } catch (error) {
                    console.log(err);
                }
            },
            logOut(){
                return (this.user = "none");
            }
        },
});
