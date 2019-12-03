<template>
  <div class="row">
    <div class="container">
      <div class="col-md-4 mx-auto border border-primary rounded-lg">
        <form class="form-signin" @submit.prevent="signin">
          <div class="mb-4 text-center"><img           
            src="../assets/img/Elsa_from_Disney's_Frozen.png"
            alt
            width="112"
            height="222"            
           /></div>
          <h1 class="h3 mb-3 font-weight-normal text-primary text-center">
           Background login interface</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            v-model="user.username"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control mt-1"
            v-model="user.password"
            placeholder="Password"
            required
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" class="mt-4" /> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p class="mt-2 mb-3 text-muted text-center">&copy; 2018-2019</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;

      this.$http.post(api,vm.user).then(response => {
        if(response.data.success){
            vm.$router.push('/admin/products')
        }      
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container{
    position: fixed;
    top:20%;
    left: 20%;
}
</style>