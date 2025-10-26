import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/landing-page/LandingPage.vue'
import ScrollerPage from '../views/scroller-page/ScrollerPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'LandingPage', component: LandingPage },
    { path: '/scroller-page', name: 'ScrollerPage', component: ScrollerPage },
  ],
})

export default router
