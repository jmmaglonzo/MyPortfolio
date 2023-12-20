<template>
  <div class="flex items-center justify-center gap-4 text-white">
    <a
      :href="items.links"
      target="_blank"
      v-for="(items, index) in socialLinks"
    >
      <Icon :icon="items.icon" :class="items.className" :key="index" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          links: "https://github.com/jmmaglonzo",
          icon: "mdi:github",
          className: "h-10 w-10 duration-200 hover:scale-150",
        },
        {
          links: "https://www.linkedin.com/in/jmmaglonzo/",
          icon: "mdi:linkedin",
          className: "h-10 w-10 duration-200 hover:scale-150",
        },
        {
          links: "https://www.frontendmentor.io/profile/jmmaglonzo",
          icon: "simple-icons:frontendmentor",
          className: "h-10 w-10 duration-200 hover:scale-150",
        },
        {
          links: "https://twitter.com/iocrpyto",
          icon: "pajamas:twitter",
          className: "h-10 w-10 duration-200 hover:scale-150",
        },
        {
          links: "https://www.instagram.com/jmlonzo/",
          icon: "mdi:instagram",
          className: "h-10 w-10 duration-200 hover:scale-150",
        },
      ],
    };
  },
};
</script>
