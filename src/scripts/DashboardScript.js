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

        this.$axios
            .get('http://localhost:3000/api/articles',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            .then((response) => {
                this.posts = response.data.articles;

                this.$axios.get(`http://localhost:3000/api/users/${user_id}`,
                    {
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
                    })
            })
            .catch((error) => {
                router.push('/')
                console.error(error);
            });

        this.getCategories();
    },

    computed: {
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
            if (keyword !== '') {
                this.$router.push({path: '/search', query: {keyword}})
            }
        },

        goToCreatePost() {
            this.$router.push('/createpost');
        },

        logout(){
            const authStore = useAuthStore();
            authStore.logout();
        },

        getCategories() {
            const token = localStorage.getItem('JWT_token');
            this.$axios.get(
                'http://localhost:3000/api/categories',
                {
                    headers: {
                        Authorization: `Bearer ${token}`  // 백틱을 사용하여 템플릿 문자열을 사용해야 합니다
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