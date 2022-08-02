<template>
  <p>NAVBAR</p>
  <button @click="out" >Log Out</button>
</template>

<script setup>
import {useUsers} from '../../stores/user';
const user = useUsers();
function out() {
  user.logOut();
  location.reload();
}

</script>

<style>

</style>