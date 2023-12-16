<template>
  <the-header />
  <main class="mt-28">
    <hero-section />
  </main>
</template>

<script>
import TheHeader from "@/components/Layout/HeaderSection.vue";
import HeroSection from "@/components/Layout/HeroSection.vue";
export default {
  components: {
    TheHeader,
    HeroSection,
  },
};
</script>

<style lang="scss" scoped></style>
