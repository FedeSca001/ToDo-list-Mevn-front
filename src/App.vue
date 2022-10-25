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
      <div class="bubbles">
        <div style="--i:11;"></div>
        <div style="--i:16;"></div>
        <div style="--i:10;"></div>
        <div style="--i:9;"></div>
        <div style="--i:21;"></div>
        <div style="--i:17;"></div>
        <div style="--i:26;"></div>
        <div style="--i:22;"></div>
        <div style="--i:13;"></div>
        <div style="--i:2;"></div>
        <div style="--i:11;"></div>
        <div style="--i:15;"></div>
        <div style="--i:11;"></div>
        <div style="--i:16;"></div>
        <div style="--i:10;"></div>
        <div style="--i:19;"></div>
        <div style="--i:21;"></div>
        <div style="--i:17;"></div>
        <div style="--i:26;"></div>
        <div style="--i:22;"></div>
        <div style="--i:13;"></div>
        <div style="--i:2;"></div>
        <div style="--i:11;"></div>
        <div style="--i:15;"></div>
    </div>
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
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
.bubbles{

  display: flex;
}
.bubbles div {

  width: 30px;
  height: 30px;
  margin: 0px 2px;
  background-color: rgb(95, 170, 19);
  border-radius: 50%;
  box-shadow: 0 0 0 10px rgba(255, 255, 0, 0.3),
  0 0 50px rgba(141, 7, 7),
  0 0 100px rgba(141, 7, 7);
  animation: animate 15s linear infinite;
  animation-duration: calc(120s / var(--i));
}
.bubbles div:nth-child(even){
  background-color: rgb(255, 110, 110);
  box-shadow: 0 0 0 10px rgba(255, 255, 0, 0.3),
  0 0 50px rgb(255, 110, 110),
  0 0 100px rgb(255, 110, 110);
}
@keyframes animate {
  0%{
    transform: translateY(100vh) scale(0);
  }
  100%{
    transform: translateY(-10vh) scale(1);
  }
}
.header{
  grid-area: header;
  background-image: linear-gradient(135deg,rgba(10, 68, 2, 0.466),rgb(44, 87, 8, 0.466),rgb(128, 115, 0, 0.466));
    background-size: 100%;
}
.aside{
  grid-area: aside;
  background-image: linear-gradient(135deg,rgba(10, 68, 2, 0.466),rgb(44, 87, 8, 0.466),rgb(128, 115, 0, 0.466));
    background-size: 280%;
}
.article{
  grid-area: article;
  background-image: linear-gradient(135deg,rgba(10, 68, 2, 0.466),rgb(44, 87, 8, 0.466),rgb(128, 115, 0, 0.466));
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
