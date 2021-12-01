import { TYPES } from '../actions/Action';

export const productInitialState = {
    product: {
        listGeneral: [],
        listaCarrito: [],
        itemSeleccionado: {},
        item: {}
    }
}

export function productReducer(state, action) {
    switch (action.type) {
        case TYPES.SEARCH:
            state.product.list = action.items;
            break;
        default:
            console.log(state);
            break;

    }
}