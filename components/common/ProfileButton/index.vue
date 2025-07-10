<script setup>
import { Icons } from '~/assets/icons';
import $style from './style.module.scss';

defineProps({
    onClick: Function,
    containerStyle: [String, Array, Object],
    iconStyle: [String, Array, Object],
    disabled: Boolean,
    style: [String, Array, Object],
});
</script>

<template>
    <button :class="[$style.profileBtnContainer, containerStyle]" :disabled="disabled" type="button" :style="style"
        @click="onClick">
        <!-- <img :src="Icons.USER" :class="[$style.profileIcon, iconStyle]" alt="Profile" /> -->
    </button>
</template>