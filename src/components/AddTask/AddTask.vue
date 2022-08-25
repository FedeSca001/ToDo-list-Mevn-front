<template>
    <div class="containinput">
        <input class="input" v-model="tit" type="text" placeholder="Title">
        <textarea class="input" placeholder="Task text" v-model="tex" >Text</textarea>
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
    display: flex;
    width: 90%;
    margin: 1vw auto;
    border-bottom: 2vw;
    justify-content: center;
}
.input{
    margin: 0 1vw;
    border-radius: 0.5vw;
    background-color: rgb(245, 245, 245);
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