import { TYPES } from '../actions/actions';

export const shoppingInitialState = {
  product: {
    listGeneral: [],
    listaCarrito: [],
    itemSeleccionado: {},
    item: {}
  }
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.SEARCH:
      state.product.list = action.items;
      break;
    default:
      console.log(state);
      break;
  }
}
