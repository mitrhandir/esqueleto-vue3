import { Module } from 'vuex';
import { RootState } from "../types";
// ...
import { AlmacenState } from "./types";
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state: AlmacenState = {
  data: [],
  ocupado: false
}

export const almacen: Module<AlmacenState, RootState> = {
  state,
  getters,
  mutations,
  actions
}