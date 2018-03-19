import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { router } from '../main';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: null,
    userId: null,
    userName: null,
    expiration: null,
    role: null,
    showRoosterModal: false
  },
  mutations: {
    authUser (state , userData) {
      state.token = userData.token;
      state.userId = userData.userId;
      state.userName = userData.userName;
      state.expiration = userData.expiration;
      state.role = userData.role
    },

    showRoosterModal (state , bool) {
      state.showRoosterModal = bool
    }

  },
  actions: {
    login ({commit} , form) {
      axios.post('/login' , form)
        .then(
            (response) => {console.log(response);
          commit('authUser' , {
            token: response.data.token,
            userId: response.data.userId,
            userName: response.data.userName,
            expiration: response.data.expiration,
            role: response.data.role});
            router.push('algemeen')
          })
			.catch(error => console.log('We got an error'))
	},

  logout ({commit}) {
    commit('authUser' , {
      token: null,
      userId: null,
      userName: null,
      expiration: null,
      role: null});
      router.push('inloggen')
  }

  },
  getters: {
    token: (state) => {
      return state.token
    },
    userId: (state) => {
      return state.userId
    },
    userName: (state) => {
      return state.userName
    },
    expiration: (state) => {
      return state.expiration
    },
    role: (state) => {
      return state.role
    },
    isAdmin: (state) => {
      return state.role === 'admin'
    },
    isLoggedin: (state) => {
      return state.token != null
    },
    notLoggedin: (state) => {
      return state.token === null
    },
    showRoosterModal: (state) => {
      return state.showRoosterModal
    }

  }

})
