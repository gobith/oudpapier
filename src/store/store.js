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
    showRoosterModal: false,
    userPartTime: null,
    schedule: [],
    users: [],
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
    },

    userPartTime (state , userPartTime) {
      state.userPartTime = userPartTime
    },

    schedule (state , schedule) {
      state.schedule = schedule
    },

    users (state , users) {
      state.users = users
    },

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

  getSchedule ({commit}) {
    axios
      .get('schedule?token=' + this.getters.token)
      .then((response) => {commit('schedule' , response.data)})
      .catch(error => console.log('We got an error'))
},

  getUsers ({commit}) {
    axios
      .get('/users')
      .then((response) => {console.log('we have users'); commit('users' , response.data)})
      .catch(error => console.log(error))
  },

  postUserPartTime ({commit} , userPartTime) {
  axios
    .post('userparttime?token=' + this.getters.token , userPartTime)
    .then((response) => {console.log(response.data); commit('schedule' , response.data)})
    .catch(error => console.log(error))
},
  logout ({commit}) {
    commit('authUser' , {
      token: null,
      userId: null,
      userName: null,
      expiration: null,
      role: null,
      userPartTime: null});
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
    },
    userPartTime: (state) => {
      return state.userPartTime
    },
    schedule: (state) => {
      return state.schedule
    },
    users: (state) => {
      return state.users
    },

  }

})
