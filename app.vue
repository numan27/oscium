<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s !important;
}

.page-enter-from,
.page-leave-to {
  opacity: 0 !important;
  filter: blur(1rem) !important;
}
</style>

<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <!-- <Navbar /> -->

    <main class="min-h-screen">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>
