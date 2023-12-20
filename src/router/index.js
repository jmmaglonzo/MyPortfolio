import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HeroSection.vue";
import Skills from "@/views/SkillSection.vue";
import Project from "@/views/ProjectSection.vue";
import Contact from "@/views/ContactForm.vue";
import About from "@/views/AboutSection.vue";

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "Skills", path: "/Skills", component: Skills },
  { name: "Projects", path: "/Project", component: Project },
  { name: "Contact", path: "/Contact", component: Contact },
  { name: "About", path: "/About", component: About },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "border-b border-b-2 border-primaryRed",
});

export default router;
