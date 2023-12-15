<template>
  <section class="container py-20">
    <div class="flex flex-col items-center justify-center space-y-2 text-white">
      <span class="text-sm font-semibold uppercase text-primaryRed md:text-xl"
        >crafting code with creativity</span
      >
      <h1 class="text-2xl font-semibold uppercase md:text-7xl">
        {{ typedText }}
      </h1>
      <span class="text-md uppercase md:text-xl"> front-end developer </span>
    </div>
  </section>
</template>

<script>
export default {
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
          clearInterval(intervalId); // Stop typing when the end of the string is reached
        }
      }, this.typingSpeed);
    },
  },
  mounted() {
    this.startTyping();
  },
};
</script>
