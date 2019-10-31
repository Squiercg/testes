
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const URL = 'https://jsonplaceholder.typicode.com/posts';

import axios from "axios/dist/axios.js";

export default new Vuex.Store({
    state: {
        count: 3,
        posts: [],
        loading: true
    },
    actions: {
    loadData({commit}) {
        if(this.state.loading) {
            axios.get(URL).then((response) => {
                // console.log(response.data, this)
                commit('updatePosts', response.data)
                commit('changeLoadingState', false)
                })
            }
        }
    },
    mutations: {
        increment (state) {
            state.count=state.count+2
        },
        decrement (state) {
            state.count--
        },
        updatePosts(state, posts) {
            state.posts = posts
        },
        changeLoadingState(state, loading) {
            state.loading = loading
        }
    }
});