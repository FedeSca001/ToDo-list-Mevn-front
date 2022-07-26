<template>
  <h1>Tasks</h1>
  <ul class="listTasks">
    <li class="headerTable">
      <h3>Title</h3>
      <h3>Text</h3>
      <h3 class="priorityItem">Priority</h3>
      <h3 class="statusItem">Status</h3>
    </li>
    <li v-for="item in toDoList.list" :key="item.id">
      <h3 class="titleItem">{{item.title}}</h3>
      <h3>{{item.text}}</h3>
      <h3 class="priorityItem">{{item.priority}}</h3>
      <h3 class="statusItem" v-if="item.status">Ok</h3>
      <h3 class="statusItem" v-else>Not</h3>
    </li>
    <li>
      <input type="text" placeholder="Title">
      <textarea >Text</textarea>
      <input type="number" v-model="prioryIn">
      <input type="submit" placeholder="Send">
    </li>
  </ul>
</template>

<script setup>
import {useToDoList} from '../../stores/toDo';

const toDoList = useToDoList();
const get = toDoList.getToDoList()
const prioryIn = 0

</script>

<style scoped>
.listTasks{
  list-style: none;
}
li{
  display: flex;
  width: 80vw;
}
.headerTable{
  background-color: rgb(177, 177, 177);
}
h3{
  display: block;
  width: 20vw;
  padding: 2vw;
}
.titleItem{
  font-size: 2vw;
}
.priorityItem{
  width: 10vw;
}
.statusItem{
  width: 8vw;
}
</style>