import { login, register } from '@/services/auth';
import Vue from 'vue';

const KEY_TOKEN = 'jwt';
const KEY_EMAIL = 'emailId';
const KEY_NAME = 'username';

const auth = {
  state: {
    token: Vue.$cookies.get(KEY_TOKEN) || '',
    emailId: Vue.$cookies.get(KEY_EMAIL) || '',
    username: Vue.$cookies.get(KEY_NAME) || '',
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setEmail(state, emailId) {
      state.emailId = emailId;
    },
    setName(state, username) {
      state.username = username;
    },
  },

  actions: {
    // Register vuex actions
    register({ commit }, credentials) {
      return register(credentials).then((data) => {
        const { token, emailId, username } = data;
        Vue.$cookies.set(KEY_TOKEN, token);
        Vue.$cookies.set(KEY_EMAIL, emailId);
        Vue.$cookies.set(KEY_NAME, username);

        commit('setToken', token);
        commit('setEmail', emailId);
        commit('setName', username);
        return username;
      });
    },

    // Login vuex actions
    login({ commit }, credentials) {
      return login(credentials).then((data) => {
        const { token, emailId, username } = data;
        Vue.$cookies.set(KEY_TOKEN, token);
        Vue.$cookies.set(KEY_EMAIL, emailId);
        Vue.$cookies.set(KEY_NAME, username);

        commit('setToken', token);
        commit('setEmail', emailId);
        commit('setName', username);
        return username;
      });
    },

    logout({ commit }) {
      Vue.$cookies.remove(KEY_TOKEN);
      Vue.$cookies.remove(KEY_EMAIL);
      Vue.$cookies.remove(KEY_NAME);

      commit('setToken', '');
      commit('setEmail', '');
      commit('setName', '');

      return Promise.resolve();
    },
  },
};

export default auth;
