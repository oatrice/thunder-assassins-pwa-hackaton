// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.material.registerTheme('button-login-facebook', {
  primary: {
    color: 'blue',
    hue: 900,
    textColor: 'white'
  }
})

Vue.material.registerTheme('button-login-google', {
  primary: {
    color: 'red',
    hue: 900,
    textColor: 'white'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.material.setCurrentTheme('button-login-facebook')
