<template>
  <div @input="ver" v-if="!createU" >
    <div>
      <label>User Name</label>
      <input type="text" v-model="user.logInU.name">
    </div>
    <div>
      <label>Password</label>
      <input type="text" v-model="user.logInU.pass">
    </div>
    <div>
      <button>Log</button>
    </div>
  </div>
  <CreateUser v-else/>

</template>

<script setup>
import CreateUser from '../LogIn/CreateUser.vue'
import { ref } from '@vue/reactivity';
import {useUsers} from '../../stores/user';
const user = useUsers()
const createU = user.createUser;
function ver (){
  console.log('Name:'+user.logInU.name+'----Pass:'+user.logInU.pass);
}
user.logInUser()
</script>

<style>

</style>