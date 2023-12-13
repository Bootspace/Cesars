<!-- Signup.vue -->

<template>
  <Banner />
  <Header />
  <div class="signup-container">
    <div class="signup-image">
      <img src="../../public/signup.jpg" alt="signup_image" class="resizable-image">
    </div>
    <div class="signup-form-container">
      <h1>Create An Account</h1>
      <p>Enter your details below</p>
      <div class="container mb-3">
        <form @submit.prevent="submitForm">
        <div class="mb-3">
          <input type="text" class="form-control form-control-sm rounded-0 border-bottom p-3" id="name" v-model="name" required placeholder="Name" />
        </div>
        <div class="mb-3">
          <input type="email" class="form-control form-control-sm rounded-0 border-bottom p-3" id="email" v-model="email" required placeholder="email" />
        </div>
        <div class="mb-3">
          <input type="tel" class="form-control form-control-sm rounded-0 border-bottom p-3" id="phone" v-model="phone" required  placeholder="phone"/>
        </div>
        <div class="mb-3">
          <input type="password" class="form-control form-control-sm rounded-0 border-bottom p-3" id="password" v-model="password" required placeholder="password" />
        </div>
        <div class="mb-3">
          <input type="password" class="form-control form-control-sm rounded-0 border-bottom p-3" id="confirmPassword" v-model="confirmPassword" required  placeholder="confirm password"/>
        </div>
        <button type="submit" class="btn btn-danger btn-lg mx-auto d-block custom-submit-button">Create Account</button>
        <p class="mb-4 p-3 text-center"> Already have an account? <span><a href="/login">Log in</a></span></p>

      </form>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Banner from '../components/Banner.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'SignupPage',
  components: {
    Banner,
    Header,
    Footer
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    submitForm() {
      // Add your form submission logic here
      console.log('Form submitted:', this.name, this.email, this.phone, this.password, this.confirmPassword);
    },
  },
};
</script>

<style scoped>
/* Add any custom styling here if needed */
.signup-container {
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-right: 50px;
  margin-left: 50px;
}

.signup-image {
  /* Add styling for the image container */
  max-width: 50%;
  padding-right: 20px;
}

.resizable-image {
    max-width: 100%;
    height: 100%;
    object-fit:cover;
  }

.signup-form-container {
  width: 50%; /* Adjust the width as needed */
  padding-right: 50px;
}

/* Add styling for the input fields with bottom borders */
.border-bottom {
  border-top: none;
  border-left: none;
  border-right: none;
}

/* Increase the width of the submit button */
.custom-submit-button {
  width: 70%;
}

/* Responsive styles for phones and tablets */
@media (max-width: 768px) {
  .signup-container {
    flex-direction: column;
  }

  .signup-form-container {
    width: 100%;
  }
}
</style>
