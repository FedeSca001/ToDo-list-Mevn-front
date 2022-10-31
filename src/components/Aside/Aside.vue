<template>
  <h2>Select and filter</h2>
  <router-link to="/"><div>Init</div></router-link>
  <router-link to="/allTasks"><div>All tasks</div> </router-link>
  <AddTask />

</template>

<script setup>
import AddTask from '../AddTask/AddTask.vue'
</script>

<style scoped>
h2{
  color: white;
}
</style>