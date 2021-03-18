import { MutationTree } from "vuex";
import { AlmacenState, Orden } from "@/store/almacen/types";

export enum AlmacenMutation {
  SET_DATA = "SET_DATA",
  SET_OCUPADO = "SET_OCUPADO",
  SET_ORDEN_FECHA = "SET_ORDEN_FECHA",
  SET_CONVENIO = "SET_CONVENIO",
  SET_COMPONENTE_CODIGO = "SET_COMPONENTE_CODIGO",
  SET_COMPONENTE_NUMERO = "SET_COMPONENTE_NUMERO",
  SET_COMPONENTE_CANTIDAD = "SET_COMPONENTE_CANTIDAD",
  SET_COMPONENTE_FUNCION = "SET_COMPONENTE_FUNCION",
  SET_COMPONENTE_VALOR_UNITARIO = "SET_COMPONENTE_VALOR_UNITARIO",
  SET_NUEVO_COMPONENTE = "SET_NUEVO_COMPONENTE",
}

export const mutations: MutationTree<AlmacenState> = {
  [AlmacenMutation.SET_DATA](state, payload: Array<Orden>) {
    state.data = payload;
  },
  [AlmacenMutation.SET_OCUPADO](state, payload: boolean) {
    state.ocupado = payload;
  },
  [AlmacenMutation.SET_ORDEN_FECHA](state, payload) {
    const index = payload.index;
    const fecha = payload.fecha;
    state.data[index].orden.fecha = fecha;
  },
  [AlmacenMutation.SET_CONVENIO](state, payload) {
    const index = payload.index;
    const ordenId = payload.ordenId;
    const value = payload.value;
    if (state.data[index].orden.id == ordenId) {
      /* eslint-disable-next-line */
      state.data[index].datos_convenio = value;
    }
  },
  [AlmacenMutation.SET_COMPONENTE_CODIGO](state, payload) {
    const index = payload.index;
    const componenteIndex = payload.componenteIndex;
    const ordenId = payload.ordenId;
    const value = payload.value;
    if (state.data[index].orden.id == ordenId) {
      // ...
      if (state.data[index].componentes[componenteIndex]) {
        state.data[index].componentes[componenteIndex].codigo = value;
      }
    }
  },
  [AlmacenMutation.SET_COMPONENTE_CANTIDAD](state, payload) {
    const index = payload.index;
    const componenteIndex = payload.componenteIndex;
    const ordenId = payload.ordenId;
    const value = payload.value;
    if (state.data[index].orden.id == ordenId) {
      // ...
      if (state.data[index].componentes[componenteIndex]) {
        state.data[index].componentes[componenteIndex].cantidad = value;
        /* eslint-disable-next-line */
        const total = Math.round((value * state.data[index].componentes[componenteIndex].valor_unitario * 100) /100); 
        state.data[index].componentes[componenteIndex].valor = total;
      }
    }
  },
  [AlmacenMutation.SET_COMPONENTE_FUNCION](state, payload) {
    const index = payload.index;
    const componenteIndex = payload.componenteIndex;
    const ordenId = payload.ordenId;
    const value = payload.value;
    if (state.data[index].orden.id == ordenId) {
      // ...
      if (state.data[index].componentes[componenteIndex]) {
        state.data[index].componentes[componenteIndex].funcion = value;
      }
    }
  },
  [AlmacenMutation.SET_COMPONENTE_VALOR_UNITARIO](state, payload) {
    const index = payload.index;
    const componenteIndex = payload.componenteIndex;
    const ordenId = payload.ordenId;
    const value = payload.value;
    if (state.data[index].orden.id == ordenId) {
      // ...
      if (state.data[index].componentes[componenteIndex]) {
        /* eslint-disable-next-line */
        state.data[index].componentes[componenteIndex].valor_unitario = value;
        const total = Math.round((value * state.data[index].componentes[componenteIndex].cantidad * 100) /100); 
        state.data[index].componentes[componenteIndex].valor = total;
      }
    }
  },
  [AlmacenMutation.SET_COMPONENTE_NUMERO](state, payload) {
    const index = payload.index;
    const componenteIndex = payload.componenteIndex;
    const ordenId = payload.ordenId;
    const value = payload.value;
    if (state.data[index].orden.id == ordenId) {
      // ...
      if (state.data[index].componentes[componenteIndex]) {
        state.data[index].componentes[componenteIndex].numero = value;
      }
    }
  },
  [AlmacenMutation.SET_NUEVO_COMPONENTE](state, payload) {
    const index = payload.index;
    const ordenId = payload.ordenId;
    const descripcion = payload.descripcion;
    if (state.data[index].orden.id == ordenId) {
      // ...
      console.log(`Agregar un nuevo componente a la orden ${ordenId} en posicion ${index}`)
      /* eslint-disable-next-line */
      const element = {
        practica_id: 0, // eslint-disable-line 
        subcategoria_id: 0, // eslint-disable-line
        categoria_id: 0, // eslint-disable-line
        codigo: "",
        descripcion: descripcion,
        honorarios: 0,
        honorariosic: 0,
        ayudante: 0,
        ayudantex2: 0,
        gastos: 0,
        total: 0,
        cantidad: 1,
        nomenclado: 0,
        subcategoria_codigo: '', // eslint-disable-line
        subcategoria_descripcion: "", // eslint-disable-line
        descripcion_tmp: "", // eslint-disable-line
        valor: 0,
        valor_unitario: 0, // eslint-disable-line
        valorUnitarioOriginal: 0,
        numero: "",
        funcion: "",
        honorario: true,
        manual: true
      }
      state.data[index].componentes.push(element);
    }
  } 
}