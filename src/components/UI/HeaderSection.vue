<template>
  <header class="fixed left-0 top-0 z-50 w-full bg-bodyColor shadow-md">
    <nav
      class="container flex justify-between gap-8 p-4 md:flex-row md:items-center md:gap-0"
    >
      <router-link
        :to="{ name: 'Home' }"
        class="text-2xl font-bold text-white"
        exact-active-class="no-active"
        @click="closeMenu"
      >
        <span class="text-primaryRed">Lon</span>zo
      </router-link>
      <div
        class="text-md hidden items-center gap-8 uppercase text-white md:flex"
      >
        <router-link :to="{ name: 'Home' }">
          <span class="text-primaryRed">#</span>Home</router-link
        >
        <router-link :to="{ name: 'Skills' }">
          <span class="text-primaryRed">#</span>Skills</router-link
        >
        <router-link :to="{ name: 'Projects' }">
          <span class="text-primaryRed">#</span>Projects</router-link
        >
        <router-link :to="{ name: 'Contact' }">
          <span class="text-primaryRed">#</span>Contact</router-link
        >
      </div>

      <!-- Mobile Menu -->
      <div
        class="text-md absolute top-14 flex h-screen w-1/2 flex-col gap-8 bg-bodyColor p-4 uppercase text-white shadow-lg duration-700 ease-in-out md:hidden"
        :class="menuBar"
      >
        <router-link :to="{ name: 'Home' }" @click="closeMenu">
          <span class="text-primaryRed">#</span>Home</router-link
        >
        <router-link :to="{ name: 'Skills' }" @click="closeMenu">
          <span class="text-primaryRed">#</span>Skills</router-link
        >
        <router-link :to="{ name: 'Projects' }" @click="closeMenu">
          <span class="text-primaryRed">#</span>Projects</router-link
        >
        <router-link :to="{ name: 'Contact' }" @click="closeMenu">
          <span class="text-primaryRed">#</span>Contact</router-link
        >
      </div>

      <button
        class="text-primaryRed duration-500 md:hidden"
        @click="openMenu"
        :style="{ transform: `rotate(${rotateDegree}deg)` }"
      >
        <Icon icon="heroicons:bars-3-bottom-right-solid" class="h-8 w-8" />
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      rotateDegree: 0,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
      this.rotateDegree = this.isOpen ? 180 : 0;
    },
    closeMenu() {
      this.isOpen = false;
      this.rotateDegree = this.isOpen ? 180 : 0;
    },
  },
  computed: {
    menuBar() {
      return this.isOpen ? "left-0" : "left-[-100%]";
    },
  },
};
</script>
