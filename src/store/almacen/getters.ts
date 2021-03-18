import { GetterTree } from "vuex"
import { AlmacenState } from "@/store/almacen/types"
import { RootState } from '@/store/types'

export const getters: GetterTree<AlmacenState, RootState> = {
  getData(state): Array<object> {
    return state.data
  },
  ocupado(state): boolean {
    return state.ocupado;
  },
  getProcedimientoOrden(state) {
    return (payload: any) => {
      const index = payload.index;
      const ordenId = payload.ordenId;
      if (state.data[index].orden.id == ordenId) {
        return state.data[index].procedimiento;
      } else return undefined;
    }
  },
  getFechaOrden(state) {
    return (payload: any) => {
      const index = payload.index;
      const ordenId = payload.ordenId;
      if (state.data[index].orden.id == ordenId) {
        return state.data[index].orden.fecha;
      } else return undefined;
    }
  },
  getConvenio(state) {
    return (payload: any) => {
      const index = payload.index;
      const ordenId = payload.ordenId;
      if (state.data[index].orden.id == ordenId) {
        return state.data[index].datos_convenio;
      } else return undefined;
    }
  },
  getViaFacturacion(state) {
    return (payload: any) => {
      const index = payload.index;
      const ordenId = payload.ordenId;
      if (state.data[index].orden.id == ordenId) {
        return state.data[index].datos_convenio.convenio.via;
      } else return undefined;
    }
  },
  getFinanciador(state) {
    return (payload: any) => {
      const index = payload.index;
      const ordenId = payload.ordenId;
      if (state.data[index].orden.id == ordenId) {
        return state.data[index].financiador;
      } else return undefined;
    }
  }
}