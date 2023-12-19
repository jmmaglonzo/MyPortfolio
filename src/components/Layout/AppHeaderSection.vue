<template>
  <header class="fixed left-0 top-0 z-50 w-full bg-bodyColor shadow-md">
    <nav class="container flex items-center justify-between p-4">
      <a href="#" class="text-2xl font-bold text-white">
        <span class="text-primaryRed">Lon</span>zo
      </a>
      <ul class="text-md hidden items-center gap-8 uppercase md:flex">
        <li v-for="(link, index) in links" class="text-primaryRed">
          #<a
            :key="index"
            :href="link.url"
            class="text-white duration-200 hover:text-primaryRed"
            >{{ link.name }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Home",
          url: "#",
        },
        {
          name: "Skills",
          url: "#skills",
        },

        {
          name: "Projects",
          url: "#projects",
        },
        {
          name: "Contact",
          url: "#contact",
        },
      ],
    };
  },
};
</script>
