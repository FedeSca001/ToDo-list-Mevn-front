<template>
  <h3>Select:</h3>
  <router-link to="/allTasks" exact class="link"><div class="item">All tasks</div></router-link>
  <router-link to="/filtredPriority" exact class="link"><div class="item">Priority Filtred</div></router-link>
  <AddTask />
</template>

<script setup>
import AddTask from '../AddTask/AddTask.vue'
</script>

<style scoped>
.h2Title {
  color: white;
  font-size: 22pt;
  margin: 0.5vw auto;
  text-align: center;
}

.item {
  font-size: 18pt;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.item:hover {
  background-color: #e0e0e0;
}

.link {
  text-decoration: none;
  color: inherit;
}
</style>
