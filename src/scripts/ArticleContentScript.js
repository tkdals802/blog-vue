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

    //userの情報 get api
    this.$axios.get(`http://localhost:3000/api/users/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`, //check token
      }
    })
    .then((response) => {
      this.user = response.data;
    })
    .catch((error) => {
      router.push('/');
      console.error(error);//errorが出来たらlogin pageに移動
    });

    //article情報をget
    this.$axios
      .get(`http://localhost:3000/api/articles/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,//check token
        },
      })
      .then((response) => {
        this.post = response.data;
      })
      .catch((error) => {
        console.error(error);
        router.push('/dashboard');//errorが出来たらmain pageに移動
      });
  },

  methods: {
    deletePost() {
      const postId = this.$route.params.id;
      const token = localStorage.getItem('JWT_token')

      //postのdelete api
      this.$axios.delete(
        `http://localhost:3000/api/articles/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,//check token
          }
        }
      ).then((response) => {
        router.push('/dashboard'); //削除した後main pageに移動
        console.log(response.status)
      });
    },
  }
};