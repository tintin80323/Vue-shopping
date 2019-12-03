<template>

  <div class="container mt-3">
    <h3 class="p-4 text-primary">
      <img
        src="../assets/img/cosmetic-06-512.png"
        style="width:50px"
      />Categories
    </h3>
    <div class="row">
      <router-link class="col-md-3 text-center p-3 h5 rounded-lg" to="/Categories"
        ><a href="#">
          <img
            src="../assets/img/beauty-salon-fashion-cosmetic-ca.png"
            style="width:50px"
          />
          <p>Set</p>
        </a>
      </router-link>
      <router-link class="col-md-3 text-center p-3 h5 rounded-lg" to="/Categories"
        ><a href="#">
          <img src="../assets/img/gloss icon.png" style="width:50px" />
          <p>Ultra Glossy Lip</p>
        </a>
      </router-link>
      <router-link class="col-md-3 text-center p-3 h5 rounded-lg" to="/Categories">
        <a href="#">
          <img src="../assets/img/lipstick.png" style="width:50px" class />
          <p>Crème Lux Lipstick</p>
        </a>
      </router-link>

      <router-link class="col-md-3 text-center p-3 h5 rounded-lg" to="/Categories">
        <a href="#">
          <img src="../assets/img/eyeshaadow.png" style="width:50px" />
          <p>Shadow Palette</p>
        </a>
      </router-link>

    </div>

    <h3 class="p-4 text-primary">New Arrival</h3>

    <swiper :options="swiperOption" class>
      <!-- slides -->
      <swiper-slide v-for="product in products" :key="product.id">
        <div class="card">
          <div
            style="height: 200px; background-size: cover; background-position: center"
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
          ></div>
          <div class="card-body">
            <h5 class="card-title text-center text-secondary font-weight-bold">
              {{ product.category }}
            </h5>
            <p class="card-text text-center text-primary">
              {{ product.title }}
            </p>

            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5 text-primary" v-if="!product.price">
                $ {{ product.origin_price }}
              </div>
              <del class="h6 text-primary" v-if="product.price"
                >origin price ${{ product.origin_price }}</del
              >
              <div class="h5 w-100 text-primary" v-if="product.price">
                Only ${{ product.price }} Now
              </div>
            </div>

            <div class="cardbuyer d-flex flex-column">
              <router-link
                :to="`/categories/${product.id}`"
                class="w-100 bg-light text-primary text-center mt-1"
                >Detailed</router-link
              >
              <button
                type="button"
                class="w-100 bg-light text-primary text-center mt-1"
                @click="addToCart(product.id, product.title)"
              >
                addCart
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination d-none" slot="pagination"></div>

      <!-- Optional controls -->
    </swiper>
  </div>
</template>

<script>
import{mapGetters,mapActions} from 'vuex';

import $ from "jquery";
import "swiper/dist/css/swiper.css"; // require styles
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Product",
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        speed: 600,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      },
      status: {
        loadingItem: ""
      },
    };
  },
  methods: {
    getProducts(page = 1) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;       
      this.$store.dispatch('getProducts',api);
    },
    getCart() {
      this.$store.dispatch('getCart');
    },
    addToCart(id, title, qty=1) {
      this.$store.dispatch('addToCart',{id,qty})
    },
  },
  computed:{ 
    ...mapGetters(['products','cart'])
  },

  components: {
    swiper,
    swiperSlide,
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>

<style lang="scss"></style>
