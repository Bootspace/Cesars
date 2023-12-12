<template>
  <header class="navbar navbar-light bg-light" style="padding: 15px 0;">
    <div class="container-fluid">
      <span class="navbar-brand custom-brand"><h1>Cesars</h1></span>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">Signup</router-link>
        </li>
      </ul>
      <div class="d-flex">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="What are you looking for?..." aria-label="Search" aria-describedby="basic-addon1">
          <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
        </div>
      </div>
    </div>
  </header>
  <hr class="my-0" />
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.nav-link {
  color: inherit; /* Use the same color as the parent */
  transition: color 0.3s; /* Add a smooth transition for color change */
}

.nav-link:hover {
  color: #121212;
  text-decoration: underline; /* Change the color on hover */
}
</style>
