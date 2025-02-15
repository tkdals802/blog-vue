import "../style/CreatePostStyle.css"

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
  methods: {

    // , を基準にtagを分離
    updateTags() {
      this.form.tags = this.form.tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    },

    async submitForm() {
      const data = {
        article: {
          title: this.form.title,
          content: this.form.content,
          category_name: this.form.category_name,
          tags: this.form.tags
        }
      };

      //create post api
      try {
        const token = localStorage.getItem('JWT_token')
        await this.$axios.post(
            'http://localhost:3000/api/articles',
            data,
            {
            headers:{
              Authorization: `Bearer ${token}`,//check token
            }
          });

        // Success message
        this.message = 'Article successfully created!';
        this.messageType = 'alert alert-success';
        this.$router.push('/dashboard'); //文を作成した後、main pageに移動
      } catch (error) {
        console.log(error)
      }
    },
  }
};