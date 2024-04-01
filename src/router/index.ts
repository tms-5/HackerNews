import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/TableView.vue')
    },
    {
      path: '/story/:id',
      name: 'story',
      component: () => import('../views/StoryView.vue')
    }
  ]
})

export default router
