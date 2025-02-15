<template>
  <div class="container">
    <h1 class="title">📌 "{{ this.$route.query.keyword }}" 検索結果</h1>
    <div class="user-container">
      <input v-model="inputText" type="text" placeholder="search title..." class="text-input" />
      <button @click="searchPosts" class="search-btn">search</button>
      <h3>user : {{ user.username }}</h3>
    </div>
    <ul>
      <li v-for="post in posts" :key="post.id" class="post-item">
        <div class="post-content">
          <router-link :to="'/post/' + post.id" class="post-title">
            {{ post.title }}
          </router-link>
          <ul class="tag-list">
            <li v-for="tag in post.tags" :key="tag.id" class="tag-item">
              #{{ tag.name }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import searchedArticleScript from "../scripts/SearchedArticleScript.js";

export default {
  ...searchedArticleScript
}
</script>

<style>
.container {
  max-width: 600px;
  margin: auto;
  padding: 10px; /* 여백을 추가하여 화면 가장자리와의 간격을 만들어줌 */
}

.title {
  text-align: center;
}

.post-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.post-item a {
  color: blue;
  text-decoration: none;
}

.post-item a:hover {
  text-decoration: underline;
}

.user-container {
  display: flex;
  justify-content: space-between; /* 좌우 정렬 */
  align-items: center; /* 세로 정렬 */
  margin-bottom: 10px;
  flex-wrap: wrap; /* 작은 화면에서는 자동으로 줄 바꿈 */
}

.text-input {
  flex: 1; /* 입력창이 가변적으로 확장됨 */
  max-width: 300px; /* 최대 너비 증가 */
  min-width: 200px; /* 최소 너비 설정 */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-btn {
  margin-left: 10px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  flex-shrink: 0; /* 버튼이 축소되지 않도록 방지 */
  max-width: 150px; /* 버튼의 최대 크기 제한 */
}

.tag-list {
  list-style-type: none; /* 기본 리스트 점을 없앰 */
  padding: 0;
  display: flex;
  flex-wrap: wrap; /* 화면 크기에 맞춰 다음 줄로 자동 넘어가도록 */
}

.tag-item {
  margin-right: 10px;
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
  color: #333;
  font-size: 11px;
}

.post-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Mobile responsive design */
@media (max-width: 768px) {
  .container {
    padding: 10px; /* 여백 조정 */
  }

  .user-container {
    flex-direction: column; /* 세로로 쌓이도록 설정 */
    align-items: flex-start; /* 왼쪽 정렬 */
  }

  .text-input {
    max-width: 100%; /* 모바일에서는 입력창이 화면 너비에 맞게 설정 */
    margin-bottom: 10px; /* 버튼과 입력창 간 여백 추가 */
  }

  .search-btn {
    width: 100%; /* 모바일에서 버튼이 가로로 꽉 차게 설정 */
    margin-left: 0; /* 버튼 왼쪽 여백 제거 */
    margin-top: 10px; /* 버튼 위 여백 추가 */
  }

  .post-item {
    padding: 10px 0;
  }

  .tag-item {
    font-size: 10px; /* 모바일에서 태그 글자 크기 축소 */
  }

  .post-content {
    display: block; /* 모바일에서 세로로 쌓이게 변경 */
    gap: 15px; /* 요소들 간의 간격을 주어 가독성을 높임 */
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 18px; /* 모바일에서 제목 크기 조정 */
  }

  .text-input {
    font-size: 14px; /* 모바일에서 글자 크기 조정 */
    padding: 8px; /* 내부 여백 줄이기 */
  }

  .search-btn {
    font-size: 14px; /* 버튼 글자 크기 조정 */
    padding: 8px; /* 버튼 여백 줄이기 */
  }

  .tag-item {
    font-size: 9px; /* 태그 글자 크기 더 줄이기 */
    padding: 4px 8px; /* 태그 내부 여백 줄이기 */
  }
}
</style>
