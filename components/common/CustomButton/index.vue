<script setup>
import Spinner from '../Spinner/Spinner.vue'
import $style from './style.module.scss'

const props = defineProps({
    title: String,
    onClick: Function,
    containerStyle: [String, Array, Object],
    Icon: [Object, Function, String],
    iconStyle: [String, Array, Object],
    IconDirection: String,
    disabled: Boolean,
    style: [String, Array, Object],
    loading: Boolean,
    titleStyle: [String, Array, Object],
    animate: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <button :data-aos="animate ? 'fade-up' : ''" data-aos-easing="linear" data-aos-duration="1000"
        :class="[$style.customBtnContainer, containerStyle]" :disabled="disabled" type="submit" :style="style"
        @click="onClick">
        <Spinner v-if="loading" />
        <template v-else>
            <component v-if="IconDirection === 'left' && Icon" :is="Icon" :class="iconStyle ? iconStyle : 'mr-2'" />
            <span :class="titleStyle">{{ title }}</span>
            <component v-if="IconDirection === 'right' && Icon" :is="Icon" :class="iconStyle ? iconStyle : 'ml-1'" />
        </template>
    </button>
</template>