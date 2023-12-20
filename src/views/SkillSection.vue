<template>
  <section
    class="container flex flex-col justify-center py-20 md:h-screen"
    id="skills"
  >
    <sub-heading>Tech Arsenal for Web Development </sub-heading>
    <grid-skills />
  </section>
</template>

<script>
import GridSkills from "@/components/UI/SkillGridIcons.vue";
export default {
  components: {
    GridSkills,
  },
};
</script>
