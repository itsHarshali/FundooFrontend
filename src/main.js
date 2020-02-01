import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import { MdButton, MdContent, MdTabs} from 'vue-material/dist/components'
import VueLogger from 'vuejs-logger';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import routes from './routes';
import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx';
// import vuetify from '@/plugins/vuetify' // path to vuetify export

const options = {
  isEnabled: true,
  //logLevel : isProduction ? 'error' : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueRouter)
Vue.use(VueLogger, options);
Vue.use(VueMaterial);
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(VueRx, Rx)

Vue.config.productionTip = false

//The next step is to create a VueRouter instance and pass the routes object.
//So, we need to import routes.js file inside the main.js file.
// const router = new VueRouter({routes});
const router = new VueRouter({
               mode: 'history', 
               routes
              });

new Vue({
  // vuetify,
  router  ,   //we have passed the router object while creating a vue instance
  render: h => h(App)
}).$mount('#app')
