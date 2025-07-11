<script setup>
import Spinner from '../Spinner/Spinner.vue'
import $style from './style.module.scss'

const props = defineProps({
    title: String,
    Icon: [Object, Function, String],
    iconStyle: [String, Array, Object],
    IconDirection: String,
    loading: Boolean,
    containerStyle: [String, Array, Object],
    titleStyle: [String, Array, Object],
})
</script>

<template>
    <span :class="[$style.badge, 'flex items-center', containerStyle]">
        <Spinner v-if="loading" />
        <template v-else>
            <component v-if="IconDirection === 'left' && Icon" :is="Icon" :class="iconStyle ? iconStyle : 'mr-2'" />
            <span :class="titleStyle">{{ title }}</span>
            <component v-if="IconDirection === 'right' && Icon" :is="Icon" :class="iconStyle ? iconStyle : 'ml-1'" />
        </template>
    </span>
</template>