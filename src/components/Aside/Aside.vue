<template>
  <h2 class="h2Title">Select and filter</h2>
  <router-link to="/"><div class="item">Init</div></router-link>
  <router-link to="/allTasks"><div class="item">All tasks</div></router-link>
  <router-link to="/filtredPriority"><div class="item">Priority Filtred</div></router-link>
  <AddTask />

</template>

<script setup>
import AddTask from '../AddTask/AddTask.vue'
</script>

<style scoped>
.h2Title{
  color: white;
  font-size: 22pt;
  margin: 0.5vw auto;
}
.item{
  font-size: 18pt;
  padding-left: 0.5vw;
}
</style>