import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import 'iview/dist/styles/iview.css';

import { 
  Button, 
  Table,
  Form,
  Input,
  FormItem

} from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Form', Form);
Vue.component('Input', Input);
Vue.component('FormItem', FormItem);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
