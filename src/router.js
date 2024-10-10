import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import MovieView from './pages/MovieView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/movie/:id', name: 'movie', component: MovieView, props: true },
  ],
})