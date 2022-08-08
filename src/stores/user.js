import axios from "axios";
import { defineStore } from "pinia";

export const useUsers = defineStore({
        id: "userList",
        state: () => ({
            user: 'none',//Add local storage 
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
            async logInUser (){
                try {
                    const name = this.logInU.name;
                    const pass = this.logInU.pass;
                    const url = "http://localhost:5000/user/"+String(name)+"/"+String(pass);
                    const dataGet = await axios.get(url);
                    console.log(dataGet.data);
                    console.log(this.user);
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
