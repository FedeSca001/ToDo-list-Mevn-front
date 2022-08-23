<template>
  <div class="navContain">
    <h1>TASKS APP</h1>
    <button @click="out" >Log Out</button>
  </div>
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
.navContain{
  display: flex;
}
</style>