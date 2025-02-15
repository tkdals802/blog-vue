<template>
  <div class="create-article">
    <h1>Edit Article</h1>

    <!-- Article Form -->
    <form @submit.prevent="submitForm">
      <!-- Title -->
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          v-model="form.title"
          class="form-control"
          required
        />
      </div>

      <!-- Content -->
      <div class="form-group">
        <label for="content">Content</label>
        <textarea
          id="content"
          v-model="form.content"
          class="form-control"
          required
        ></textarea>
      </div>

      <!-- Category Name -->
      <div class="form-group">
        <label for="category_name">Category Name</label>
        <input
          type="text"
          id="category_name"
          v-model="form.category_name"
          class="form-control"
          required
        />
      </div>

      <!-- Tags -->
      <div class="form-group">
        <label for="tags">Tags (Comma Separated)</label>
        <input
          type="text"
          id="tags"
          v-model="form.tagsInput"
          class="form-control"
          @input="updateTags"
        />
        <small class="form-text text-muted">Enter tags separated by commas.</small>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-submit">Update</button>
    </form>

    <!-- Success/Error Messages -->
    <div v-if="message" :class="messageType">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        content: '',
        category_name: '',
        tagsInput: '', // Tags input as string
        tags: [] // Tags in array format
      },
      message: '',
      messageType: '',
    };
  },
  created() {
    const postId = this.$route.params.id;  // Get the ID from the URL
    const token = localStorage.getItem('JWT_token'); // Get JWT token for authorization

    this.$axios
      .get(`http://localhost:3000/api/articles/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const post = response.data.article;

        this.form.title = post.title;
        this.form.content = post.content;
        this.form.category_name = response.data.category_name;
        this.form.tagsInput = response.data.tags.map((tag) => tag.name).join(", ");
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
        this.message = 'Failed to load the post data.';
        this.messageType = 'alert alert-danger';
      });
  },
  methods: {
    // Update tags when the user types in the input field
    updateTags() {
      this.form.tags = this.form.tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    },

    // Handle form submission to update the article
    async submitForm() {
      const postId = this.$route.params.id;
      const data = {
        article: {
          title: this.form.title,
          content: this.form.content,
          category_name: this.form.category_name,
          tags: this.form.tags
        }
      };

      try {
        const token = localStorage.getItem('JWT_token');
        await this.$axios.put(
            `http://localhost:3000/api/articles/${postId}`,
            data,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }
        );
        this.$router.push(`/post/${postId}`); // Redirect to the updated post page
      } catch (error) {
        console.log(error)
      }
    },
  }
};
</script>

<style scoped>
.create-article {
  max-width: 600px;
  margin: 0 auto;
  background-color: #f0f8ff; /* Light cyan background */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #0077b6; /* Deep blue */
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-size: 1rem;
  font-weight: 600;
  color: #0077b6;
}

input, textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #0077b6;
  box-sizing: border-box;
}

input:focus, textarea:focus {
  border-color: #0096c7; /* Lighter blue on focus */
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #0077b6; /* Deep blue button */
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #0096c7; /* Lighter blue on hover */
}

button:disabled {
  background-color: #b0c4de; /* Light grey when disabled */
  cursor: not-allowed;
}

small {
  font-size: 0.875rem;
  color: #0077b6; /* Light blue hint text */
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .create-article {
    width: 100%;
    max-width: 100%;
    padding: 15px;
  }

  h1 {
    font-size: 24px; /* Smaller title on mobile */
  }

  label {
    font-size: 0.9rem;
  }

  input, textarea {
    padding: 12px;
    font-size: 0.9rem;
  }

  button {
    font-size: 0.9rem;
    padding: 10px;
  }

  small {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .create-article {
    width: 100%;
    max-width: 100%;
    padding: 15px;
  }

  h1 {
    font-size: 20px; /* Even smaller title for small screens */
  }

  input, textarea {
    font-size: 0.85rem;
  }

  button {
    font-size: 0.85rem;
    padding: 10px;
  }
}
</style>
