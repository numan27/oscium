<script setup>
import $style from './style.module.scss'

const props = defineProps({
    amount: String,

})
</script>

<template>
    <h4><span>USD</span> ${{ props.amount }}</h4>
</template>