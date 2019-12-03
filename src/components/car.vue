<template>
  <div class="row">
    <loading :active.sync="isLoading" :is-full-page="true">       
        <template slot="default">
         <img src="../assets/img/AS000712_01.gif">
        </template>     
    </loading>
    <div class=" inner_cart bg-white border border-primary" :class="{'showcart':show}">
       <div class="text-center mt-3 mb-3"><img src="../assets/img/000001_1572845909.jpg"  style="width:120px"></div>

      <table class="table">
        <thead class="bg-primary">         
          <th class="text-center text-white">Product title</th>
          <th class="text-center text-white">Quantity</th>
          <th class="text-center text-white">Price</th> 
          <th class="text-center text-white">Delete</th>       
        </thead>
        <tbody class="tbody text-center">
          <tr v-for="product in cart.carts" :key="product.id">          
            <td class="">
              {{ product.product.title }}
              <!-- <div class="text-success" v-if="item.coupon">
               已套用優惠券
              </div>-->
            </td>
            <td class="">{{ product.qty }}{{ product.product.unit }}</td>
            <td class="">{{ product.final_total }}</td>
            <td class="">
              <button type="button" class="btn btn-outline-danger btn-sm">
                <i class="far fa-trash-alt" @click="removeCartItem(product.id)"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-right">Total</td>
            <td class="text-right">$ {{ cart.total }} </td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-right text-success">Discount Price</td>
            <td class="text-right text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input type="text" class="form-control" placeholder="Coupon_code   Try testCode ?" v-model="coupon_code"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"  @click="addCouponCode(coupon_code)">
            addCouponCode
          </button>
        </div>
      </div>
      <div class="goTobuy d-flex flex-column">
        <button @click="show=!show" class="btn btn-primary w-100">Stay for a while</button>
        <router-link to="/checkout" ><button class="btn btn-primary w-100 mt-1 mb-3">CheckOut</button></router-link>
      </div>
    </div>

    <div class="car-logo" @click="show=!show" >
       <span class="badge badge-pill badge-success text-white">{{cart.carts.length}}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "cart",

  data() {
    return {
      
      show:false,
      isLoading:false,
      coupon_code:'',
    };
  },
  methods: {
    getCart() {
     this.$store.dispatch('getCart');
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then(response => {
        console.log(response.data)
        vm.getCart();
        vm.isLoading = false;
      });
    },

    removeCartItem(id) {
      this.$store.dispatch('removeCartItem',id);
    },
  },
  computed:{
    ...mapGetters(['cart'])
  },
  created() {
    this.getCart();
  }
};
</script>
<style lang="scss" scoped>

.inner_cart {
  width: 410px;
  position: fixed;
  top: 10%;
  right: 5%;
  transition: all ease 0.5s;
  z-index: 999999999999999;
  padding: 15px;
  border-radius:10px;
  transform: scale(0)
}
.showcart{
  transform: scale(1) 
}

.car-logo{
  cursor:pointer;
  background-image: url('../assets/img/000001_1572845909.png');
  position: fixed;
  background-size: cover;
  width: 100px;
  height:100px;
  right: 10%;
  bottom: 5%;
  z-index: 9999999999;
}

@media screen and (max-width: 640px) {
  .inner_cart{
    width: 80%;
  }
}






</style>
