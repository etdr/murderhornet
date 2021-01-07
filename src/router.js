import { createWebHistory, createRouter } from 'vue-router'

import Board from './components/Board/Board.vue'

const routes = [
  {
    path: '/board',
    name: 'Board',
    component: Board
  }
]





const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router