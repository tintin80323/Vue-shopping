import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        products: [],
        cart: {
            carts: []
        },
        pagination: {},
    },
    mutations: {
        LOADING(state, status) {
            state.isLoading = status;
        },
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        CARTS(state, payload) {
            state.cart = payload;
        },
        PAGINATION(state, payload) {
            state.pagination = payload;
        }
    },
    actions: {
        updateLoading(context, status) {
            context.commit('LOADING', status)
        },
        getProducts(context, payload) {
            let api = payload
            context.commit('LOADING', true)
            axios.get(api).then(response => {
                console.log(response)
                context.commit('PRODUCTS', response.data.products)
                context.commit('PAGINATION', response.data.pagination)
                context.commit('LOADING', false)
            });
        },
        getCart(context) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            context.commit('LOADING', true)
            axios.get(api).then(response => {
                context.commit('CARTS', response.data.data)
                context.commit('LOADING', false)
            });
        },
        removeCartItem(context, id) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
            context.commit('LOADING', true)
            axios.delete(api).then(() => {
                context.dispatch('getCart')
                context.commit('LOADING', false)
            });
        },
        addToCart(context, { id, qty }) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            const cart = {
                product_id: id,
                qty
            };
            context.commit('LOADING', true)
            axios.post(api, { data: cart }).then(response => {
                context.dispatch('getCart')
                context.commit('LOADING', false)
            });
        },


    },
    getters: {
        products: state => { return state.products },
        cart: state => { return state.cart },
        pagination: state => { return state.pagination },
    }
})