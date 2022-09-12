import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueConfetti from 'vue-confetti'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

Vue.use(VueConfetti)
