import Vue from 'vue'

//Posición fija:
import App from './App.vue'

//Posición relativa dentro de src:
import '@/assets/css/tailwind.css'

import Chartkick from 'vue-chartkick'
import { Chart } from 'chart.js'

//Importación según la documentación de la libreria:
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/rout'
import { dollarFilter } from '@/filter'
import { percentFilter } from '@/filter'

//Instrucción para utilizar las importaciones:
Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
