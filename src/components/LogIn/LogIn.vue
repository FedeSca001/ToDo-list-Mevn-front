<template>
  <div  v-if="!createU" 
        class="formContain">
    <div class="divSep">
      <label class="label">User Name</label>
      <input class="inputData" type="text" v-model="user.logInU.name">
    </div>
    <div class="divSep">
      <label class="label">Password</label>
      <input class="inputData" type="password" v-model="user.logInU.pass">
    </div>
    <div>
      <button @click="user.logInUser()" class="sendBtn">Send</button>
      <button class="sendBtn createBtn">Create</button>
    </div>
  </div>
  <CreateUser v-else/>
</template>

<script setup>
import CreateUser from '../LogIn/CreateUser.vue'
import {useUsers} from '../../stores/user';
const user = useUsers()
user.logInU.name = "FedeSca001";
user.logInU.pass = "lcdtm1234";
const createU = user.createUser;
</script>

<style scoped>
.formContain{
  background-color: rgba(255, 47, 47, 0.37);
  border-radius: 2.5vw;
  width: 25vw;
  margin: 15vw auto;
  padding: 3vw;
  align-self: center;
}
.divSep{
  margin-bottom: 1.3vw;
}
.label{
  color: rgb(31, 0, 12);
  font-weight: 900;
  font-size: 20pt;
  margin-right: 1vw;
}
.inputData{
  border-radius: 0.4vw;
  display: inline-block;
  background-color: rgb(255, 201, 191);
  margin-right: 0;
}
.sendBtn{
  font-size: 1.8vw;
  padding: 0.8vw 1.3vw;
  border: none;
  border-radius: 1vw;
  background-color: rgba(0, 105, 5, 0.623);
  color: white
}
.sendBtn:hover{
  background-color: rgb(0, 85, 5);
}
.createBtn{
  margin-left: 2vw;
  background-color: rgb(1, 116, 124, 0.623);
}
.createBtn:hover{
  background-color: rgb(1, 81, 87);
}
</style>