import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserProfileView from "@/views/UserProfileView";
import UserListView from "@/views/UserListView";
import UserRegist from "@/views/UserRegist";
import UserLogin from "@/views/UserLogin.vue";
import NotFound from "@/views/NotFound.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),
  },
  {
    path: "/userprofile/",
    name: "userprofile",
    component: UserProfileView,
  },
  {
    path: "/userlist/",
    name: "userlist",
    component: UserListView,
  },
  {
    path: "/userregist/",
    name: "userregist",
    component: UserRegist,
  },
  {
    path: "/userlogin/",
    name: "userlogin",
    component: UserLogin,
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
