<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Icons } from '~/assets/icons';
import $style from './style.module.scss';
import { Images } from '~/assets/images';
import clsx from 'clsx';

const selectedTab = ref('Hardware');
const swiperRef = ref(null);
const activeIndex = ref(0);

const hardwareSlides = [
    {
        img: Images.Product1,
        badge: 'Spectrum Analyzer',
        title: 'Wi-Spy Lucid',
        desc: 'A tri-band spectrum analyzer for advanced RF analysis across 2.4 GHz, 5 GHz, and 6 GHz bands.',
        price: '999',
    },
    {
        img: Images.Product1,
        badge: 'Spectrum Analyzer',
        title: 'WiPry 2500X',
        desc: 'A dual-band spectrum analyzer for 2.4 GHz and 5 GHz Wi-Fi analysis.',
        price: '699',
    },
    {
        img: Images.Product2,
        badge: 'Spectrum Analyzer',
        title: 'Wi-Spy DBx',
        desc: 'Legacy dual-band spectrum analyzer for Wi-Fi troubleshooting.',
        price: '499',
    }, {
        img: Images.Product1,
        badge: 'Spectrum Analyzer',
        title: 'WiPry 2500X',
        desc: 'A dual-band spectrum analyzer for 2.4 GHz and 5 GHz Wi-Fi analysis.',
        price: '699',
    },
    {
        img: Images.Product2,
        badge: 'Spectrum Analyzer',
        title: 'Wi-Spy DBx',
        desc: 'Legacy dual-band spectrum analyzer for Wi-Fi troubleshooting.',
        price: '499',
    },
];

const softwareSlides = [
    {
        img: Images.Product2,
        badge: 'Software',
        title: 'Chanalyzer',
        desc: 'Powerful spectrum analysis software for Wi-Spy devices.',
        price: '299',
    },
    {
        img: Images.Product1,
        badge: 'Software',
        title: 'MetaGeek App',
        desc: 'Cloud-based Wi-Fi troubleshooting and reporting.',
        price: '199',
    },
    {
        img: Images.Product2,
        badge: 'Software',
        title: 'Eye P.A.',
        desc: 'Visual packet analysis for Wi-Fi professionals.',
        price: '399',
    }, {
        img: Images.Product1,
        badge: 'Software',
        title: 'MetaGeek App',
        desc: 'Cloud-based Wi-Fi troubleshooting and reporting.',
        price: '199',
    },
    {
        img: Images.Product2,
        badge: 'Software',
        title: 'Eye P.A.',
        desc: 'Visual packet analysis for Wi-Fi professionals.',
        price: '399',
    },
];

const slides = computed(() =>
    selectedTab.value === 'Hardware' ? hardwareSlides : softwareSlides
);

const dotsCount = computed(() => slides.value.length);

const swiperConfig = {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: false,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: {
        nextEl: '.product-slider-next',
        prevEl: '.product-slider-prev',
    },
    pagination: {
        el: '.product-slider-pagination',
        type: 'fraction',
        clickable: true,
        renderFraction: (currentClass, totalClass) => {
            return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
        },
        formatFractionCurrent: (number) => (number < 10 ? `0${number}` : `${number}`),
        formatFractionTotal: (number) => (number < 10 ? `0${number}` : `${number}`),
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        992: { slidesPerView: 2.1 },
    },
};

function onSlideChange(swiper) {
    activeIndex.value = swiper.realIndex;
}

function onSwiper(swiper) {
    swiperRef.value = swiper;
}

const autoplayProgress = ref(0);

function updateAutoplayProgress(swiper) {
    if (swiper && swiper.autoplay && swiper.autoplay.running) {
        const delay = swiper.params.autoplay.delay;
        autoplayProgress.value = 0;
        if (swiper.autoplay._timeout) clearTimeout(swiper.autoplay._timeout);
        let start = Date.now();
        function step() {
            const elapsed = Date.now() - start;
            autoplayProgress.value = Math.min(elapsed / delay, 1);
            if (autoplayProgress.value < 1 && swiper.autoplay.running) {
                swiper.autoplay._timeout = setTimeout(step, 16);
            }
        }
        step();
    }
}

function onAutoplay(swiper) {
    updateAutoplayProgress(swiper);
}
</script>

<template>
    <div :class="clsx($style.sectionContainer, 'flex md:flex-row flex-col w-full md:gap-16 gap-3')">
        <div :class="clsx($style.content, 'flex flex-col justify-between md:max-w-2/5')">
            <div>
                <div :class="clsx($style.heading, 'flex flex-col md:items-start items-center gap-3')">
                    <Icons.Fav />
                    <h2>Choose Your Spectrum Analyzer</h2>
                    <p>Compare our top-selling spectrum analyzers to determine which is best for your needs.</p>
                </div>
                <div :class="clsx($style.tabsContainer, 'flex mt-8 mb-4')">
                    <button
                        :class="clsx($style.tab, selectedTab === 'Hardware' && $style.activeTab, 'flex-1 rounded-full transition')"
                        @click="selectedTab = 'Hardware'">
                        Hardware
                    </button>
                    <button
                        :class="clsx($style.tab, selectedTab === 'Software' && $style.activeTab, 'flex-1 rounded-full transition')"
                        @click="selectedTab = 'Software'">
                        Software
                    </button>
                </div>
                <div class="flex flex-col md:items-start items-center gap-4 mt-12">
                    <div class="flex gap-2 items-center justify-start mb-2">
                        <span v-for="idx in dotsCount" :key="idx"
                            :class="[$style.customDot, { [$style.activeDot]: activeIndex === (idx - 1) }]"
                            :style="activeIndex === (idx - 1) ? { '--dot-progress': autoplayProgress } : {}"></span>
                    </div>
                    <div class="flex gap-6 items-center justify-start">
                        <button class="product-slider-prev" :class="$style.sliderButton" aria-label="Previous">
                            <Icons.ArrowLeft />
                        </button>
                        <div class="product-slider-pagination"
                            :class="[$style['swiper-pagination-fraction'], $style['product-slider-pagination']]">
                        </div>
                        <button class="product-slider-next" :class="$style.sliderButton" aria-label="Next">
                            <Icons.ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div :class="clsx($style.swiperContainer, '')">
            <Swiper :key="selectedTab" v-bind="swiperConfig" @swiper="onSwiper" @slideChange="onSlideChange"
                @autoplay="onAutoplay" ref="swiperRef" class="w-full" :class="$style.sliderWrapper"
                :navigation="swiperConfig.navigation" :pagination="swiperConfig.pagination"
                :autoplay="swiperConfig.autoplay">
                <SwiperSlide class="flex justify-center" v-for="(slide, idx) in slides" :key="idx">
                    <CommonCategoryProductCard :img="slide.img" :badge="slide.badge" :title="slide.title"
                        :desc="slide.desc" :price="slide.price" :active="activeIndex === idx" />
                </SwiperSlide>
            </Swiper>
        </div>


    </div>
</template>