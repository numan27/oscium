<script setup>
import { Icons } from '~/assets/icons';
import $style from './style.module.scss'
import { Images } from '~/assets/images'
import clsx from 'clsx';
import ReviewCard from '~/components/common/ReviewCard/index.vue';
import CustomSlider from '~/components/common/CustomSlider/index.vue';

const reviews = [
    {
        productImg: Images.Review1,
        date: '04 September 2023',
        title: 'Super Convenient And Just What We Needed.',
        review: 'Very well constructed tool and accessory cables. This tool can help you find dead spots, overcrowded channels, and allows you to see everything in 2.4 and 5.8 GHZ ranges with on single antenna.',
        customer: 'James Collins',
    },
    {
        productImg: Images.Review2,
        date: '04 September 2023',
        title: 'This Oscilloscope Is Very User Friendly.',
        review: 'It provides the basic functions of a higher level oscilloscope but cheaper. It is easy to use and take anywhere. Over all, I am very satisfied with it.',
        customer: 'Amir Bigdeli',
    }, {
        productImg: Images.Review1,
        date: '12 August 2023',
        title: 'Excellent Value for Money!',
        review: 'I was surprised by the build quality and performance. The device exceeded my expectations and the support team was very responsive.',
        customer: 'Sophia Turner',
    },
    {
        productImg: Images.Review2,
        date: '29 July 2023',
        title: 'Perfect for Field Work',
        review: 'Compact, reliable, and easy to carry. I use it daily for my field projects and it never disappoints. Highly recommended!',
        customer: 'Liam Nguyen',
    },
];

const reviewSliderConfig = {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    centeredSlides: false,
    autoplay: { delay: 4000, disableOnInteraction: false },
    effect: 'slide',
    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        900: { slidesPerView: 2 },
        1200: { slidesPerView: 2 }
    }
};

const reviewPaginationConfig = {
    type: 'fraction',
    clickable: true
};
</script>

<template>
    <div :class="$style.sectionContainer">
        <div :class="clsx($style.customContainer, '')">
            <div :class="clsx($style.heading, 'text-center flex flex-col items-center gap-3')">
                <div :class="clsx($style.starsContainer, 'flex items-center gap-1.5')">
                    <Icons.Star />
                    <Icons.Star />
                    <Icons.Star />
                    <Icons.Star />
                    <Icons.StarHalf />
                    <span>185 VERIFIED REVIEWS</span>
                </div>
                <h2>The #1 Customer-Rated Home wireless network</h2>
            </div>
            <div :class="[$style.sliderWrapper, $style.reviewsSliderWrapper]">
                <CustomSlider :slides="reviews" :swiper-config="reviewSliderConfig" :pagination="reviewPaginationConfig"
                    :show-navigation="true" :show-pagination="true" :navButtonClass="$style.reviewsSliderButton">
                    <template #slide="{ slide }">
                        <ReviewCard v-bind="slide" />
                    </template>
                </CustomSlider>
            </div>
        </div>
    </div>
</template>