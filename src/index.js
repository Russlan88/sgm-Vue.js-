import Vue from 'vue';
import Vuelidate from 'vuelidate';

import App from './components/app.vue';

// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// Vue.js
window.Vue = require('vue')
Vue.use(Vuelidate)

// Vue components (for use in html)
Vue.component('app', require('./components/app.vue').default)

// Vue init
new Vue({
  el: '#app',
  render: h => h(App)
})

