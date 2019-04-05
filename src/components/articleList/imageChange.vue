<template>
    <div class="swiper-container">
      <swiper class="swiper-wrapper"ref="mySwiper"@someSwiperEvent="callback":options="swiperOption">
        <div class="swiper-slide">
          <img src="../../../static/images/shutter_1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/shutter_2.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/shutter_3.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/shutter_4.jpg">
        </div>
      </swiper>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev my-button-hidden" slot="button-prev" @click="prev"></div>
      <div class="swiper-button-next" @click="next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "jquery/dist/jquery.min.js";
import "swiper/dist/css/swiper.css";

export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        autoHeight: false,
        direction: "horizontal",
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
        },
        effect:'cube',
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hiddenClass: "my-button-hidden"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
     
  },
  methods: {
    prev() {
      this.swiper.slidePrev(500, false);
    },
    next() {
      this.swiper.slideNext(500, false);
    }
  },
  components: { swiper, swiperSlide }
};
</script>

<style scoped>
.swiper-container {
  width: 800px;
  height: 358px;
}
</style>



