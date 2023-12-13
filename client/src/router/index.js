import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/Homepage.vue';
import signupPage from '../views/SignupPage.vue'
import loginPage from '../views/LoginPage.vue'
import forgotPassword from '../views/ForgotPassword.vue';
import resetPassword from '../views/ResetPassword.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homePage
    },

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

    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: forgotPassword
    },

    {
      path: '/resetpassword',
      name: 'ResetPassword',
      component: resetPassword
    }
  ]
})

export default router
