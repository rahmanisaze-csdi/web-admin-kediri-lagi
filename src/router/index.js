import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    },
    children: [
      
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
          import("../views/Dashboard.vue"),
      },

      {
        path: "/alam",
        name: "Alam",
        component: () =>
          import("../views/Alam.vue"),
      },


      {
        path: "/sejarah",
        name: "Sejarah",
        component: () =>
          import("../views/Sejarah.vue"),
      },

      {
        path: "/religi",
        name: "Religi",
        component: () =>
          import("../views/Religi.vue"),
      },

      {
        path: "/kuliner",
        name: "Kuliner",
        component: () =>
          import("../views/Kuliner.vue"),
      },

      {
        path: "/pasar",
        name: "Pasar",
        component: () =>
          import("../views/Pasar.vue"),
      },

      {
        path: "/cafe",
        name: "Cafe",
        component: () =>
          import("../views/Cafe.vue"),
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../components/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import("../components/Signup.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authenticatedUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !authenticatedUser) {
    alert("You are not authorized to access this area.");
    next("login");
  }
  else {
    next();
  }
});

export default router;
