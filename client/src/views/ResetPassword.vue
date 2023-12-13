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
              <h5>Reset Password</h5>
              <p class="mb-2">Enter your new password and confirm it
              </p>
            </div>
            <form>
              <div class="mb-3">
                <input type="password" class="form-control" name="password" placeholder="Enter new password"
                  required="">
              </div>
              <div class="mb-3">
                <input type="password" class="form-control" name="confirmPassword" placeholder="confrim new password"
                  required="">
              </div>
              <div class="mb-3 d-grid">
                <button type="submit" class="btn btn-danger">
                  COnfirm
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
  name: "Resetpassword",
  components: { Banner, Header }
}
</script>

<style scoped>

</style>