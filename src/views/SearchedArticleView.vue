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
/* script 分離 */
import searchedArticleScript from "../scripts/SearchedArticleScript.js";

export default {
  ...searchedArticleScript
}
</script>

<style>
.container {
  max-width: 600px;
  margin: auto;
  padding: 10px;
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
  justify-content: space-between; /* 左右整列 */
  align-items: center; /* 縦整列 */
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.text-input {
  flex: 1;
  max-width: 300px;
  min-width: 200px;
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
  flex-shrink: 0;
  max-width: 150px;
}

.tag-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
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
    padding: 10px;
  }

  .user-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .text-input {
    max-width: 100%;
    margin-bottom: 10px;
  }

  .search-btn {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }

  .post-item {
    padding: 10px 0;
  }

  .tag-item {
    font-size: 10px;
  }

  .post-content {
    display: block;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 18px;
  }

  .text-input {
    font-size: 14px;
    padding: 8px;
  }

  .search-btn {
    font-size: 14px;
    padding: 8px;
  }

  .tag-item {
    font-size: 9px;
    padding: 4px 8px;
  }
}
</style>
