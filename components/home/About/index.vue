<script setup>
import $style from './style.module.scss'
import { Images } from '~/assets/images'
import { Icons } from '~/assets/icons'


</script>

<template>
    <div :class="[$style.sectionWrapper]">
        <div :class="[$style.customContainer, '']">
            <div :class="[$style.sectionContainer, 'grid grid-cols-12 lg:gap-12 md:gap-8 gap-4']">
                <div :class="[$style.videoWrapper, 'lg:col-span-5 col-span-12 flex flex-col items-start pt-4']">
                    <CommonCustomBadge title="About OSCIUM" />
                    <div
                        :class="[$style.imgContainer, 'flex flex-col lg:gap-4 gap-3 xxl:mt-28 lg:mt-24 sm:mt-12 mt-6 lg:pl-32']">
                        <img :src="Images.Thumbnail" alt="">
                        <h3>A Spectrum Analyzer with Wi-Fi 7 Support</h3>
                        <div :class="[$style.cta, 'flex items-center gap-2 ']">
                            <span :class="[$style.iconContainer, '']">
                                <Icons.Youtube />
                            </span>
                            <h4>Watch on Youtube</h4>
                        </div>

                    </div>
                </div>
                <div :class="[$style.contentContainer, 'lg:col-span-7 col-span-12 flex flex-col justify-center gap-7']">
                    <div :class="[$style.top, '']">
                        <h2>We make Wi-Fi awesome</h2>
                        <h3>At Oscium, we’ve spent over 15 years turning complex technology into tools that work better
                            for
                            everyone.</h3>
                    </div>
                    <img :src="Images.AboutImg" alt="">
                    <div :class="[$style.bottom, '']">
                        <p>Through the evolution of our company, we released a tri-band Wi-Fi spectrum analyzer in 2022.
                            This USB tool, called WiPry Clarity, is built for PC / Mac and offers professional-grade
                            performance for the wireless pro. WiPry Clarity visualizes all RF spectral activity for
                            Wi-Fi 7
                            as well as legacy bands (2.4 GHz | 5 GHz | 6-7 GHz).</p>
                        <CommonCustomButton title="Learn about how Oscium does this" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>