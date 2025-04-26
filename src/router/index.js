import { createRouter, createWebHistory } from 'vue-router'
import CharityPage from '../views/CharityPage.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView

  },
  {
    path: '/charity',
    name: 'Charity',
    component: CharityPage
  },
  {
    path: '/homeview',
    name: 'HomeView',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
