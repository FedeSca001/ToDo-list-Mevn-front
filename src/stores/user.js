import axios from "axios";
import { defineStore } from "pinia";

export const useUsers = defineStore({
        id: "userList",
        state: () => ({
            user: '',
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
            },
            async logInUser (){
                try {
                        const name = this.logInU.name;
                        const pass = this.logInU.pass;
                        const url =
                                "https://to-do-list-nbcl.onrender.com/user/" +
                                String(name) +
                                "/" +
                                String(pass);
                        const dataGet = await axios.get(url);
                        location.reload();
                        return (this.user = await sessionStorage.setItem(
                                "user",
                                JSON.stringify(this.logInU)
                        ));
                } catch (err) {
                    alert('No pude'+ err);
                }
            },
            logOut(){
                sessionStorage.clear();
                localStorage.clear();
            }
        },
});
