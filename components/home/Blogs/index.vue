<script setup>
import $style from './style.module.scss'
import { Images } from '~/assets/images'

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

const blogs = [
    {
        image: Images.Blog1,
        title: 'Oscium And MetaGeek Unveil Wi-Spy Lucid + Chanalyzer: A Powerful Tri-Band Wi-Fi Solution',
        date: 'February 17, 2025',
        link: '#'
    },
    {
        image: Images.Blog2,
        title: 'Oscium And Hamina Partner Up To Deliver A Brand-New Wi-Fi Site Surveys Solution',
        date: 'February 17, 2025',
        link: '#'
    },
    {
        image: Images.Blog3,
        title: 'Oscium Announces Acquisition Of MetaGeek, Expanding Wireless Network Solutions Portfolio',
        date: 'February 17, 2025',
        link: '#'
    }
]

</script>

<template>
    <div :class="[$style.sectionWrapper,]">
        <div :class="[$style.customContainer, '']">
            <div :class="[$style.heading, 'flex justify-between flex-wrap gap-3 items-center']">
                <h2>Latest From Oscium</h2>
                <CommonCustomButton title="View All Blogs" />

            </div>
            <div :class="[$style.cardWrapper, 'grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-4']">
                <div v-for="(blog, idx) in blogs" :key="idx" :class="[$style.blogCard, 'h-full']">
                    <div :class="[$style.imgContainer, '']">
                        <img :src="blog.image" alt="" />
                    </div>
                    <div :class="[$style.content, 'flex flex-col gap-3 items-start']">
                        <h3>{{ blog.title }}</h3>
                        <span>{{ blog.date }}</span>
                        <CommonCustomButton :title="'Read More'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>