<script setup>
import $style from './style.module.scss';
import { Icons } from '~/assets/icons';


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
        <Icons.User />
    </button>
</template>