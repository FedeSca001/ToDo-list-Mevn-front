<template>
  <form @submit="user.logInUser()" v-if="!createU" >
    <div>
      <label>User Name</label>
      <input type="text" v-model="user.logInU.name">
    </div>
    <div>
      <label>Password</label>
      <input type="text" v-model="user.logInU.pass">
    </div>
    <div>
      <input type="submit" value="send"/>
    </div>
  </form>
  <CreateUser v-else/>

</template>

<script setup>
import CreateUser from '../LogIn/CreateUser.vue'
import { ref } from '@vue/reactivity';
import {useUsers} from '../../stores/user';
const user = useUsers()
const createU = user.createUser;
</script>

<style>

</style>