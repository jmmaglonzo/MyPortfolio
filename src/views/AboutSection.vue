<template>
  <section id="about" class="container h-screen py-20">
    <sub-heading> About </sub-heading>

    <div
      class="mt-14 grid grid-cols-1 items-center gap-4 text-white md:grid-cols-2"
    >
      <div class="order-2 mt-6 md:order-1 md:mt-0">
        <p
          class="text-center text-sm leading-relaxed md:text-left md:text-base"
        >
          Hey there! I'm John Mark, a self-taught web developer. I've gained
          expertise in various technologies used in web development. Overcoming
          challenges is my forte, and I thrive on embracing accomplishments.
          Each day brings fresh opportunities for growth, and I'm excited about
          the dynamic possibilities ahead in this evolving tech field
        </p>
      </div>

      <div class="order-1 flex flex-col items-center md:order-2">
        <img src="../assets/img/hero.svg" class="h-80 w-80" />

        <base-button
          class="bg-primaryRed"
          href="https://drive.google.com/file/d/1TpVn919uaIMCu37OB-_Bx7CiFTVOC2_j/view?usp=sharing"
          target="_blank"
        >
          download cv
        </base-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
