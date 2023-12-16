<template>
  <header class="fixed left-0 top-0 z-50 w-full bg-bodyColor shadow-md">
    <nav class="container flex items-center justify-between p-4">
      <a href="#" class="text-2xl font-bold text-white">
        <span class="text-primaryRed">Lon</span>zo
      </a>
      <ul class="text-md hidden items-center gap-4 uppercase md:flex">
        <li v-for="link in links" class="text-primaryRed">
          #
          <a
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
          id: Math.floor(Math.random() * 100 + 1),
          name: "Home",
          url: "#home",
        },
        {
          id: Math.floor(Math.random() * 100 + 1),
          name: "Skills",
          url: "#skills",
        },

        {
          id: Math.floor(Math.random() * 100 + 1),
          name: "Projects",
          url: "#projects",
        },
        {
          id: Math.floor(Math.random() * 100 + 1),
          name: "Contact",
          url: "#contact",
        },
      ],
    };
  },
};
</script>
