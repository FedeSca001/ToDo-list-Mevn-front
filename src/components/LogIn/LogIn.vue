<template>
  <div class="loginContainer">
    <div v-if="createU">
      <RegisterUser />
    </div>
    <div v-else class="formContain">
      <div class="formGroup">
        <label class="label" for="login-name">User Name</label>
        <input class="inputData" type="text" id="login-name" v-model="user.logInU.name">
      </div>
      <div class="formGroup">
        <label class="label" for="login-password">Password</label>
        <input class="inputData" type="password" id="login-password" v-model="user.logInU.pass">
      </div>
      <button @click="logInUser" class="sendBtn">Login</button>
      <button @click="switchToRegister" class="registerBtn">Register</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RegisterUser from '../RegisterUser/RegisterUser.vue'
import { useUsers } from '../../stores/user';

const user = useUsers();
const createU = ref(false);

const logInUser = () => {
  user.logInUser();
};

const switchToRegister = () => {
  createU.value = true;
};
</script>

<style scoped>
/* Estilos CSS */
</style>


<style scoped>
.loginContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f3f3;
}

.formContain {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 47, 47, 0.37);
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  padding: 20px;
  box-sizing: border-box;
}

.formGroup {
  margin-bottom: 20px;
}

.label {
  color: rgb(31, 0, 12);
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 5px;
}

.inputData {
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: none;
}

.sendBtn {
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: rgba(0, 105, 5, 0.623);
  color: white;
  cursor: pointer;
}

.sendBtn:hover {
  background-color: rgba(0, 163, 11, 0.787);
}

.registerBtn {
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: rgba(47, 176, 255, 0.37);
  color: #000;
  cursor: pointer;
  margin-top: 10px;
}

.registerBtn:hover {
  background-color: rgba(47, 176, 255, 0.5);
}
</style>
