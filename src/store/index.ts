import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { almacen } from './almacen/index';
import { getters } from './getters';
import { mutations } from './mutations';

const store: StoreOptions<RootState> = {
  state: {
    ip: ''
  },
  getters,
  mutations,
  modules: {
    almacen
  }
}

export default new Vuex.Store<RootState>(store);