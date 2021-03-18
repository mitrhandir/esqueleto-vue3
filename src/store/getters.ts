import { GetterTree } from "vuex"
import { RootState } from './types'

export const getters: GetterTree<RootState, RootState> = {
  ip(state): string {
    return state.ip;
  }
}