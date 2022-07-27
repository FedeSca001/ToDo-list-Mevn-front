<template>
    <h3 class="titleItem">{{itemArray.title.charAt(0).toUpperCase()}}{{itemArray.title.slice(1).toLowerCase()}}</h3>
    <h3 class="textLi">{{itemArray.text.charAt(0).toUpperCase()}}{{itemArray.text.slice(1).toLowerCase()}}</h3>
    <h3 class="priorityItem">{{itemArray.priority}}</h3>
    <h3 class="statusLi" v-if="itemArray.status">Ok</h3>
    <h3 class="statusLi" v-else>Await</h3>
    <div class="edits">
        <button @click="toDoList.deletItem(itemArray._id)">x</button>
    </div>
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
  width: 20vw;
  padding: 2vw;
}
.titleItem{
  font-size: 3vw;
  font-weight: 900;
  width: 12vw;
}
.priorityItem{
  width: 6vw;
  text-align: center;
}
.statusItem{
  width: 8vw;
}
.edits{
  align-items: center;
  width: 10vw;
  display: flex;
  padding: 3.5vw;
}
button{
  height: 4vw;
  width: 4vw;
  font-size: 1.5vw;
}
.textLi{
    width: 20vw;
}
.statusLi{
  width: 6vw;
}
</style>