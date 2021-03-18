import { MutationTree } from "vuex";
import { RootState } from './types';

export enum StateMutation {
  SET_IP = "SET_IP"
}

export const mutations: MutationTree<RootState> = {
  [StateMutation.SET_IP](state, payload: string) {
    state.ip = payload;
  }
}