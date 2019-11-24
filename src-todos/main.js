import Vue from 'vue'
import App from './App'
import store from './store'
import './base.css'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
