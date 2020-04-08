import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Login from './pages/login'

// import Order from './pages/order'
// import OrderList from './pages/orderList'
// import OrderConfirm from './pages/orderConfirm'
// import OrderPay from './pages/orderPay'
// import AliPay from './pages/alipay'

// import Cart from './pages/cart'

Vue.use(Router)

export default new Router({

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: 'index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: () => import('./pages/product.vue'),
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: () => import('./pages/detail.vue'),
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./pages/cart.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./pages/login.vue'),
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('./pages/order.vue'),
            children: [
                {
                    path: 'list',
                    name: 'order-list',
                    // 订单
                    component: () => import('./pages/orderList.vue'),
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    // 订单确认
                    component: () => import('./pages/orderConfirm.vue'),
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    // 支付页面
                    component: () => import('./pages/orderPay.vue'),
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    // 跳转到支付宝的中转页面
                    component: () => import('./pages/alipay.vue'),
                }
            ]
        }
    ]
})