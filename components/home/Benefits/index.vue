<script setup>
import $style from './style.module.scss'
import { Images } from '~/assets/images'
import { Icons } from '~/assets/icons'

const benefits = [
    {
        icon: 'Benefits1',
        title: 'Pro-Grade Performance',
        description: 'Tools like WiPry Clarity offer tri-band spectrum analysis (2.2–7.25 GHz), supporting Wi-Fi 7 and legacy bands for clear RF insights.'
    },
    {
        icon: 'Benefits2',
        title: 'Portable & Easy To Use',
        description: 'Connects directly to your mobile device—no bulky gear needed. Download our free app on Google Play or the App Store and start troubleshooting instantly.'
    },
    {
        icon: 'Benefits3',
        title: 'Trusted Since 2010',
        description: 'From WiPry 2500x to 790x and 340x, our innovative tools have been helping professionals troubleshoot with confidence for over a decade.'
    }
]

</script>

<template>
    <div :class="[$style.sectionWrapper, 'relative']">
        <div :class="[$style.customContainer, '']">
            <div :class="[$style.sectionContainer, 'grid lg:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-8 gap-4']">
                <div :class="[$style.imgContainer, 'flex justify-center items-center']">
                    <img width="700" :src="Images.BenefitsImg" :class="[$style.BenefitsImg, 'lg:absolute left-0 top-8']"
                        alt="">
                </div>
                <div :class="[$style.contentContainer, 'flex flex-col justify-center gap-7']">
                    <h2>Why Choose Oscium?</h2>
                    <div :class="[$style.cardWrapper, 'flex flex-col lg:gap-5 md:gap-4 gap-3']">
                        <div v-for="(benefit, idx) in benefits" :key="idx"
                            :class="[$style.card, 'flex items-start gap-3']">
                            <span :class="[$style.iconContainer, 'sm:mt-2 mt-1']">
                                <component :is="Icons[benefit.icon]" />
                            </span>
                            <div>
                                <h3>{{ benefit.title }}</h3>
                                <p>{{ benefit.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>