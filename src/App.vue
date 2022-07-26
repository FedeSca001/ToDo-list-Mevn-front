<template>
  <RouterView v-if="users.user.name"/>
  <LogIn v-else/>
</template>

<script setup>
import LogIn from './views/LogIn/LogIn.vue';
import { RouterView } from 'vue-router';
import { useUsers } from './stores/user';
const users = useUsers();
</script>

<style scoped>

</style>
