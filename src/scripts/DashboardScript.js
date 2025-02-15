import {useRouter} from "vue-router";
import {useAuthStore} from "../store/authStore.js";

export default {
    data() {
        return {
            posts: [],
            user: null,
            inputText: '',
            selectedCategory: '',
            categories: [],
        };
    },
    created() {
        const router = useRouter();
        const token = localStorage.getItem('JWT_token')
        const user_id = localStorage.getItem('user_id')

        //すべてのpost listをget
        this.$axios
            .get('http://localhost:3000/api/articles',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,//check token
                    }
                })
            .then((response) => {
                this.posts = response.data.articles;

                //userの情報を検索
                this.$axios.get(`http://localhost:3000/api/users/${user_id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,//check token
                        }
                    })
                    .then((response) => {
                        this.user = response.data;
                    })
                    .catch((error) => {
                        router.push('/');
                        console.error(error);　//errorが出来たらlogin pageに移動
                    })
            })
            .catch((error) => {
                router.push('/')
                console.error(error);//errorが出来たらlogin pageに移動
            });

        this.getCategories();
    },

    computed: {
        //vue.jsの中でcategoryでpostをfiltering

        filteredCategory() {
            return this.posts.filter(post => {
                const matchesCategory = this.selectedCategory ? post.category_name === this.selectedCategory : true;
                console.log(matchesCategory)
                return matchesCategory;
            });
        }
    },

    methods: {

        searchPosts() {
            const keyword = this.inputText;
            if (keyword !== '') { //input textがなければ検索しない
                this.$router.push({path: '/search', query: {keyword}})
            }
        },

        goToCreatePost() {
            this.$router.push('/createpost');　//create post pageに移動
        },

        logout(){
            const authStore = useAuthStore();
            authStore.logout();　//delete token, user_id
        },

        //main pageのcategories listのために get all categories api
        getCategories() {
            const token = localStorage.getItem('JWT_token');
            this.$axios.get(
                'http://localhost:3000/api/categories',
                {
                    headers: {
                        Authorization: `Bearer ${token}`  // check token
                    }
                }
                )
                .then((response) => {
                    this.categories = response.data;
                })
                .catch((error) => {
                    console.error("Error fetching categories:", error);
                });
        }
    }
}