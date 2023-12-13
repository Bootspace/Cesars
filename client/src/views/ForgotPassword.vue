<template>
  <Banner />
  <Header />
  <div class="container d-flex flex-column">
    <div class="row align-items-center justify-content-center
        min-vh-100 g-0">
      <div class="col-12 col-md-8 col-lg-4 border-top border-3 border-danger">
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="mb-4">
              <h5>Forgot Password?</h5>
              <p class="mb-2">Enter your registered email ID to reset the password
              </p>
            </div>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" class="form-control" name="email" placeholder="Enter Your Email"
                  required="">
              </div>
              <div class="mb-3 d-grid">
                <button type="submit" class="btn btn-danger">
                  Reset Password
                </button>
              </div>
              <span>Don't have an account? <a href="/signup">sign up</a></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import Header from '../components/Header.vue';
// import Footer from '../components/Footer.vue';

export default {
  name: "Forgotpassword",
  components: { Banner, Header }
}
</script>

<style lang="scss" scoped>

</style>