import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import Todo from './todo/index';
import Contatos from './contatos/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  modules: {
    Todo,
    Contatos
  }
})