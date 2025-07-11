<script setup>
import $style from './style.module.scss'
import { Images } from '~/assets/images'


</script>

<template>
    <div :class="$style.sectionContainer">
        <div :class="$style.customContainer, ''">
            <div :class="[$style.content, 'flex items-center justify-between flex-wrap gap-4 w-full']">
                <div>
                    <h2>Subscribe for Updates</h2>
                    <p>Enter your email to subscribe to our newsletter and receive updates.</p>
                </div>
                <form :class="$style.formContainer">
                    <div :class="$style.inputGroup, 'h-full'">
                        <input type="email" :class="$style.emailInput" placeholder="Email Address" required />
                        <CommonCustomButton :title="'Subscribe'" :containerStyle="$style.subscribeBtn" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>