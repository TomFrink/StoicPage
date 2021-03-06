import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Books from "../views/Books.vue";
import About from "../views/About.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: {
      title: "Stoic",
    },
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/books",
    name: "books",
    component: Books,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
