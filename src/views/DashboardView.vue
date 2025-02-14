<template>
  <div class="container">
    <h1 class="title">📌 게시물 목록</h1>

    <div class="user-info">
      <h3>user : {{ user.username }}</h3>
      <button @click="logout" class="logout-btn">Logout</button>
    </div>

    <div class="user-container">
      <input v-model="inputText" type="text" placeholder="search title..." class="text-input" />

      <select v-model="selectedCategory" class="category-select">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option>
      </select>

      <button @click="searchPosts" class="search-btn">search</button>
      <button @click="goToCreatePost" class="search-btn">Create Post</button>
    </div>

    <ul>
      <ul class="dashboard-bar">
        <li>title</li>
        <li>category</li>
        <li>tags</li>
      </ul>
      <li v-for="post in filteredCategory" :key="post.id" class="post-item">
        <div class="post-content">
          <router-link :to="'/post/' + post.article.id" class="post-title">
            {{ post.article.title }}
          </router-link>
          <p class="post-category">{{ post.category_name }}</p>
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
import dashboardScript from "../scripts/DashboardScript.js";

export default {
  ...dashboardScript
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}
.title {
  text-align: center;
}

.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logout-btn {
  background-color: #ff4d4f;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
  font-size: 14px;
}

.tag-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-item {
  margin-right: 0;
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
  color: #333;
  font-size: 11px;
}

.post-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
}

.post-category {
  font-size: 12px;
  margin-left: 20%;
  text-align: center;
}

.dashboard-bar {
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 10px 30px;
  margin-bottom: 10px;
  list-style-type: none;
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 10px;
  }

  .title {
    font-size: 24px;
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
    margin-left: 0;
    margin-top: 5px;
    width: 100%;
  }

  .dashboard-bar {
    flex-direction: column;
    padding: 10px;
  }

  .dashboard-bar li {
    text-align: left;
    padding: 5px 0;
  }

  .post-content {
    display: block;
    gap: 15px;
  }

  .post-category {
    margin-left: 0;
    text-align: left;
  }

  .tag-item {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .post-title {
    font-size: 14px;
  }

  .post-category {
    font-size: 10px;
  }

  .tag-item {
    font-size: 9px;
  }
}
</style>
