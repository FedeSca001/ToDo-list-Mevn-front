<template>
  <div v-if="showApp" class="container">
    <nav class="header">
      <NavBar />
    </nav>
    <aside class="aside">
      <Aside />
    </aside>
    <article class="article">
      <RouterView/>
    </article>
  </div>
  <LogIn v-else/>
</template>

<script setup>
import LogIn from './components/LogIn/LogIn.vue'
import NavBar from './components/NavBar/NavBar.vue';
import Aside from './components/Aside/Aside.vue';
import { RouterView } from 'vue-router';
import { useUsers } from './stores/user';
const users = useUsers();
const userStore = users.user;
const showApp = JSON.parse(sessionStorage.getItem("user")) || false;
</script>

<style>
*{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 0px;
  margin: 0px;
}
html{
  height: 100%;
  width: 100%;
}
body{
  min-height: 100%;
  min-width: 100%;
  background-color: rgb(75, 69, 69);
}
.header{
  grid-area: header;
  background-color: blueviolet;
}
.aside{
  grid-area: aside;
  background-color: blueviolet;
}
.article{
  grid-area: article;
  background-color: blueviolet;
}
.container{
  display: grid;
  gap: 1vw;
  grid-template: 
    "header" 15%
    "aside"  20%
    "article" auto;
}
@media ( min-width: 600px ) {
  .container{
    grid-template: 
      "header header"  15%
      "aside  article" 85% /
      25%     auto;
  }
}
@media ( min-width: 950px ) {
  .container{
    grid-template: 
      "header header"  15%
      "aside  article" 85% /
      30%     auto;
  }
}
</style>
