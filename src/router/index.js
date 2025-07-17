import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guardar',
      component: () => import('../views/GuardarView.vue'),
    },
    {
      path: '/respuestas/:id',
      name: 'respuestas',
      component: () => import('../views/RespuestasView.vue'),
    },
  ],
})

export default router
