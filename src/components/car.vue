<template>
  <div class="row">
    
    <div
      class=" inner_cart bg-white border border-primary"
      :class="{ showcart: show }"
    >
      <div class="text-center mt-3 mb-3">
        <img src="../assets/img/000001_1572845909.jpg" style="width:120px" />
      </div>

      <div class="p-3">
        <div class="bg-primary">
          <div class=" title text-white d-inline-block text-center align-middle">Product title</div>
          <div class=" title text-white d-inline-block text-center align-middle">Quantity</div>
          <div class=" title text-white d-inline-block text-center align-middle">Price</div>
          <div class=" title text-white d-inline-block text-center align-middle">Delete</div>
        </div>
        <div style="height:200px" class="tb" v-if="!cart.carts.length==0">
          <div  v-for="product in cart.carts" :key="product.id" >
            <div class="d-inline-block title text-center align-middle p-3">
              {{ product.product.title }}
            </div>
            <div class="d-inline-block title text-center align-middle">{{ product.qty }}{{ product.product.unit }}</div>
            <div class="d-inline-block title text-center align-middle">{{ product.final_total }}</div>
            <div class="d-inline-block title text-center align-middle">
              <button type="button" class="btn btn-outline-danger btn-sm">
                <i class="far fa-trash-alt" @click="removeCartItem(product.id)"></i>
              </button>
            </div>         
          </div>
        </div>
        <div class="empty w-100 text-center p-3 bg-info" v-else>Your Shopping Cart is Empty!!!</div>
        <div class="w-100">
          <div class="p-3 text-right">
            <div class="d-inline-block" colspan="3" >Total</div>
            <div class="d-inline-block">$ {{ cart.total }}</div>
          </div>
          <div v-if="cart.final_total !== cart.total">
            <div colspan="3" class="text-right text-success">
              Discount Price
            </div>
            <div class="text-right text-success">{{ cart.final_total }}</div>
          </div>
        </div>
      
      <div class="input-group mb-3 input-group-sm">
        <input
          type="text"
          class="form-control"
          placeholder="Coupon_code   Try testCode ?"
          v-model="coupon_code"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="addCouponCode(coupon_code)"
          >
            addCouponCode
          </button>
        </div>
      </div>
      <div class="goTobuy d-flex flex-column">
        <button @click="show = !show" class="btn btn-primary w-100">
          Stay for a while
        </button>
        <router-link to="/checkout"
          ><button class="btn btn-primary w-100 mt-1 mb-3">
            CheckOut
          </button></router-link
        >
      </div>
      </div>
    </div>

    <div class="car-logo" @click="show = !show">
      <span class="badge badge-pill badge-success text-white">{{cart.carts.length}}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "cart",

  data() {
    return {
      show: false,
      isLoading: false,
      coupon_code: ""
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then(response => {
        console.log(response.data);
        vm.getCart();
        vm.isLoading = false;
      });
    },

    removeCartItem(id) {
      this.$store.dispatch("removeCartItem", id);
    }
  },
  computed: {
    ...mapGetters(["cart"])
  },
  created() {
    this.getCart();
  }
};
</script>
<style lang="scss" scoped>
.inner_cart {
  max-width: 500px;
  position: fixed;
  top: 10%;
  right: 5%;
  transition: all ease 0.5s;
  z-index: 999999999999999;
   
  
  border-radius: 10px;
  transform: scale(0);
}
.showcart {
  transform: scale(1);
}

.car-logo {
  cursor: pointer;
  background-image: url("../assets/img/000001_1572845909.png");
  position: fixed;
  background-size: cover;
  width: 100px;
  height: 100px;
  right: 10%;
  bottom: 5%;
  z-index: 9999999999;
}

.title{
  width: 25%;
}
.tb {
  overflow-y: scroll;
}

.scroll2::-webkit-scrollbar {
  width: 5px;
}
 
.scroll2::-webkit-scrollbar-thumb {
  background: #666; 
}


@media screen and (max-width: 767px) {
   .inner_cart{
     max-width: 100%;
   }
}


</style>
