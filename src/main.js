import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import formCreate from '@form-create/iview4'
import VueLazyload from 'vue-lazyload'

import Message from '@/components/Message/index.js'
import Loading from '@/components/Loading/index.js'

Vue.use(ViewUI)
Vue.use(formCreate)
Vue.use(VueLazyload)
Vue.use(Message)
Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
