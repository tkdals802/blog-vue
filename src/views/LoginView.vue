<template>
  <div class="login-container">
    <h2>로그인</h2>
    <form @submit.prevent="submitLogin">
      <div class="input-group">
        <label for="username">아이디</label>
        <input type="text" id="username" v-model="username" required />
      </div>

      <div class="input-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit">sign in</button>

    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <div class="signup-link">
      <p>계정이 없으신가요? <router-link to="/signup">회원가입</router-link></p>
    </div>
  </div>
</template>

<script>
import loginScript from "../scripts/LoginScript.js";

export default {
  ...loginScript
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: #f5f7fa;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}

.signup-link {
  margin-top: 20px;
}

@media (max-width: 768px) { /*768px 以下では 100% 幅*/
  .login-container {
    max-width: 100%;
    padding: 15px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .input-group {
    margin-bottom: 12px;
  }

  label {
    font-size: 14px;
  }

  input {
    padding: 10px;
    font-size: 14px;
  }

  button {
    padding: 12px;
    font-size: 14px;
  }

  .error {
    font-size: 14px;
  }

  .signup-link p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .login-container {
    padding: 10px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .input-group {
    margin-bottom: 10px;
  }

  label {
    font-size: 13px;
  }

  input {
    padding: 12px;
    font-size: 15px;
  }

  button {
    padding: 14px;
    font-size: 16px;
  }

  .error {
    font-size: 12px;
  }

  .signup-link p {
    font-size: 13px;
  }
}
</style>
