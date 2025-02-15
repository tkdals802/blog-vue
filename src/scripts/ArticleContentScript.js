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

    this.$axios.get(`http://localhost:3000/api/users/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((response) => {
      this.user = response.data;
    })
    .catch((error) => {
      router.push('/');
      console.error(error);
    });

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
        router.push('/dashboard');
      });
  },

  methods: {
    deletePost() {
      const postId = this.$route.params.id;
      const token = localStorage.getItem('JWT_token')

      this.$axios.delete(
        `http://localhost:3000/api/articles/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      ).then((response) => {
        router.push('/dashboard');
        console.log(response.status)
      });
    },
  }
};