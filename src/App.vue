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
  <div class="contBub" v-else>
    <LogIn />
  </div>
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
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  padding: 0px;
  margin: 0px;
}
html{
  height: 100%;
  width: 100%;
}
body{
  min-width: 100%;
  background-image: linear-gradient(135deg,rgb(180, 255, 180),rgb(148, 166, 245),rgb(255, 219, 173),rgb(255, 199, 255));
  background-size: 100%;
  transition: 600ms;
  position: relative;
}
.contBub{
  width: 100%;
}

.header{
  grid-area: header;
  background-image: linear-gradient(135deg,rgba(10, 68, 2, 0.466),rgb(44, 87, 8, 0.466),rgb(128, 115, 0, 0.466));
    background-size: 100%;
}
.aside{
  grid-area: aside;
  padding: 1.1vw;
}
.article{
  grid-area: article;
  background-image: linear-gradient(135deg,rgba(10, 68, 2, 0.15),rgb(44, 87, 8, 0.15),rgb(128, 115, 0, 0.1));
  background-size: 100%;
}
.container{
  display: grid;
  gap: 1vw;
  grid-template: 
    "header" 15vh
    "aside"  20vh
    "article" 65vh;
}
@media ( min-width: 600px ) {
  .container{
    grid-template: 
      "header header"  11vh
      "aside  article" 89vh /
      25%     auto;
  }
}
@media ( min-width: 950px ) {
  .container{
    grid-template: 
      "header header"  11vh
      "aside  article" 86vh /
      30%     auto;
  }
}
</style>
