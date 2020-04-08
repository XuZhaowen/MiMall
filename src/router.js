import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Login from './pages/login'

// import Order from './pages/order'
// import OrderList from './pages/orderList'
import OrderConfirm from './pages/orderConfirm'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

import Cart from './pages/cart'

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
                    component: resolve => require(['./pages/index.vue'], resolve),
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: resolve => require(['./pages/detail.vue'], resolve),
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
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
                    component: OrderConfirm
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    // 支付页面
                    component: OrderPay
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    // 跳转到支付宝的中转页面
                    component: AliPay,
                }
            ]
        }
    ]
})