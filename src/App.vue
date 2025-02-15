<template>
  <router-view />

</template>

<script>
  import { useAuthStore } from './store/authStore.js'
  import {computed, onUpdated} from 'vue';
  import {useRouter} from "vue-router";

  export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    // ログイン状態確認(로그인 상태 확인)
    const isAuthenticated = computed(() => authStore.isAuthenticated());

    // リロード時にログイン状態を維持(새로고침 시 로그인 상태 유지)
    onUpdated(() => {
      if (localStorage.getItem('user_id') == null){
        console.log('token')
        router.push('/')
      }
    });
    return { isAuthenticated };
  },
};

</script>

<style scoped>

</style>
