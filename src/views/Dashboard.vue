<template>
<div>
<DashboardNav></DashboardNav>
<AlertMessage></AlertMessage>
      <div class="row">    
          <DashboardSide></DashboardSide>   
        <main role="main" class="col-md-10 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
</div>    
</template>
<script>
import DashboardNav from "@/components/DashboardNav.vue"
import DashboardSide from "@/components/DashboardSide.vue"
import AlertMessage from "@/components/AlertMessage.vue"

export default { 
    components:{
        DashboardNav,
        DashboardSide,
        AlertMessage,
    }
}
</script>

<style lang="scss" scoped>

</style>