<template>
  <div>
    <Banner />
    <Header />
    <main>
      <Exclusive/>
    </main>

    <Footer />

  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import Header from '../components/Header.vue';
import Exclusive from '../components/Exclusive.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Homepage',
  components: { Banner, Header, Footer, Exclusive }
}
</script>

<style scoped>

</style>