<template>
  <div class="loading">
    <img src="../assets/img/AS000712_01.gif" alt="">
  </div>
</template>

<script>
export default {
    name:'loading',
}
</script>

<style lang="scss">

.loading{
  background: rgba(white,.8);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999;
  display: flex;
  justify-content: center;
  align-items: center;  
  img{
    width: 400px;
    opacity: .9 ;
  }
}

</style>