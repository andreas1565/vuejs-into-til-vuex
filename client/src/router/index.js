import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EditProduct from '../views/EditProduct.vue';
import NotFound from '../views/NotFound.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  { path: '/404', component: NotFound },
  { path: '*', redirect: '/404' }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
