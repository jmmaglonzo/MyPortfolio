<template>
  <the-header />
  <main class="mt-28">
    <hero-section />
    <about-section />
    <skills-section />
    <project-section />
    <contact-form />
  </main>
</template>

<script>
import TheHeader from "@/components/Layout/AppHeaderSection.vue";
import HeroSection from "@/components/Layout/AppHeroSection.vue";
import AboutSection from "@/components/Layout/AppAboutSection.vue";
import SkillsSection from "@/components/Layout/AppSkillsSection.vue";
import ProjectSection from "@/components/Layout/AppProjectSection.vue";
import ContactForm from "@/components/Layout/AppContactForm.vue";
export default {
  components: {
    TheHeader,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectSection,
    ContactForm,
  },
};
</script>

<style lang="scss" scoped></style>
