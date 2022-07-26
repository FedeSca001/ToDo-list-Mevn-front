<template>
  <div v-if="!show">
    <div>
      <label>Name</label>
      <input type="text">
    </div>
    <div>
      <label>Password</label>
      <input type="text">
    </div>
    <div>
      <button @click="users.getUsers">Log</button>
    </div>
  </div>

</template>

<script setup>
import { useUsers } from '../../stores/user';
const users = useUsers();
const show = users.createUser;
</script>

<style>

</style>