<template>
    <div class="containinput">
        <h4>Add new task</h4>
        <input class="input" v-model="tit" type="text" placeholder="Title">
        <textarea class="texTarea" placeholder="Task text" v-model="tex" >Text</textarea>
        <input class="input" type="number" placeholder="Priority" v-model="prior" >
        <button type="buttom" class="btnNew" @click="useToDo.addItemTask (tit, tex, prior)">Send</button>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import {useToDoList} from '../../stores/toDo';
const tit = ref();
const tex = ref();
const prior = ref();
const useToDo = useToDoList();

</script>

<style scoped>
.containinput{
    background-color: white;
    width: 90%;
    margin: 1vw auto;
    padding: 2vw 1vw;
    border-radius: 1vw;
}
.input{
    margin: 0.5vw 1vw;
    border-radius: 0.5vw;
}
.texTarea{
    height: 50px;
    margin: 0.5vw 1vw;
    width: 70%;
}
h4{
    font-size: 20pt;
}
.btnNew{
    padding: 0.5rem 1rem;
    background-color: rgb(21, 255, 33);
    border: none;
    border-radius: 0.5vw;
}
.btnNew:hover{
    background-color: rgb(0, 212, 11);
    color: white;
}
</style>