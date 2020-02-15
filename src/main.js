import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
// import env from './env'


//mock开关
const mock = true;
if (mock) {
  require('./mock/api');
}

// 根据前端的跨域方式做调整 /a/b : /api/a/b =>/a/b
axios.defaults.baseURL = '/api';
// 超时
axios.defaults.timeout = 8000;
// 根據環境變量獲取不同的請求地址
// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login';
  } else {
    // 报错
    alert(res.msg);
    return Promise.reject(res);
  }
})

// 加载cookie
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
// 注册axios
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
