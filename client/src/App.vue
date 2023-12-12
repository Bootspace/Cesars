<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Banner from './components/Banner.vue';
import Header from './components/Header.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue'
</script>

<template class="main">
  <Banner />
  <Header />
  <!-- <Signup /> -->
  <!-- <Login /> -->
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
}

.main {
  margin: 0;
  padding: 0;
}
</style>
