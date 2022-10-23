<template>
  <h1>TASKS APP</h1>
  <button @click="out" class="btn" >Log Out</button>
</template>

<script setup>
import {useUsers} from '../../stores/user';
const user = useUsers();
function out() {
  user.logOut();
  location.reload();
}
</script>

<style scoped>
h1{
  display: inline-block;
  font-size: 26pt;
  color: #4bace9;
  margin: 2.8vh auto;
  text-align: center;
}
.btn{
  margin: 0.1vh 2vw;
}
</style>