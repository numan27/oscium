<script setup>
import { Icons } from '~/assets/icons';
import $style from './style.module.scss'
import clsx from 'clsx';

const props = defineProps({
    productImg: { type: String, default: '' },
    date: { type: String, default: '' },
    title: { type: String, default: '' },
    review: { type: String, default: '' },
    customer: { type: String, default: '' },
});

</script>

<template>
    <div :class="$style.cardContainer">
        <div :class="clsx($style.heading, 'flex justify-between flex-wrap gap-3')">
            <div :class="clsx($style.stars, 'flex items-center gap-1.5')">
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
            </div>
            <span>
                {{ props.date }}
            </span>

        </div>
        <div :class="clsx($style.contentContainer, 'flex gap-4 h-full')">
            <div :class="$style.imgContainer">
                <img :src="props.productImg" />
            </div>

            <div class="flex flex-col items-start justify-between py-1 gap-3">
                <h3>{{ props.title }}</h3>
                <p>{{ props.review }}</p>
                <h4>{{ props.customer }}</h4>
            </div>
        </div>
    </div>
</template>