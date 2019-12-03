<template>
  <div>
    <Navbar></Navbar>
    <div class="text-center mb-3 mt-3">
      <img src="../assets/img/Anna_Frozen.png" style="width:75px" />
    </div>
    <div class="col-md-6 mx-auto">
      <table class="table">
        <thead>
          <th></th>
          <th class="text-center">Product title</th>
          <th class="text-center">Quantity</th>
          <th class="text-center">Price</th>
        </thead>
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id">
            <td class="align-middle">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item.id)"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
            <td class="text-center">
              {{ item.product.title }}
              <!-- <div class="text-success" v-if="item.coupon">
          已套用優惠券
              </div>-->
            </td>
            <td class="text-center">{{ item.qty }} {{ item.product.unit }}</td>
            <td class="text-center">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-right">Total</td>
            <td class="text-right">{{ cart.total }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-right text-success">Discount Price</td>
            <td class="text-right text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="creatOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="useremail"
            :class="{'is-invalid':errors.has('email')}"
            v-model="form.user.email"
            placeholder="Please enter your E-mail"
            v-validate="'required|email'"
          />
          <span class="text-danger">{{errors.first('email')}}</span>
        </div>

        <div class="form-group">
          <label for="username">Recipient</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="username"
            :class="{'is-invalid':errors.has('name')}"
            v-model="form.user.name"
            placeholder="Please enter your Name"
            v-validate="'required'"
          />
          <span class="text-danger" v-if="errors.has('name')">Please enter your Name</span>
        </div>

        <div class="form-group">
          <label for="usertel">Recipient Tel</label>
          <input
            type="tel"
            class="form-control"
            id="usertel"
            v-model="form.user.tel"
            placeholder="Please enter your Phone"
          />
        </div>

        <div class="form-group">
          <label for="useraddress">Address</label>
          <input
            type="text"
            class="form-control"
            name="address"
            id="useraddress"
            v-model="form.user.address"
            placeholder="Please enter your Address"
          />
          <span class="text-danger">Please enter your Address</span>
        </div>

        <div class="form-group">
          <label for="comment">Leave your Message</label>
          <textarea
            name
            id="comment"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger">Send Order</button>
        </div>
      </form>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      coupon_code: "",
      form: {
        user: {
          name: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    removeCartItem(id) {
      this.$store.dispatch("removeCartItem", id);
    },
    creatOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const vm = this;
      const order = vm.form;
      // vm.isLoading = true;
      this.$validator.validate().then(result => {
        if (result) {
          // 當驗證成功時執行 AJAX 的行為
          this.$http.post(api, { data: order }).then(response => {
            console.log("訂單已建立", response);
            if (response.data.success) {
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
            vm.isLoading = false;
          });
        } else {
          // 驗證失敗產生的行為
          console.log("欄位不完整");
        }
      });
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  components: {
    Navbar,
    Footer
  },
  created() {
    this.getCart();
  }
};
</script>
<style lang="scss" scoped>
</style>