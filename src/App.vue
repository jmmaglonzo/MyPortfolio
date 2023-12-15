<template>
  <the-header />]
  <main class="mt-28">
    <hero-section></hero-section>
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import HeroSection from "@/components/HeroSection.vue";
export default {
  components: {
    TheHeader,
    HeroSection,
  },
};
</script>

<style lang="scss" scoped></style>
