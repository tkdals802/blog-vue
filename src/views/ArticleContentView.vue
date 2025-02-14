<template>
  <div class="container">
    <div class="header">
      <router-link to="/dashboard" class="back-link">Home</router-link>
      <span class="username">username: {{ user.username }}</span>
    </div>

    <div class="post-container">
      <h1 class="title">{{ post?.article.title }}</h1>

      <div class="category">
        <strong>Category:</strong> {{ post?.category_name }}
      </div>

      <!-- Tags -->
      <div class="tags">
        <strong>Tags:</strong>
        <ul class="tag-list">
          <li v-for="(tag, index) in post?.tags" :key="index" class="tag-item">
            #{{ tag.name }}
          </li>
        </ul>
      </div>

      <p class="content">{{ post?.article.content }}</p>

      <router-link :to="`/updatepost/${post?.article.id}`">
        <button class="update-btn">Edit Post</button>
      </router-link>
      <button @click="deletePost" class="">delete</button>
    </div>
  </div>
</template>

<script>

import router from "../router/index.js";

export default {
  data() {
    return {
      post: null,
      user: null,
    };
  },
  created() {
    const postId = this.$route.params.id;
    const token = localStorage.getItem('JWT_token');
    const user_id = localStorage.getItem('user_id');


    this.$axios.get(`http://localhost:3000/api/users/${user_id}`,
            {
              headers:{
                Authorization: `Bearer ${token}`,
              }
            })
            .then((response) => {
              this.user = response.data;
            })
            .catch((error) => {
              router.push('/');
              console.error(error);
            })

    this.$axios
      .get(`http://localhost:3000/api/articles/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.post = response.data;
      })
      .catch((error) => {
        console.error(error);
        router.push('/dashboard') //存在しないpostならdashboardに移動
      });
  },

  methods: {
    deletePost(){
      const postId = this.$route.params.id;
      const token = localStorage.getItem('JWT_token')

      this.$axios.delete(
          `http://localhost:3000/api/articles/${postId}`,
          {
            headers:{
              Authorization: `Bearer ${token}`,
            }
          }
      ).then((response) => {
        router.push('/dashboard')
      })
    },
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f7f7f7;
  font-family: 'Arial', sans-serif;
}

.back-link {
  display: block;
  font-size: 16px;
  color: #4c8bf5;
  margin-bottom: 20px;
  text-decoration: none;
  font-weight: 600;
}

.back-link:hover {
  text-decoration: underline;
}

.post-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.content {
  font-size: 18px;
  color: #666;
  line-height: 1.5;
}

.tags {
  margin-top: 10px;
  font-size: 18px;
  color: #4b4b4b;
}

.tag-list {
  list-style-type: none; /* Removes the bullet points */
  padding: 0;
  margin: 0;
}

.category {
  margin-top: 10px;
  font-size: 18px;
  color: #4b4b4b;
}

.update-btn:hover {
  background-color: #3572d4;
}

.header {
  display: flex; /* Flexbox 사용 */
  align-content: center;
  justify-content: space-between;
}

</style>
