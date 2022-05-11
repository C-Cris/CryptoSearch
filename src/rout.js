import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/A-About'
import Error from '@/views/A-Error'
import CoinDetail from '@/views/CoinDetail.vue'

//Funcion para agregar plugins de forma progresiva
Vue.use(Router)

export default new Router({
  mode: 'history',

  //Comandos esenciales para cualquier ruta
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      name: 'Error',
      component: Error,
    },
    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: CoinDetail,
    },
  ],
})
