<script setup>
import { ref } from 'vue';
import { Icons } from '~/assets/icons';
import $style from './style.module.scss'
import { Images } from '~/assets/images'
import clsx from 'clsx';

const productSlides = [
    {
        img: Images.Slider1,
        badge: 'Bundle 1',
        title: 'Product Bundle 1',
        desc: 'Description for product bundle 1.',
        price: '1,999',
    },
    {
        img: Images.HeroBg,
        badge: 'Bundle 2',
        title: 'Product Bundle 2',
        desc: 'Description for product bundle 2.',
        price: '2,499',
    },
    {
        img: Images.Slider1,
        badge: 'Bundle 3',
        title: 'Product Bundle 3',
        desc: 'Description for product bundle 3.',
        price: '2,999',
    }, {
        img: Images.Slider1,
        badge: 'Bundle 4',
        title: 'Product Bundle 4',
        desc: 'Description for product bundle 4.',
        price: '1,999',
    },
    {
        img: Images.HeroBg,
        badge: 'Bundle 5',
        title: 'Product Bundle 5',
        desc: 'Description for product bundle 5.',
        price: '2,499',
    },
    {
        img: Images.Slider1,
        badge: 'Bundle 6',
        title: 'Product Bundle 6',
        desc: 'Description for product bundle 6.',
        price: '2,999',
    },
];

const sliderRef = ref(null);

// Product slider configuration
const productSliderConfig = {
    slidesPerView: 2.8,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    effect: 'slide',
    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2.8 }
    }
};

const productPaginationConfig = {
    type: 'fraction',
    clickable: true
};

function onSlideChange({ swiper, activeIndex }) {
    console.log('Product slide changed to:', activeIndex);
}

function onSwiperReady(swiper) {
    console.log('Product slider ready');
}
</script>

<template>
    <div :class="$style.sectionContainer">
        <div :class="clsx($style.customContainer, '')">
            <div :class="clsx($style.heading, 'text-center flex flex-col items-center gap-3')">
                <Icons.Fav />
                <h2>Choose Your Oscium Solutions</h2>
                <p>Compare our top-selling solutions to determine which is best for your needs.</p>
            </div>
        </div>
        <div :class="clsx($style.sliderWrapper, '')">
            <CommonCustomSlider ref="sliderRef" :slides="productSlides" :swiper-config="productSliderConfig"
                :pagination="productPaginationConfig" @slideChange="onSlideChange" @swiperReady="onSwiperReady">
                <template #slide="{ slide, index, active }">
                    <CommonProductCard :img="slide.img" :badge="slide.badge" :title="slide.title" :desc="slide.desc"
                        :price="slide.price" :active="active" />
                </template>
            </CommonCustomSlider>
        </div>
    </div>
</template>