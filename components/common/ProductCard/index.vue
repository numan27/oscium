<script setup>
import $style from './style.module.scss'
import clsx from 'clsx';
import Price from '../Price/index.vue'

const props = defineProps({
    img: { type: String, default: '' },
    badge: { type: String, default: 'Complete Bundle' },
    title: { type: String, default: 'Wi-Spy Lucid + Chanalyzer + MetaGeek App' },
    desc: { type: String, default: 'Featuring Wi-Spy Lucid and Chanalyzer, The bundle includes the MetaGeek App, the culmination of MetaGeek’s best work in Layer 2 wireless troubleshooting.' },
    price: { type: String, default: '3,199' },
    active: { type: Boolean, default: false },
});

const buttonClass = computed(() => {
    return props.active
        ? clsx($style.cardButton, $style.activeCardButton, 'w-full')
        : clsx($style.cardButton, 'w-full');
});
</script>

<template>
    <div :class="$style.cardContainer">
        <div :class="clsx($style.imgContainer, 'relative')">
            <span class="absolute top-3 left-3">
                <CommonCustomBadge :title="props.badge" />
            </span>
            <img :src="props.img" />
        </div>
        <div :class="clsx($style.contentContainer, 'flex flex-col justify-between h-full')">
            <div class="flex flex-col items-start gap-3">
                <h3>{{ props.title }}</h3>
                <p>{{ props.desc }}</p>
                <Price :amount="props.price" />
            </div>
            <div class="mt-4">
                <CommonCustomButton :containerStyle="buttonClass" :title="'Buy Now'" />
            </div>
        </div>
    </div>
</template>