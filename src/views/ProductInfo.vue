<template>
  <div>
    <Navbar></Navbar>
    <div class="container mx-auto">
      <img class="banner-img" src="../assets/img/Collection-Banner-Frozen-D.gif" />
      <div class="row">
        <div class="col-md-6 mt-5">
          <img :src="product.imageUrl" class="w-100" alt />
        </div>
        <div class="col-md-6 mb-5 mt-5">
          <div style="top: 10px;">
            <h3 class="text-primary font-weight-bold">{{ product.title }}</h3>
            <div class="d-flex my-3 align-items-end justify-content-end">
              <del class="text-muted">Orignal Price {{ product.origin_price }}$</del>
              <div class="h3 mb-0 ml-auto text-primary">
                <small>Online discount USD$</small>
                <strong>{{ product.price }}</strong>
              </div>
            </div>
            <hr />

            <div class="row input-group mt-3">
              <select name class="form-control mr-1 col-md-7" v-model="product.num">
                <option :value="num" v-for="num in 10" :key="num">{{ num }} {{ product.unit }}</option>
              </select>
              <button
                class="btn btn-secondary text-white col-md-5"
                @click="
                  addToCart(product.id, product.tite, product.num);
                  getCart();
                "
              >
                Total: ${{product.num*product.price}}
                <i class="fas fa-shopping-cart ml-3"></i>
                addCart
              </button>
            </div>
          </div>

          <div class="alert-light mt-4 " role="alert">
            <h2>Product Content</h2>
            <p class="h5">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <Car></Car>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Car from "@/components/Car.vue";

export default {
  name: "categories",

  data() {
    return {
      productId: "",
      product: [],
      isLoading: false
    };
  },

  methods: {
    getProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.product = response.data.product;
        vm.isLoading = false;
      });
    },
    getCart() {
      this.$store.dispatch("getCart");
    },
    addToCart(id, title, qty = 1) {
      this.$store.dispatch("addToCart", { id, qty });
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    cart() {
      return this.$store.state.cart;
    }
  },

  components: {
    Navbar,
    Footer,
    Car
  },

  created() {
    this.productId = this.$route.params.productId;

    console.log(this.productId);
    this.getProduct();
  }
};
</script>

<style lang="scss">
.container .banner-img {
  max-width: 100%;
}
</style>
