import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta);

// This is a global mixin, it is applied to every vue instance
Vue.mixin({
  data: function() {
    return {
      transAudio: new Audio(require('@/assets/audio/magicPortal.mp3')),
    }
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')

