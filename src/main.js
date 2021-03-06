import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

import i18n from './tools/i18n'


window.MainColor = '#f00'


import '../src/theme/index.less'


import {
  Button,
  Table,
  Form,
  Input,
  FormItem,
  Icon,
  Radio,
  RadioGroup,
  Page,
  Modal,
  Row,
  Col,
  DatePicker,
  TimePicker,
  CheckboxGroup,
  Checkbox,
  Select
} from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Form', Form);
Vue.component('Input', Input);
Vue.component('FormItem', FormItem);
Vue.component('Icon', Icon);
Vue.component('Radio', Radio)
Vue.component('RadioGroup', RadioGroup)
Vue.component('Page', Page)
Vue.component('Modal', Modal)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('DatePicker', DatePicker)
Vue.component('TimePicker', TimePicker)
Vue.component('CheckboxGroup', CheckboxGroup)
Vue.component('Checkbox', Checkbox)
Vue.component('Select', Select)

require('../mock')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
