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
    const keyword = this.$route.query.keyword;

    if (keyword) {
      this.searchPosts(keyword);  // search keywordを通して検索
    }

    const router = useRouter();
    const token = localStorage.getItem('JWT_token')
    const user_id = localStorage.getItem('user_id')


    this.$axios
      .get('http://localhost:3000/api/articles/search', //title 検索api
          {
              params: {keyword},
              headers:{
                  Authorization: `Bearer ${token}`,//check token
              }
          })
      .then((response) => {
        this.posts = response.data.articles;

        this.$axios.get(`http://localhost:3000/api/users/${user_id}`,//userの情報をget
            {
              headers:{
                Authorization: `Bearer ${token}`,//check token
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
          if (keyword!==''){ //input textがなければ検索しない
              this.$router.push({ path: '/search', query: {keyword} })//検索した後page移動
          }
      }
    }
};