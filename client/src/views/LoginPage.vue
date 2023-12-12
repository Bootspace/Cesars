<template>
  <Banner />
  <Header />
  <Login />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Banner from '../components/Banner.vue';
import Header from '../components/Header.vue';
import Login from '../components/Login.vue';

export default {
  name: 'loginPage'
}
</script>

