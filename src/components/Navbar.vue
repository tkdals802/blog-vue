<template>
  <nav class="navbar">
    <router-link to="/dashboard">홈</router-link>
    <router-link v-if="!authStore.isAuthenticated()" to="/">로그인</router-link>
    <button v-if="authStore.isAuthenticated()" @click="logout">로그아웃</button>
  </nav>
</template>

<script>
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = () => {
      authStore.logout();
      router.push("/");
    };

    return { authStore, logout };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #007bff;
  color: white;
}
button {
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
