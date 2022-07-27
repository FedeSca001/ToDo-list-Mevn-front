<template>
    <input v-model="tit" type="text" placeholder="Title">
    <textarea v-model="tex" >Text</textarea>
    <input type="number" v-model="prior">
    <button type="buttom" @click="useToDo.addItemTask (tit, tex, prior)">Send</button>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import {useToDoList} from '../../stores/toDo';
const tit = ref();
const tex = ref();
const prior = ref();
const useToDo = useToDoList();

</script>

<style>

</style>