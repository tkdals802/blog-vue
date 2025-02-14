import {useRouter} from "vue-router";

export default {
  data() {
    return {
      posts: [],
      user: null,
      inputText: ''
    };
  },
  created() {
    console.log(this.$axios);

    const keyword = this.$route.query.keyword;

    if (keyword) {
      this.searchPosts(keyword);  // 검색어를 통해 게시물 가져오기
    }

    const router = useRouter();
    const token = localStorage.getItem('JWT_token')
    const user_id = localStorage.getItem('user_id')

    this.$axios
      .get('http://localhost:3000/api/articles/search',
          {
              params: {keyword},
              headers:{
                  Authorization: `Bearer ${token}`,
              }
          })
      .then((response) => {
        this.posts = response.data.articles;

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
      })
      .catch((error) => {
        router.push('/')
        console.error(error);
      });
  },

    methods:{
      searchPosts(){
          const keyword = this.inputText;
          if (keyword!==''){
              this.$router.push({ path: '/search', query: {keyword} })
          }
      }
    }
};