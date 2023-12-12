<template>
  <Banner />
  <Header />
  <Signup />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Banner from '../components/Banner.vue';
import Header from '../components/Header.vue';
import Signup from '../components/Signup.vue';

export default {
  name: 'signupPage'
}
</script>

