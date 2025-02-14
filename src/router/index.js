import { createRouter, createWebHistory } from 'vue-router';
import {useAuthStore} from "../store/authStore.js";
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';
import ArticleContentView from "../views/ArticleContentView.vue";
import SearchedArticleView from "../views/SearchedArticleView.vue";
import SignUp from "../views/SignUp.vue";
import CreatePostView from "../views/CreatePostView.vue";
import UpdatePostView from "../views/UpdatePostView.vue";


const routes = [
  { path: '/', component: LoginView },
  { path: '/signup', component: SignUp },
  { path: '/dashboard', component: DashboardView, meta: {requiresAuth: true} },
  { path: '/post/:id', component: ArticleContentView, props: true, meta: {requiresAuth: true} },
  { path: '/search', component: SearchedArticleView, props: true, meta: {requiresAuth: true} },
  { path: '/createpost', component: CreatePostView, props: true, meta: {requiresAuth: true} },
  { path: '/updatepost/:id', component: UpdatePostView, props: true, meta: {requiresAuth: true} },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
