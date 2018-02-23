import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue' //import component

//name the selector and pass the component name in
Vue.component('app-server',Home);


new Vue({
  el: '#app',
  render: h => h(App)
})
