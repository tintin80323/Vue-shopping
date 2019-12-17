<template>
  <div id="app" class="app">
    <loading v-if="isLoading" ></loading>
    <router-view />
  </div>
</template>

<script>
import loading from "../src/components/Loading"
export default {
  components: {
   loading,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>
<style lang="scss">
@import "./assets/all";



</style>
