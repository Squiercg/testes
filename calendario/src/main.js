import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data: {
    notes: [],
    timestamps: [],
    placeholder: 'Enter a note'
  },
  render: h => h(App),
}).$mount('#app')
