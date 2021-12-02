import { TYPES } from '../actions/Action';
//import { data } from '../dataQuemada';

export const shoppingInitialState = {
  listaGeneral: [],
  listaCarrito: [],
  itemSeleccionado: {},
  item: {}
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.GET_ALL:
      return { ...state, listaGeneral: action.payload };
    case TYPES.ADD_PRODUCT:
      return { ...state, listaCarrito: [...state.listaCarrito, action.payload] };
    case TYPES.CANCEL_ORDER:
      break;
    default:
      break;
  }
}
