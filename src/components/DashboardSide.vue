<template>
  <div>
      <div class="row">
    <nav class="col-md-2 d-none d-md-block bg-light  sidebar">
      <div class="sidebar-sticky">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3  mb-1 text-muted"
        >
          <span>Manager</span>
          <a class="d-flex align-items-center text-muted mb-5" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to= "/admin/products">
            <i class="fas fa-boxes mr-2"></i>Product List</router-link>
          </li>
        </ul>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to= "/admin/Coupon">
             <i class="fas fa-money-bill-wave-alt mr-2"></i>Coupon</router-link>
          </li>
        </ul>

        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to= "/admin/Orderlist">
             <i class="fas fa-list mr-2"></i>Order List</router-link>
          </li>
        </ul>

         <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        
      </div>
    </nav>
    </div>
  </div>
</template>
<script>
export default {
    name:'DashboardSide',
}
</script>
<style lang="scss" scoped>

</style>