import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import '@babel/polyfill'
import './sass/main.scss'

Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    // Web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyBIj_wo5X2TSfIve1PUP5C6ihDdTeBP2pQ',
      authDomain: 'ads-base.firebaseapp.com',
      databaseURL: 'https://ads-base.firebaseio.com',
      projectId: 'ads-base',
      storageBucket: 'ads-base.appspot.com',
      messagingSenderId: '510774591642',
      appId: '1:510774591642:web:63f82d23936e10b0a71f23',
      measurementId: 'G-SCPVGR6QCZ'
    }

    // Initialize Firebase
    fb.initializeApp(firebaseConfig)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
