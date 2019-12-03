import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './bus'
import currencyFilter from './filter/currency'
import Loading from 'vue-loading-overlay';
import Vuex from 'vuex'

import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';


//插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

axios.defaults.withCredentials = true;
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueAxios, axios);
Vue.use(Vuex)
Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)



new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zhTW'
})
Vue.use(VeeValidate, {
    events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
    i18n,
    dictionary: {
        zhTW
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
        const vm = this;
        axios.post(api).then(response => {
            if (response.data.success) {
                next();
            } else {
                next({ path: '/login' })
            }
        });
    } else {
        next();
    }
})