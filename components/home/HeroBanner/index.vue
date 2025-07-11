<script setup lang="ts">
import styles from "./style.module.scss";
import clsx from "clsx";
import { Images } from "~/assets/images";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Icons } from "~/assets/icons";
import Price from '~/components/common/Price/index.vue'

const slides = [
  {
    badge: 'Complete Bundle',
    title: 'All-in-one Troubleshooting',
    desc: 'The Complete Bundle brings together spectrum analysis from Chanalyzer and live packet analysis from MetaGeek App for a complete professional troubleshooting solution.',
    price: 999,
    img: Images.HeroBg,
  },
  {
    badge: 'Pro Bundle',
    title: 'Advanced Wi-Fi Analysis',
    desc: 'Get advanced tools for Wi-Fi troubleshooting and analysis, perfect for professionals who need more insights.',
    price: 1299,
    img: Images.HeroBg,
  },
];

const swiperRef: Ref<any> = ref(null);
const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
};
const goPrev = () => {
  if (swiperRef.value) swiperRef.value.slidePrev();
};
const goNext = () => {
  if (swiperRef.value) swiperRef.value.slideNext();
};
</script>

<template>
  <section :class="clsx(styles.sectionContainer, 'w-full flex items-center relative')">
    <span
      :class="clsx(styles.shapeContainer, 'absolute right-0 bottom-0 lg:bottom-auto lg:top-28 top-auto z-0 lg:block hidden')">
      <img :src="Images.HeroBgShape" alt="section-img" />
    </span>
    <Swiper :slides-per-view="1" :loop="true" :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :modules="[Autoplay]" class="w-full" @swiper="onSwiper">
      <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
        <div :class="clsx(styles.customContainer, 'grid lg:grid-cols-2 grid-cols-1 gap-16 w-full lg:py-0 py-8')">
          <div
            :class="clsx(styles.contentContainer, 'flex flex-col gap-5 lg:items-start items-center justify-center z-20')">
            <CommonCustomBadge :title="slide.badge" />
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.desc }}</p>
            <Price :amount="slide.price" />
            <CommonCustomButton :title="'Buy Now'" />

          </div>
          <div :class="clsx(styles.imgContainer, 'z-10 flex lg:justify-end justify-center lg:pb-0 pb-8')">
            <img :src="slide.img" alt="section-img" />
          </div>

        </div>
      </SwiperSlide>
    </Swiper>
    <div :class="clsx(styles.customContainer, '')">
      <div class="hero-slider-nav flex gap-2 mt-6 absolute lg:left-28 left-1/2 -translate-x-1/2 bottom-6 z-50 pl-4">
        <button @click="goPrev" :class="[styles.sliderButton, 'flex items-center justify-center p-0']"
          aria-label="Previous">
          <Icons.ArrowLeft />
        </button>
        <button @click="goNext" :class="[styles.sliderButton, 'flex items-center justify-center p-0']"
          aria-label="Next">
          <Icons.ArrowRight />
        </button>
      </div>
    </div>
  </section>
</template>
