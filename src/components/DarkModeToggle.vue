<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <body class="">
    <p class="text-black dark:text-white">isDark: {{ isDark }}</p>
    <button @click="toggleDark()" class="text-white bg-primaryRed px-8 py-2">
      Toggle
    </button>
  </body>
</template>

<style lang="scss" scoped></style>
