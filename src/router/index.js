import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import productInfo from '../views/ProductInfo.vue'
import categories from '../views/Categories.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Products from '../components/Products.vue'
import Coupon from '../views/Coupon.vue'
import checkout from '../views/checkout.vue'
import CustomerCheckout from '../views/CustomerCheckout.vue'
import Orderlist from '../views/Orderlist.vue'

Vue.use(VueRouter)

// axios.defaults.withCredentials = true;
// Vue.config.productionTip = false;


export default new VueRouter({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,

        },
        {
            path: '/login',
            name: 'Login',
            component: Login,

        },
        {
            path: '/categories',
            name: 'categories',
            component: categories,
        },
        {
            path: '/categories/:productId',
            name: 'productInfo',
            component: productInfo,
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: checkout,
        },
        {
            path: '/customer_checkout/:orderId',
            name: 'CustomerCheckout',
            component: CustomerCheckout,
        },
        {
            path: '/admin',
            name: 'Dashboard',
            component: Dashboard,
            meta: { requiresAuth: true },
            children: [{
                    path: 'products',
                    name: 'Products',
                    component: Products,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'Coupon',
                    name: 'Coupon',
                    component: Coupon,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'Orderlist',
                    name: 'Orderlist',
                    component: Orderlist,
                    meta: { requiresAuth: true },
                },
            ]
        },

    ]

})