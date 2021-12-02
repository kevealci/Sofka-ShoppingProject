import { TYPES } from '../actions/actions';
import { data } from '../dataQuemada';

export const shoppingInitialState = {
  listGeneral: [],
  listaCarrito: [...data],
  itemSeleccionado: {},
  item: {}
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.SEARCH:
      break;
    default:
      console.log(state);
      break;
  }
}
