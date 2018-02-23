import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue' //import component

import User from './components/User.vue'


//name the selector and pass the component name in
Vue.component('app-server',Home);

Vue.component('app-user',User);


new Vue({
  el: '#app',
  render: h => h(App)
})
