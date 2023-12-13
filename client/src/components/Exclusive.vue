<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-1 col-lg-1"></div>

          <!-- Left Section (Visible on Large Screens) -->
        <div class=" col-4 col-lg-3 d-none d-lg-block">
          <div class="container mt-4 p-2">
            <ul class="list-unstyled">
            <li class="p-2"><a href="#">Headsets</a></li>
            <li class="p-2"><a href="#">Phones</a></li>
            <li class="p-2"><a href="#">Computers</a></li>
            <li class="p-2"><a href="#">Smartwatches</a></li>
            <li class="p-2"><a href="#">Cameras</a></li>
            <li class="p-2"><a href="#">Gaming</a></li>
          </ul>
          </div>
        </div>

          <!-- Right Section (Visible on All Screens) -->
        <div class="col-12 col-lg-7">
            <img src="../../public/framer.jpg" alt="Photos" class="img-fluid">
        </div>
        <div class="col-1 col-lg-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exclusive'
  }
</script>

<style scoped>
  .col-4 a {
      color: #000;
      text-decoration: none;
  }

  .col-4 li {
      color: #fff;
      transition: color 0.5s ease;
  }

  .col-4 li:hover {
    background-color: rgb(246, 241, 241);

  }
</style>