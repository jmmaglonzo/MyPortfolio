<template>
  <section class="container md:pt-48">
    <div
      class="flex h-screen flex-col items-center justify-center space-y-3 text-white md:h-1/2 md:space-y-4"
    >
      <span class="text-sm font-semibold uppercase text-primaryRed md:text-xl"
        >crafting code with creativity</span
      >
      <h1 class="text-2xl font-semibold uppercase md:text-6xl">
        {{ typedText }}
      </h1>
      <span class="text-md uppercase md:text-lg"> front-end developer </span>
      <router-link :to="{ name: 'About' }">
        <base-button
          class="mb-10 flex items-center gap-2 border border-secondaryGrey"
          href="#about"
          >about me
          <Icon
            icon="tdesign:chevron-down"
            class="h-5 w-5 animate-pulse text-primaryRed"
          />
        </base-button>
      </router-link>
      <div class="">
        <social-links />
      </div>
    </div>
  </section>
</template>

<script>
import SocialLinks from "@/components/UI/SocialLinks.vue";

export default {
  components: { SocialLinks },
  data() {
    return {
      textToType: "John Mark Maglonzo",
      typedText: "",
      typingSpeed: 100, // Adjust the typing speed (milliseconds per character)
      currentIndex: 0,
    };
  },
  methods: {
    startTyping() {
      const intervalId = setInterval(() => {
        this.typedText += this.textToType[this.currentIndex];
        this.currentIndex++;

        if (this.currentIndex === this.textToType.length) {
          clearInterval(intervalId);
        }
      }, this.typingSpeed);
    },
  },
  mounted() {
    this.startTyping();
  },
};
</script>
