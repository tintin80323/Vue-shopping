<template>
  <div>
    <Navbar></Navbar>
    <slide></slide>
    <div class="row categories mt-5">
      <div class="col-md-2">
        <div class="list-group">
          <button
            class="list-group-item list-group-item-action"
            @click="categories = '所有商品'"
          >
            ALL
          </button>
          <button
            class="list-group-item list-group-item-action"
            @click="categories = 'Ultra Glossy Lip'"
          >
            Ultra Glossy Lip
          </button>
          <button
            href="#"
            class="list-group-item list-group-item-action"
            @click="categories = 'Crème Lux Lipstick'"
          >
            Crème Lux Lipstick
          </button>
          <button
            href="#"
            class="list-group-item list-group-item-action"
            @click="categories = 'Kit'"
          >
            Kit
          </button>
          <button
            href="#"
            class="list-group-item list-group-item-action"
            @click="categories = 'Set'"
          >
            Set
          </button>
        </div>
      </div>
      <div class="col-md-10">
        <div
          class="card mb-3 mr-3"
          v-for="product in filterData"
          :key="product.id"
        >
          <div
            style="height: 200px; background-size: cover; background-position: center"
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
          >
            <span class="badge badge-info">{{ product.category }}</span>
          </div>
          <div class="card-body">
            <h5 class="card-title text-center text-secondary font-weight-bold ">
              {{ product.category }}
            </h5>
            <p class="card-text text-center text-primary">
              {{ product.title }}
            </p>

            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5 text-primary" v-if="!product.price">
                ${{ product.origin_price }}
              </div>
              <del class="h6 text-primary" v-if="product.price"
                >Orignal Price {{ product.origin_price }}</del
              >
              <div class="h5 text-primary" v-if="product.price">
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
      </div>
    </div>
    <car></car>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import slide from "@/components/slide.vue";
import car from "@/components/car.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {     
      categories: "所有商品",
    };
  },

  methods: {
    getProducts(page = 1) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;       
      this.$store.dispatch('getProducts',api);
    },
    addToCart(id, title, qty = 1) {
      this.$store.dispatch('addToCart',{id,qty})
    }
  },


  computed: {
    filterData() {
      const vm = this;
      if (vm.categories === "所有商品") {
        return vm.products;
      } else {
        return vm.products.filter(
          product => product.category === vm.categories
        );
      }
    },
    products(){
      return this.$store.state.products;
    },
    cart(){
      return this.$store.state.cart
    }
  },

  components: {
    Navbar,
    slide,
    Footer,
    car
  },

  created() {
    this.getProducts();
  }
};
</script>
<style lang="scss" scoped>
.categories {
  max-width: 1240px;
  margin: 0 auto;
}

.card {
  float: left;
}

@media screen and (max-width: 767px) {
  .card {
    width: 100%;
  }
}
</style>
