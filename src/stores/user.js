import axios from "axios";
import { defineStore } from "pinia";

export const useUsers = defineStore({
  id: "userList",
  state: () => ({
    user: null,
    createUser: false,
    logInU: {
      name: '',
      pass: ''
    },
    registerU: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }),
  actions: {
    async logInUser() {
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
        await sessionStorage.setItem('user', JSON.stringify(dataGet));
        this.user = dataGet;
      } catch (err) {
        alert('No pude' + err);
      }
    },
    logOut() {
      sessionStorage.clear();
      localStorage.clear();
    },
    async registerUser() {
      try {
        const { name, lastName, email, password, confirmPassword } = this.registerU;

        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        const url = 'https://to-do-list-nbcl.onrender.com/user/newUser';
        const userData = { name, lastName, email, password };

        const response = await axios.post(url, userData);
        location.reload();
        await sessionStorage.setItem('user', JSON.stringify(response));
        console.log(response);
      } catch (error) {
        alert('Error');
        console.error(error);
      }
    }
  },
});
