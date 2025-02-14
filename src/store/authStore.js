import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post("http://localhost:3000/api/users/login", {
          user:{
            username,
            password,
          }
        });
        localStorage.setItem('user_id', response.data.user.id)
        localStorage.setItem('JWT_token', response.data.token)
        return true; // 로그인 성공
      } catch (error) {
        console.error("Login failed:", error.response?.data);
        return false; // 로그인 실패
      }
    },

    logout() {
      const router = useRouter();
      localStorage.removeItem('user_id')
      localStorage.removeItem('JWT_token')
      router.push('/')
    },

    isAuthenticated() {
      return !!localStorage.getItem('user_id');
    },
  },
});
