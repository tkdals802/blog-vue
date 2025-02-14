<template>
  <div class="signup-container">
    <h2>회원가입</h2>
    <form @submit.prevent="submitSignUp">
      <div class="input-group">
        <label for="username">아이디</label>
        <input type="text" id="username" v-model="user.username" required />
      </div>

      <div class="input-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>

      <div class="input-group">
        <label for="password_confirmation">비밀번호 확인</label>
        <input
          type="password"
          id="password_confirmation"
          v-model="user.password_confirmation"
          required
        />
      </div>

      <button type="submit">회원가입</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        password_confirmation: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    async submitSignUp() {
      try {
        const response = await this.$axios.post('http://localhost:3000/api/users', {
          user: this.user,
        });

        // 성공적으로 회원가입이 되면 리디렉션하거나 메시지 출력
        console.log('회원가입 성공', response.data);
        this.$router.push('/');  // 로그인 페이지로 이동 (원하는 페이지로 변경 가능)
      } catch (error) {
        // 에러가 발생한 경우
        if (error.response) {
          this.errorMessage = error.response.data.error || '회원가입 중 오류가 발생했습니다.';
        } else {
          this.errorMessage = '네트워크 오류가 발생했습니다.';
        }
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  width: 300px;
  margin: 0 auto;
}

.input-group {
  margin-bottom: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
