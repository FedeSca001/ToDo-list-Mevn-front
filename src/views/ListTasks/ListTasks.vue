<template>
  <h1>Tasks</h1>
  <ul class="listTasks">
    <li class="headerTable">
      <h3 class="titelLi">Title</h3>
      <h3 class="textLi">Text</h3>
      <h3 class="priorityItem">Priority</h3>
      <h3 class="statusLi">Status</h3>
      <h3 class="edits">Edit</h3>
    </li>
    <li v-for="item in toDoList.list" :key="item.id">
      <ItemTask :itemArray="item" />
    </li>
    <li>
      <AddTask />
    </li>
  </ul>
</template>

<script setup>
import {useToDoList} from '../../stores/toDo';
import AddTask from '../../components/AddTask/AddTask.vue'
import ItemTask from '../../components/ItemTask/ItemTask.vue'

const toDoList = useToDoList();
toDoList.getToDoList()

</script>

<style scoped>
.listTasks{
  list-style: none;
}
li{
  display: flex;
}
.headerTable{
  background-color: rgb(177, 177, 177);
  width: 20vw;
}
.priorityItem{
  text-align: center;
}
h3{
  display: block;
  padding: 2vw;
  text-align: center;
}
.edits{
  display: flex;
}
</style>