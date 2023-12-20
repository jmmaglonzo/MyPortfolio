<template>
  <section class="container relative py-20" id="projects">
    <div>
      <sub-heading>projects</sub-heading>
      <span class="block text-center text-base text-white md:text-lg"
        >Here are the projects that I've built.</span
      >
    </div>
    <div class="project-container flex flex-col space-y-16 md:gap-10">
      <!-- Project 1 -->
      <div
        class="mt-14 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center"
      >
        <div class="order-2 md:order-1">
          <project-description>
            <template #title>Portfolio website</template>
            <template #description
              >Welcome to my portfolio powered by Vite,Vue.js and Tailwind.
              Discover my responsive projects, explore skills, and let's discuss
              collaboration possibilities for a modern user experience.
            </template>
            <template #technologies>
              <p>VUE JS</p>
              <p>VUE ROUTER</p>
              <p>TAILWIND</p>
              <p>VITE</p>
              <p>JAVASCRIPT</p>
            </template>
            <template #links>
              <a href="">
                <Icon icon="mdi:github" />
              </a>
              <a href="">
                <Icon icon="ph:link-bold" />
              </a>
            </template>
          </project-description>
        </div>

        <div class="order-1 duration-200 md:order-2 md:hover:-translate-y-6">
          <a href="https://omnifoods-ai.netlify.app/" target="_blank">
            <img src="../assets/img/mockups/portfolio.png" alt="" />
          </a>
        </div>
      </div>
      <!-- Project 2 -->

      <div
        class="mt-14 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center"
      >
        <div class="order-2 md:order-2">
          <project-description>
            <template #title>omnifood ai</template>
            <template #description
              >Omnifood AI, my Bootstrap and Sass project. With redesigned and
              new sections, I've revamped this site to offer a fresh and
              improved experience.
            </template>
            <template #technologies>
              <p>HTML</p>
              <p>BOOTSTRAP</p>
              <p>SASS</p>
            </template>
            <template #links>
              <a href="">
                <Icon icon="mdi:github" />
              </a>
              <a href="">
                <Icon icon="ph:link-bold" />
              </a>
            </template>
          </project-description>
        </div>

        <div class="order-1 duration-200 md:order-1 md:hover:-translate-y-6">
          <a href="https://omnifoods-ai.netlify.app/" target="_blank">
            <img src="../assets/img/mockups/omnifood.png" alt="" />
          </a>
        </div>
      </div>

      <!-- Project 3 -->
      <div
        class="mt-14 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center"
      >
        <div class="order-2 md:order-1">
          <project-description>
            <template #title>hj layout & designs</template>
            <template #description
              >Omnifood AI, my Bootstrap and Sass project. With redesigned and
              new sections, I've revamped this site to offer a fresh and
              improved experience.
            </template>
            <template #technologies>
              <p>HTML</p>
              <p>BOOTSTRAP</p>
              <p>SASS</p>
            </template>
            <template #links>
              <a href="">
                <Icon icon="mdi:github" />
              </a>
              <a href="">
                <Icon icon="ph:link-bold" />
              </a>
            </template>
          </project-description>
        </div>

        <div class="order-1 duration-200 md:order-2 md:hover:-translate-y-6">
          <a href="https://omnifoods-ai.netlify.app/" target="_blank">
            <img src="../assets/img/mockups/hj.png" alt="" />
          </a>
        </div>
      </div>
      <!-- Project 4 -->

      <div
        class="mt-14 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center"
      >
        <div class="order-2 md:order-2">
          <project-description>
            <template #title>clipboard landing page</template>
            <template #description
              >My First Tailwind CSS project reflects my learning journey and
              growth, conquering a Front-End Mentor challenge. Explore evolving
              web development skills through engaging, responsive designs.
            </template>
            <template #technologies>
              <p>HTML</p>
              <p>TAILWINDCSS</p>
            </template>
            <template #links>
              <a href="">
                <Icon icon="mdi:github" />
              </a>
              <a href="">
                <Icon icon="ph:link-bold" />
              </a>
              <a href="">
                <Icon icon="simple-icons:frontendmentor" />
              </a>
            </template>
          </project-description>
        </div>

        <div class="order-1 duration-200 md:order-1 md:hover:-translate-y-6">
          <a href="https://omnifoods-ai.netlify.app/" target="_blank">
            <img src="../assets/img/mockups/clipboard.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
