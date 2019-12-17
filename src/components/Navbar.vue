<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/">
        <a class="nav-link active" href="#">
          <img src="../assets/img/雪-02.png" width="100px" />
        </a>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>

        <router-link class="nav-link" to="/login">
          <a class="nav-link align-self-center h6" href="#" tabindex="-1">
            Manager
            <i class="fas fa-user"></i>
          </a>
        </router-link>

        <router-link class="nav-link" to="/checkout">
          <a class="nav-link align-self-center h6" href="#" tabindex="-1">
            Shopping Cart
            <i class="fas fa-shopping-cart"></i>({{ cart.carts.length }})
          </a>
        </router-link>
      </div>
    </nav>
    <div class="row p-4">
      <router-link
        to="/CustomCoupon"
        class="col-md-3 text-center h5 rounded-lg"
      >
        <a href="#">CustomCoupon</a>
      </router-link>
      <router-link to="/Categories" class="col-md-3 text-center h5 rounded-lg">
        <a href="#">LEGO</a>
      </router-link>
      <router-link to="/Categories" class="col-md-3 text-center h5 rounded-lg">
        <a href="#">Crème Lux Lipstick</a>
      </router-link>
      <router-link to="/Categories" class="col-md-3 text-center h5 rounded-lg">
        <a href="#">Shadow Palette</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["cart", "status"])
  }
};
</script>

<style scope></style>
