import { MutationTree } from "vuex";
import { AlmacenState } from "./types";

export enum AlmacenMutation {
  SET_DATA = "SET_DATA",
  SET_OCUPADO = "SET_OCUPADO",
}

export const mutations: MutationTree<AlmacenState> = {
  [AlmacenMutation.SET_DATA](state, payload: Array<unknown>) {
    state.data = payload;
  },
  [AlmacenMutation.SET_OCUPADO](state, payload: boolean) {
    state.ocupado = payload;
  }
}