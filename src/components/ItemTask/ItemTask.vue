<template>
  <h3>{{itemArray.title.charAt(0).toUpperCase()}}{{itemArray.title.slice(1).toLowerCase()}}</h3>
  <h3 class="description">{{itemArray.text.charAt(0).toUpperCase()}}{{itemArray.text.slice(1).toLowerCase()}}</h3>
  <h3>{{itemArray.priority}}</h3>
  <h3 v-if="itemArray.status">Ok</h3>
  <h3 v-else>Await</h3>
  <h3>
      <button @click="toDoList.deletItem(itemArray._id)">x</button>
  </h3>
</template>

<script>
import {useToDoList} from '../../stores/toDo';
export default {
    props:['itemArray'],
    setup(){
        const toDoList = useToDoList();
        return{
            toDoList
        }
    }
}
</script>

<style scoped>
h3{
  display: block;
  padding: 2vw;
  text-align: center;
  width: 20%;
  background-color: blue;
  font-size: 1.5vw;
}
.description{
  text-align: initial;
  font-size: 1vw;
}
</style>