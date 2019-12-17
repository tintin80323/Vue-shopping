<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-5 background">
          <img src="" style="" />
        </div>
        <div class="col-md-7 d-flex flex-column">
          <div class="text-primary w-100 text-center mt-5 text-content">
            <h1>Coupon Code</h1>

            <h1 class="text-danger mt-5 mb-5 h1">testCode</h1>

            <h4 class="mt-3 mb-3">All Products 70% off</h4>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss">
.background {
  background-image: url("../assets/img/background-3.png");
  background-position: center;
  background-size: cover;
  height: 500px;
}

.text-content {
  .h1 {
    text-shadow: 0px -1px 4px white, 0px -2px 10px yellow,
      0px -10px 20px #ff8000, 0px -18px 40px red;
  }
}
</style>
