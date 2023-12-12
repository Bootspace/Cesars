import { createRouter, createWebHistory } from 'vue-router'
import signupPage from '../views/SignupPage.vue'
import loginPage from '../views/LoginPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: signupPage
    },

    {
      path: '/login',
      name: 'Login',
      component: loginPage
    },


  ]
})

export default router
