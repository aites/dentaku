// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

var data = { a: 1 }
/* eslint-disable no-new */
/*
components: { App },
template: '<App/>',
↓これの省略形が
render: h => h(App)
*/
new Vue({
  el: '#app',
  render: h => h(App),
  data: data
})
