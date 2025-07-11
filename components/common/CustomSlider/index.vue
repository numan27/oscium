<script setup>
import { ref, computed, nextTick, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Pagination, Navigation, Autoplay, EffectFade, EffectCube, EffectCoverflow } from 'swiper/modules';
import clsx from 'clsx';
import { Icons } from '~/assets/icons';
import $style from './style.module.scss';

const props = defineProps({
    // Slides data - can be any type of content
    slides: {
        type: Array,
        required: true
    },
    // Swiper configuration
    swiperConfig: {
        type: Object,
        default: () => ({
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            centeredSlides: false,
            autoplay: { delay: 3000, disableOnInteraction: false },
            effect: 'slide', // 'slide', 'fade', 'cube', 'coverflow'
            modules: [Pagination, Navigation, Autoplay]
        })
    },
    pagination: {
        type: Object,
        default: () => ({
            type: 'bullets',
            clickable: true,
            dynamicBullets: false
        })
    },
    navigation: {
        type: Object,
        default: () => ({
            enabled: true,
            prevEl: null,
            nextEl: null
        })
    },
    breakpoints: {
        type: Object,
        default: () => ({
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        })
    },
    containerClass: {
        type: String,
        default: ''
    },
    swiperClass: {
        type: String,
        default: 'w-full mx-auto'
    },
    slideSlot: {
        type: String,
        default: 'slide'
    },
    showNavigation: {
        type: Boolean,
        default: true
    },
    showPagination: {
        type: Boolean,
        default: true
    },
    navButtonClass: {
        type: String,
        default: ''
    },
    paginationClass: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['slideChange', 'swiperReady']);

const swiperRef = ref(null);
const prevEl = ref(null);
const nextEl = ref(null);
const paginationEl = ref(null);
const activeIndex = ref(0);

const swiperModules = computed(() => {
    const modules = [Pagination, Navigation, Autoplay];

    if (props.swiperConfig.effect === 'fade') {
        modules.push(EffectFade);
    } else if (props.swiperConfig.effect === 'cube') {
        modules.push(EffectCube);
    } else if (props.swiperConfig.effect === 'coverflow') {
        modules.push(EffectCoverflow);
    }

    return modules;
});

const computedSwiperConfig = computed(() => {
    const config = { ...props.swiperConfig };
    if (!config.breakpoints) {
        config.breakpoints = props.breakpoints;
    }
    return {
        ...config,
        modules: swiperModules.value,
        pagination: props.showPagination ? {
            ...props.pagination,
            el: paginationEl.value,
            ...(props.pagination.type === 'fraction' && {
                renderFraction: (currentClass, totalClass) => {
                    return `<span class='custom-fraction-pagination'><span class='${currentClass}'></span>/<span class='${totalClass}'></span></span>`;
                },
                formatFractionCurrent: (number) => number < 10 ? `0${number}` : `${number}`,
                formatFractionTotal: (number) => number < 10 ? `0${number}` : `${number}`
            })
        } : false,
        navigation: false,
        breakpoints: config.breakpoints
    };
});

const onSwiper = (swiper) => {
    swiperRef.value = swiper;
    emit('swiperReady', swiper);
};

function onSlideChange(swiper) {
    activeIndex.value = swiper.realIndex;
    emit('slideChange', { swiper, activeIndex: swiper.realIndex });
}

const goToPrev = () => {
    if (swiperRef.value) {
        swiperRef.value.slidePrev();
    }
};

const goToNext = () => {
    if (swiperRef.value) {
        swiperRef.value.slideNext();
    }
};

// Expose swiper instance to parent
defineExpose({
    swiper: swiperRef,
    goToSlide: (index) => swiperRef.value?.slideTo(index),
    goToNext,
    goToPrev,
    activeIndex
});
</script>

<template>
    <div :class="clsx($style.customSliderContainer, containerClass)">
        <Swiper v-bind="computedSwiperConfig" :class="swiperClass" @swiper="onSwiper" @slideChange="onSlideChange">
            <SwiperSlide v-for="(slide, idx) in slides" :key="idx" :class="`slide-${idx}`">
                <slot :name="slideSlot" :slide="slide" :index="idx" :active="activeIndex === idx"
                    :activeIndex="activeIndex">
                    <div class="default-slide-content">
                        {{ slide }}
                    </div>
                </slot>
            </SwiperSlide>
        </Swiper>

        <div v-if="showNavigation" class="flex flex-col items-center lg:mt-8 md:mt-6 mt-4">
            <div class="flex gap-6 justify-center mb-2 items-center">
                <button @click="goToPrev" :class="navButtonClass ? navButtonClass : $style.sliderButton"
                    aria-label="Previous">
                    <Icons.ArrowLeft />
                </button>

                <div v-if="showPagination && pagination.type === 'fraction'" ref="paginationEl"
                    :class="clsx($style['swiper-pagination-fraction'], $style['custom-fraction-pagination'], paginationClass)">
                </div>

                <button @click="goToNext" :class="navButtonClass ? navButtonClass : $style.sliderButton"
                    aria-label="Next">
                    <Icons.ArrowRight />
                </button>
            </div>
        </div>

        <div v-if="showPagination && pagination.type !== 'fraction'" ref="paginationEl"
            :class="clsx($style['swiper-pagination'], paginationClass)"></div>
    </div>
</template>
