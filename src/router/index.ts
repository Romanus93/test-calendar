import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/momentjs",
    name: "MomentJs",
    component: () =>
      import(/* webpackChunkName: "momentjs" */ "../views/MomentJs.vue")
  },
  {
    path: "/basicCalendar",
    name: "BasicCalendar",
    component: () =>
      import(
        /* webpackChunkName: "basicCalendar" */ "../views/BasicCalendar.vue"
      )
  },
  {
    path: "/calendar",
    name: "calendar",
    props: true,
    component: () =>
      import(/* webpackChunkName: "calendar" */ "../views/Calendar.vue"),
    children: [
      {
        path: ":id",
        name: "Today",
        component: () =>
          import(/* webpackChunkName: "Today" */ "../views/Today.vue")
      }
    ]
  },
  {
    path: "/exCalendar",
    name: "ExCalendar",
    component: () =>
      import(
        /* webpackChunkName: "exCalendar" */ "../views/ExCalendar.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return { 
    //   top: 500,
    //   behavior: 'smooth'
    // }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {
      el: '#today',
      top: -500,
      behavior: 'smooth'
    }
  }
});

export default router;
