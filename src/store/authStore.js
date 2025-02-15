import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(username, password) {
      //login api
      try {
        const response = await axios.post("http://localhost:3000/api/users/login", {
          user:{
            username,
            password,
          }
        });
        localStorage.setItem('user_id', response.data.user.id) //save user_id, token at localStorage
        localStorage.setItem('JWT_token', response.data.token)
        return true; // login success
      } catch (error) {
        console.error("Login failed:", error.response?.data);
        return false; // login fail
      }
    },

    logout() {
      const router = useRouter();
      localStorage.removeItem('user_id')
      localStorage.removeItem('JWT_token') //delete user_id, token from localStorage
      router.push('/') //login pageに移動
    },

    isAuthenticated() {
      return !!localStorage.getItem('user_id'); //user_idとtokenは一緒にsave, deleteするので一つだけcheck
    },
  },
});
