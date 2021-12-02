import {
  TYPES
} from '../actions/actions';

export const shoppingInitialState = {
  listaGeneral: [],
  listaCarrito: [],
  itemSeleccionado: {},
  item: {}
};

export function shoppingReducer(state, action) {
  switch (action.type) {

    case TYPES.GET_ALL:
      return {
        ...state, listaGeneral: action.payload
      };
    case TYPES.ADD_PRODUCT:
      return {
        ...state, listaCarrito: [...state.listaCarrito, action.payload]
      };
    case TYPES.CANCEL_ORDER:
      break;
    case TYPES.SET_ITEM:
      return {
        ...state, itemSeleccionado: action.payload
      }
      case TYPES.DELETE_PRODUCT:
        return {
          ...state, listaCarrito: action.payload
        }
        case TYPES.SET_USERNAME:
          return {
            ...state, item: action.payload
          }
          case TYPES.INITIAL_STATE:
            return shoppingInitialState

          default:
            break;
  }
}