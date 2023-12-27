import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HeroSection.vue"),
  },
  {
    name: "Skills",
    path: "/Skills",
    component: () =>
      import(/* webpackChunkName: "SKills" */ "@/views/SkillSection.vue"),
  },
  {
    name: "Projects",
    path: "/Project",
    component: () =>
      import(/* webpackChunkName: "Project" */ "@/views/ProjectSection.vue"),
  },
  {
    name: "Contact",
    path: "/Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "@/views/ContactForm.vue"),
  },
  {
    name: "About",
    path: "/About",
    component: () =>
      import(/* webpackChunkName: "About" */ "@/views/AboutSection.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "border-b border-b-2 border-primaryRed animate-pulse",
});

export default router;
