<template>
  <the-header />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
    <footer-section />
  </main>
</template>

<script>
import TheHeader from "@/components/UI/HeaderSection.vue";
import { RouterView } from "vue-router";
export default {
  components: {
    TheHeader,
    RouterView,
  },
};
</script>

<style>
.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active,
.route-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>
