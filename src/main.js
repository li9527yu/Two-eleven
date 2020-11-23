import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Row,Col,Container,Header,Main,Form,FormItem,Button,Input,Radio,Select,Option,RadioGroup,
  RadioButton,Menu,MenuItem,Dialog} from 'element-ui'
Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.use(VueAxios, axios);
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Form)
Vue.use(Button)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Option)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dialog)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
