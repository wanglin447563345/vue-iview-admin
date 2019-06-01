import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import 'iview/dist/styles/iview.css';
import i18n from './tools/i18n'

import {
  Button,
  Table,
  Form,
  Input,
  FormItem,
  Icon
} from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Form', Form);
Vue.component('Input', Input);
Vue.component('FormItem', FormItem);
Vue.component('Icon', Icon);

require('../mock')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
