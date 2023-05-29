<template>
    <h1>Tasks list</h1>
    <ul class="listTasks">
      <li>
        <h3>Title</h3>
        <h3 class="textTask">Text</h3>
        <h3>Priority</h3>
        <h3>Edit</h3>
      </li>
      <li v-for="item in toDoList.list" :key="item.id">
        <ItemTask :itemArray="item"/>
      </li>
    </ul>
</template>

<script setup>
import {useToDoList} from '../../stores/toDo';
import ItemTask from '../../components/ItemTask/ItemTask.vue'

const toDoList = useToDoList();
toDoList.getToDoList()

</script>

<style scoped>
h1{
  text-align: center;
  margin-top: 20px;
  font-size: 24pt;
}
ul{
  list-style: none;
  width: 90%;
  background-color: rgb(255, 255, 255, 0.5);
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
.textTask{
  display: block;
  padding: 2vw;
  text-align: center;
  width: 40%;
}
</style>