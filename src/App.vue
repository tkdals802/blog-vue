<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar v-if="isAuthenticated" />
  <router-view />

</template>

<script>
  import Navbar from './components/Navbar.vue'
  import { useAuthStore } from './store/authStore.js'
  import { computed, onMounted} from 'vue';

  export default {
  components: { Navbar },
  setup() {
    const authStore = useAuthStore();

    // 로그인 상태 확인
    const isAuthenticated = computed(() => authStore.isAuthenticated());

    // 새로고침 시 로그인 상태 유지
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
