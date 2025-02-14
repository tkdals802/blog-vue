<template>
  <div class="container">
    <h1 class="title">📌 "{{ this.$route.query.keyword }}" 검색 결과</h1>
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

.user-container{
  display: flex;
  justify-content: space-between; /* 좌우 정렬 */
  align-items: center; /* 세로 정렬 */
  margin-bottom: 10px;
}

.text-input {
  flex: 1; /* 입력창이 가변적으로 확장됨 */
  max-width: 300px; /* 입력창 최대 너비 증가 */
  min-width: 200px; /* 최소 너비 설정 */
  padding: 10px; /* 내부 패딩 증가 */
  font-size: 16px; /* 글자 크기 증가 */
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
}

.tag-list {
  list-style-type: none; /* 기본 리스트 점을 없앰 */
  padding: 0; /* padding 없애기 */
  display: flex; /* 가로로 나열 */
  flex-wrap: wrap; /* 화면 크기에 맞춰 다음 줄로 자동 넘어가도록 */
}

.tag-item {
  margin-right: 10px; /* 태그 간 간격 조정 */
  background-color: #f0f0f0; /* 태그 배경색 */
  padding: 5px 10px; /* 태그 안의 패딩 */
  border-radius: 5px; /* 태그의 둥근 모서리 */
  color: #333; /* 글자 색 */
  font-size: 11px; /* 글자 크기 */
}

.post-content {
  display: flex;
  align-items: center; /* 세로로 중앙 정렬 */
  justify-content: space-between; /* 좌우로 공간을 나누어 배치 */
}
</style>