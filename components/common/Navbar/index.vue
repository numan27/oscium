<script setup lang="ts">
import { ref } from 'vue';
import styles from "./style.module.scss";
import clsx from "clsx";
import { Images } from "~/assets/images";
import headerLinks from "~/utils/headerLinks";
import { Icons } from '~/assets/icons';


interface NavbarProps {
  isBlue?: boolean;
}

withDefaults(defineProps<NavbarProps>(), {
  isBlue: true,
});

const dropdownOpen = ref<{ [key: string]: boolean }>({});
const closeTimeouts = ref<{ [key: string]: any }>({});

function handleMouseEnter(label: string) {
  clearTimeout(closeTimeouts.value[label]);
  dropdownOpen.value[label] = true;
}

function handleMouseLeave(label: string) {
  closeTimeouts.value[label] = setTimeout(() => {
    dropdownOpen.value[label] = false;
  }, 150);
}
</script>

<template>
  <div :class="clsx(styles.navbar, 'w-full flex items-center')">
    <div :class="clsx(styles.customContainer, 'flex items-center justify-between w-full')">
      <div :class="clsx(styles.menuContainer, 'w-full flex items-center gap-12')">
        <NuxtLink to="/" :class="clsx(styles.logoContainer, '')">
          <img width="162" height="48" :src="Images.LOGO" alt="Oscium Logo">
        </NuxtLink>
        <navOkay class="flex gap-6">
          <template v-for="link in headerLinks" :key="link.label">
            <div v-if="link.children" :class="styles.dropdown" @mouseenter="handleMouseEnter(link.label)"
              @mouseleave="handleMouseLeave(link.label)">
              <NuxtLink :to="link.to" :class="styles.dropdownToggle">
                {{ link.label }}
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5" stroke="#222" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </NuxtLink>
              <div v-show="dropdownOpen[link.label]" :class="styles.dropdownMenu">
                <NuxtLink v-for="child in link.children" :key="child.to" :to="child.to" :class="styles.dropdownItem">
                  {{ child.label }}
                </NuxtLink>
              </div>
            </div>
            <NuxtLink v-else :to="link.to" class="hover:underline">
              {{ link.label }}
            </NuxtLink>
          </template>
        </navOkay>
      </div>
      <div :class="clsx(styles.actionContainer, 'flex items-center gap-6')">
        <div :class="clsx(styles.actions, 'flex items-center gap-3')">
          <div :class="clsx(styles.search, '')">
            <span :class="styles.cartContainer">
              <Icons.Search />
            </span>
          </div>
          <span :class="styles.cartContainer">
            <Icons.Cart />
          </span>
          <!-- <span :class="styles.iconContainer">
          <Icons.CART />
        </span> -->
          <span :class="styles.iconContainer">
            <CommonProfileButton />
          </span>
        </div>
        <CommonCustomButton :title="'Buy Now'" />
      </div>
    </div>
  </div>
</template>
