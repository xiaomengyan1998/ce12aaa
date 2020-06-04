import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/bass.scss'

import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);


// import { Button } from 'vant'
// import { Swipe, SwipeItem } from 'vant'
// import { Form } from "vant";

// Vue.use(Button);
// Vue.use(Swipe);
// Vue.use(SwipeItem);
// Vue.use(Form);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
