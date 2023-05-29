<template>
  <div class="containinput">
    <h4>Add new task</h4>
    <input class="input" v-model="tit" type="text" placeholder="Title">
    <textarea class="texTarea" placeholder="Task text" v-model="tex">Text</textarea>
    <input class="input" type="number" placeholder="Priority" v-model="prior">
    <button type="button" class="btnNew" @click="useToDo.addItemTask(tit, tex, prior)">Send</button>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useToDoList } from '../../stores/toDo';

const tit = ref('');
const tex = ref('');
const prior = ref('');
const useToDo = useToDoList();
</script>

<style scoped>
.containinput {
  background-color: #fff;
  width: 100%;
  margin: 1.8vw auto;
  padding: 2vw 2vw;
  border-radius: 1vw;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.input {
  margin: 0.5vw 1vw;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5vw;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
}

.texTarea {
  margin: 0.5vw 1vw;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5vw;
  width: 100%;
  height: 100px;
  font-size: 16px;
  resize: vertical;
  box-sizing: border-box;
}

h4 {
  font-size: 20pt;
}

.btnNew {
  padding: 0.5rem 1rem;
  background-color: #21ff21;
  border: none;
  border-radius: 0.5vw;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btnNew:hover {
  background-color: #00d40b;
}
</style>
