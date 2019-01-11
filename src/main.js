// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './main.scss'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
window.onload = function () {
  getRem(375, 100)
}
window.onresize = function () {
  getRem(375, 100)
}
function getRem (pwidth, prem) {
  var html = document.getElementsByTagName('html')[0]
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = oWidth / pwidth * prem + 'px'
}
