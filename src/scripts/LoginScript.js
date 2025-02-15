import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";
import { ref } from "vue";
import "../style/LoginStyle.css";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const username = ref("");
    const password = ref("");
    const errorMessage = ref("");

    const submitLogin = async () => {
      const success = await authStore.login(username.value, password.value);

      console.log(success)
      if (success) {
        router.push("/dashboard"); // 로그인 성공 시 이동
      } else {
        errorMessage.value = "login fail please retry.";
      }
    };

    return { username, password, errorMessage, submitLogin };
  },
};