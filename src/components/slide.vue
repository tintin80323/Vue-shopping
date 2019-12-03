<template>
<div>
  <swiper :options="swiperOption" class="mt-5">
    <!-- slides -->
    <swiper-slide>
      <div class="slide slide-1"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-2"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-3"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-4"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-5"></div>
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination d-none" slot="pagination"></div>
    <div class="swiper-button-prev d-none" slot="button-prev" ></div>
    <div class="swiper-button-next d-none" slot="button-next"></div>
    <div class="swiper-scrollbar d-none" slot="scrollbar"></div>
  </swiper>
  </div>
</template>
<script>
import $ from "jquery";
import "swiper/dist/css/swiper.css"; // require styles
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "slide",
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 400,
        autoplay: {
          delay: 2000
        },
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        effect: "coverflow",
        grabCursor: true,
        coverflowEffect: {
          rotate: 50, // Slide rotate in degrees
          stretch: 0, // Stretch space between slides (in px)
          depth: 100, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: true // Enables slides shadows
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  max-width: 1080px;
  width: 100%;
  height: 380px;
}
.swiper-slide {
  width: 50%;
  background-position: center;
  background-size: cover;
  position: relative;
  .slide {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    &.slide-1 {
      background-image: url("../assets/img/Elsa-Palette_D-Angled-copy_680x.png");
    }
    &.slide-2 {
      background-image: url("../assets/img/Frozen-2-PR-Box-Stack-Anna-copy.png");
    }
    &.slide-3 {
      background-image: url("../assets/img/Frozen-2-PR-Box-Stack-Elsa-copy.png");
    }
    &.slide-4 {
      background-image: url("../assets/img/photo-5dcba884de71b.jpg");
    }
    &.slide-5 {
      background-image: url("../assets/img/photo-5dcbb05cd32dc.jpg");
    }
  }
}

.swiper-slide-prev,
.swiper-slide-next {
  background: #fff;
  opacity: 0.3;
  transition: all 0.3s;
}

@media screen and (max-width: 640px) {
  .swiper-container {
    height: 280px;
  }
  .swiper-slide {
    width: 80%;
  }
}
</style>
