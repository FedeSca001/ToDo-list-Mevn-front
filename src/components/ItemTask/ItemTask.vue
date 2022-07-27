<template>
    <h3 class="titleItem">{{itemArray.title}}</h3>
    <h3>{{itemArray.text}}</h3>
    <h3 class="priorityItem">{{itemArray.priority}}</h3>
    <div class="edits">
    <button @click="toDoList.deletItem(itemArray._id)">x</button>
    <button>Edit</button>
    </div>
</template>

<script>
import {useToDoList} from '../../stores/toDo';
export default {
    props:['itemArray'],
    setup(){
        const toDoList = useToDoList();
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
}
.priorityItem{
  width: 10vw;
}
.statusItem{
  width: 8vw;
}
.edits{
  width: 10vw;
  display: flex;
}
button{
  height: 4vw;
  width: 4vw;
  font-size: 1.5vw;
}
</style>