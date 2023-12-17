<template>
  <the-header />
  <main class="mt-28">
    <hero-section />
    <about-section />
  </main>
</template>

<script>
import TheHeader from "@/components/Layout/HeaderSection.vue";
import HeroSection from "@/components/Layout/HeroSection.vue";
import AboutSection from "@/components/Layout/AboutSection.vue";
export default {
  components: {
    TheHeader,
    HeroSection,
    AboutSection,
  },
};
</script>

<style lang="scss" scoped></style>
