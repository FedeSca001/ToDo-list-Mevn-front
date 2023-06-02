<template>
  <div class="formContain">
    <div class="formGroup">
      <label class="label" for="register-name">User Name</label>
      <input class="inputData" type="text" id="register-name" v-model="user.registerU.name">
    </div>
    <div class="formGroup">
      <label class="label" for="register-lastName">Last Name</label>
      <input class="inputData" type="text" id="register-lastName" v-model="user.registerU.lastName">
    </div>
    <div class="formGroup">
      <label class="label" for="register-email">Email</label>
      <input class="inputData" type="email" id="register-email" v-model="user.registerU.email">
    </div>
    <div class="formGroup">
      <label class="label" for="register-password">Password</label>
      <input class="inputData" type="password" id="register-password" v-model="user.registerU.password">
    </div>
    <div class="formGroup">
      <label class="label" for="register-confirmPassword">Confirm Password</label>
      <input class="inputData" type="password" id="register-confirmPassword" v-model="user.registerU.confirmPassword">
    </div>
    <button @click="registerUser" class="sendBtn">Register</button>
  </div>
</template>

<script setup>
import { useUsers } from '../../stores/user';
const user = useUsers();
const registerUser = () => {
  user.registerUser();
};
</script>

<style scoped>
/* Estilos CSS */
</style>


<style scoped>
.formContain {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(47, 176, 255, 0.37);
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.formGroup {
  margin-bottom: 20px;
}

.label {
  color: rgb(12, 0, 31);
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
  background-color: rgba(5, 70, 105, 0.623);
  color: white;
  cursor: pointer;
}

.sendBtn:hover {
  background-color: rgba(11, 104, 155, 0.787);
}

.successMessage {
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  color: green;
}
</style>
