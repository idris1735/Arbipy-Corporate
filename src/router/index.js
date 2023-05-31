import { createRouter, createWebHistory } from 'vue-router'

// Default Pages
import Login from '../views/layouts/auth/Login.vue'
import Register from '../views/layouts/auth/Register.vue'
// Component Pages
import Dashboard from '../views/Dashboard.vue'
import Vaccrodion from '../views/components/accordion.vue'
import Vbutton from '../views/components/button.vue'
import Vdropdown from '../views/components/dropdown.vue'
import Vmodal from '../views/components/modal.vue'
import ForgotPassword from '../views/layouts/auth/forgot-password.vue'

// layouts
import Blank from '../views/layouts/Blank.vue'

// error page
import Page404 from '../views/layouts/error/404.vue'
import Page500 from '../views/layouts/error/500.vue'
import PageMaintenance from '../views/layouts/error/maintenance.vue'
import Tables from '../views/tables.vue'

var appname = ' - Arbipy Coperate App'

const routes = [
  // Routes
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { title: 'Login' + appname, hideNav: true },
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: Register,
    meta: { title: 'Register' + appname, hideNav: true },
  },

  // Components based Routes
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard ' + appname },
  },
  {
    path: '/Function_A',
    name: 'Vaccordion',
    component: Vaccrodion,
    meta: { title: 'Function_A' + appname },
  },
  {
    path: '/Function_B',
    name: 'Vbutton',
    component: Vbutton,
    meta: { title: 'Function_B' + appname },
  },
  {
    path: '/Function_C',
    name: 'Vdropdown',
    component: Vdropdown,
    meta: { title: 'Function_C' + appname },
  },
  {
    path: '/Function_D',
    name: 'Vmodal',
    component: Vmodal,
    meta: { title: 'Function_D' + appname },
  },
  // layouts

  {
    path: '/Blank',
    name: 'Blank Page',
    component: Blank,
    meta: { title: 'Blank Page' + appname },
  },
  {
    path: '/auth/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: { title: 'i Forgot Password' + appname, hideNav: true },
  },
  // layout/error
  // default page 404
  {
    path: '/:pathMatch(.*)*',
    name: 'Page404',
    component: Page404,
    meta: { title: 'Upps! 404' + appname, hideNav: true },
  },
  {
    path: '/500',
    name: 'Page500',
    component: Page500,
    meta: { title: 'Server internal Error' + appname, hideNav: true },
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: PageMaintenance,
    meta: {
      title: 'Sorry the app has been Maintenance' + appname,
      hideNav: true,
    },
  },
  {
    path: '/signout',
    name: 'signout',
    component: Tables,
    meta: {
      title: 'signout' + appname,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  linkExactActiveClass: 'exact-active',
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
