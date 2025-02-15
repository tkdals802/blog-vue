<template>
  <div class="login-container">
    <h2>Sign in</h2>

    <!-- username / password / password-確認 input -->
    <form @submit.prevent="submitLogin">
      <div class="input-group">
        <label for="username">id</label>
        <input type="text" id="username" v-model="username" required />
      </div>

      <div class="input-group">
        <label for="password">password</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit">sign in</button>

    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <!-- go to sign up page -->
    <div class="signup-link">
      <p>アカウントがありませんか？ <router-link to="/signup">Sign up</router-link></p>
    </div>
  </div>
</template>

<script>
import loginScript from "../scripts/LoginScript.js";

export default {
  ...loginScript
}
</script>