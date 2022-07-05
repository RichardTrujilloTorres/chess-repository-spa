import { createRouter, createWebHistory } from 'vue-router'
import Profile from "../views/Profile";
import Feed from "../views/Feed";
import Login from "../views/Login";
import Game from "../views/Game";
import Upload from "../views/Upload";
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Feed',
    component: Feed,
    meta: {
      auth: true,
    },
  },
  {
    path: '/games/upload',
    name: 'Upload',
    component: Upload,
    props: {
      uploadUrl: `${process.env.MIX_APP_URL}/games`,
    },
    meta: {
      auth: true,
    },
  },
  {
    path: '/games/:id',
    name: 'Game',
    component: Game,
    meta: {
      auth: true,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  store.dispatch('userModule/fetchUser')
})

export default router
