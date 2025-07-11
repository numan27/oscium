<script setup>
import $style from './style.module.scss'
import { Images } from '~/assets/images'


</script>

<template>
    <div :class="$style.sectionContainer">
        <div :class="$style.customContainer">
            <h4 class="text-center">Trusted by</h4>
            <div :class="$style.partnersRow">
                <img :src="Images.Partner1" :alt="'Partner 1'" :class="$style.partnerLogo" />
                <img :src="Images.Partner2" :alt="'Partner 2'" :class="$style.partnerLogo" />
                <img :src="Images.Partner3" :alt="'Partner 3'" :class="$style.partnerLogo" />
                <img :src="Images.Partner4" :alt="'Partner 4'" :class="$style.partnerLogo" />
                <img :src="Images.Partner5" :alt="'Partner 5'" :class="$style.partnerLogo" />
                <img :src="Images.Partner6" :alt="'Partner 6'" :class="$style.partnerLogo" />
            </div>
        </div>
    </div>
</template>