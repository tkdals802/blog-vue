<template>
  <div class="create-article">
    <h1>Create Post</h1>

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
      <button type="submit" class="btn btn-submit">Submit</button>
    </form>

    <!-- Success/Error Messages -->
    <div v-if="message" :class="messageType">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import createPostScript from "../scripts/CreatePostScript.js";

export default {
  ...createPostScript
}

</script>


