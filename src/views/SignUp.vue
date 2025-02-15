<template>
  <div class="signup-container">
    <h2>会員登録</h2>
    <form @submit.prevent="submitSignUp">
      <div class="input-group">
        <label for="username">username</label>
        <input type="text" id="username" v-model="user.username" required />
      </div>

      <div class="input-group">
        <label for="password">password</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>

      <div class="input-group">
        <label for="password_confirmation">password 確認</label>
        <input
          type="password"
          id="password_confirmation"
          v-model="user.password_confirmation"
          required
        />
      </div>

      <button type="submit">会員登録</button>
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
          this.errorMessage = error.response.data.error || 'error occurred';
        } else {
          this.errorMessage = 'network error';
        }
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  width: 100%;
  max-width: 400px; /* 데스크탑에서 최대 너비를 설정 */
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

h2 {
  text-align: center;
  font-size: 24px;
}

.input-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 14px;
  text-align: center;
}

@media (max-width: 768px) {
  .signup-container {
    width: 100%;
    max-width: 100%; /* 모바일에서는 전체 너비로 확장 */
    padding: 15px;
  }

  h2 {
    font-size: 20px; /* 제목 크기 조정 */
  }

  .input-group {
    margin-bottom: 12px;
  }

  input, button {
    font-size: 14px;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 18px; /* 모바일 화면에서 제목 더 작게 설정 */
  }

  .error {
    font-size: 12px; /* 에러 메시지 크기 조정 */
  }
}
</style>
