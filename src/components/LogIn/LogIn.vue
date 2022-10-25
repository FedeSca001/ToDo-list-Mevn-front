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
  color: white;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
}
.sendBtn:hover{
  background-color: rgba(0, 163, 11, 0.787);
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.3);
}
</style>