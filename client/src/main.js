import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GAuth from "vue-google-oauth2";
//import en from "./translations/en.json";
//import mr from "./translations/mr.json";

import i18n from "./i18n";

//import Routes from "./router";

/*const i18n = createI18n({
  messages: {
    en: en,
    mr: mr
  },
  fallbackLocale: "en"
});
*/
const gAuthOptions = {
  clientId: '784617817891-41903f34gle3945o9g6alpbfkqp239ek.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
  //prompt: 'consent',
  fetch_basic_profile: true 
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

Vue.use(GAuth, gAuthOptions);

//createApp(App).use(router).use(store).use(i18n).use(GAuth, gAuthOptions).mount("#app");
