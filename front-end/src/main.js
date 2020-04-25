import Vue from 'vue'
import App from './App.vue'
import './plugins/bootstrap-vue'
import VueRouter from 'vue-router'
import Scanner from './components/Scanner.vue' 
import ShoppingCart from './components/ShoppingCart.vue' 
import Home from './components/Home.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faCamera)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/scanner', component: Scanner},
  {path: '/cart', component: ShoppingCart},
  {path: '/', component: Home}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
