<template>
  <div class="home">
    <Navbar></Navbar>
    <slide></slide>
    <Product></Product>
    <car></car>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import slide from '@/components/slide.vue'
import Product from '@/components/Product.vue'
import car from '@/components/car.vue'
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    slide,
    Product,
    car,
    Footer,
  }
}
</script>
