import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import App from './App.vue'
// import env from './env'


//mock开关
const mock = false;
if (mock) {
  require('./mock/api');
}

// 根据前端的跨域方式做调整 /a/b : /api/a/b =>/a/b
axios.defaults.baseURL = '/api';
// 超时
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    // 判断当前路径不是首页时，跳转到登录页面
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    // 抛回去一个错误，代码本身就不会进then，而是进入catch
    return Promise.reject(res);
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
  store,
  router,
  render: h => h(App),
}).$mount('#app')
