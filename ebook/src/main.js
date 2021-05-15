// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import '@/assets/style/global.scss'
=======
import '@/assets/styles/global.scss'
>>>>>>> 33d2be378c06b226b6e1c233856bcd48f86fb121

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
