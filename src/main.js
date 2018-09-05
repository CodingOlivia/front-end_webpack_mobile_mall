require(`quasar/dist/quasar.${__THEME}.css`)
require('swiper/dist/css/swiper.css')

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framewor
Vue.use(VueAwesomeSwiper)

let type = 'desktop'
if (navigator.appVersion.toLocaleLowerCase().indexOf('mobile') > 0) {
  type = 'mobile'
}
document.getElementsByTagName('html')[0].setAttribute('app', type)
document.getElementsByTagName('body')[0].setAttribute('app', type)
require(`./themes/mobile.styl`)
require('../src/assets/style.styl')
if (__THEME === 'mat') {
  // require('quasar-extras/roboto-font') // 打包run build时需要注释，run dev时可取消注释
}

import 'quasar-extras/animate'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/material-icons' // 打包run build时需要注释，run dev时可取消注释

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    data: {
      eventHub: new Vue()
    },
    render: h => h(require('./App').default)
  })
})

let socketVue = new Vue()
Vue.prototype.socket = socketVue
