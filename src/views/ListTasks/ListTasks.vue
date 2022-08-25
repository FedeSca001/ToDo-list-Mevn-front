<template>
  <h1>Tasks</h1>
  <ul class="listTasks">
    <li class="headerTable">
      <h3>Title</h3>
      <h3>Text</h3>
      <h3>Priority</h3>
      <h3>Status</h3>
      <h3>Edit</h3>
    </li>
    <li v-for="item in toDoList.list" :key="item.id">
      <ItemTask :itemArray="item"/>
    </li>
  </ul>
  <AddTask />
</template>

<script setup>
import {useToDoList} from '../../stores/toDo';
import AddTask from '../../components/AddTask/AddTask.vue'
import ItemTask from '../../components/ItemTask/ItemTask.vue'

const toDoList = useToDoList();
toDoList.getToDoList()

</script>

<style scoped>
ul{
  list-style: none;
  width: 90%;
  background-color: rgb(223, 223, 223);
  margin: 2vw auto;
  border-radius: 5px;
}
li{
  display: flex;
}
.headerTable{
  width: 100%;
  font-size: 1vw;
}
.priorityItem{
  text-align: center;
}
h3{
  display: block;
  padding: 2vw;
  text-align: center;
  width: 20%;
}
</style>