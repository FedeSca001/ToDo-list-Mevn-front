<template>
  <p v-for="item in toDoList.list" :key="item.id">{{item.title}}</p>
</template>

<script setup>
import {useToDoList} from '../../stores/toDo';

const toDoList = useToDoList();
const get = toDoList.getToDoList()

</script>

<style>

</style>