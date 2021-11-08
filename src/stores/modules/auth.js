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
      return register(credentials).then((response) => {
        // send error response recieved from backend
        if (response.status === false) {
          return response;
        }
        const { token, emailId, username } = response;
        Vue.$cookies.set(KEY_TOKEN, token);
        Vue.$cookies.set(KEY_EMAIL, emailId);
        Vue.$cookies.set(KEY_NAME, username);

        commit('setToken', token);
        commit('setEmail', emailId);
        commit('setName', username);
        return response;
      });
    },

    // Login vuex actions
    login({ commit }, credentials) {
      return login(credentials).then((response) => {
        // send error response recieved from backend
        if (response.status === false) {
          return response;
        }
        const { token, emailId, username } = response;
        Vue.$cookies.set(KEY_TOKEN, token);
        Vue.$cookies.set(KEY_EMAIL, emailId);
        Vue.$cookies.set(KEY_NAME, username);

        commit('setToken', token);
        commit('setEmail', emailId);
        commit('setName', username);
        return response;
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
