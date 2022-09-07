import { createRouter, createWebHistory } from 'vue-router'
import SimpleCalculatorView from '../views/SimpleCalculatorView.vue'
import StringManipulationView from '../views/StringManipulationView.vue'
import VuetifyView from '../views/VuetifyView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import QuizView from '../views/QuizView.vue'
import HomeView from '../views/StringManipulationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/StringManipulationView',
      name: 'StringManipulationView',
      component: StringManipulationView
    },
    {
    path: '/SimpleCalculatorView',
    name: '/SimpleCalculatorView',
    component: SimpleCalculatorView
    },
    {
      path: '/VuetifyView',
      name: '/VuetifyView',
      component: VuetifyView
    },
    {
    path: '/AboutMeView',
    name: '/AboutMeView',
    component: AboutMeView
    },
    {
      path: '/QuizView',
      name: '/QuizView',
      component: QuizView
    },
  ]
})

export default router
