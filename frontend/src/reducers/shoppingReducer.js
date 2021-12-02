import {
    TYPES
} from '../actions/action';

export const shoppingInitialState = {
    listGeneral: [],
    listCarrito: [],
    itemSeleccionado: {},
    item: {}
}


export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.GET_ALL:
            console.log('entro');
            state.listGeneral = action.payload;
            break;
        case TYPES.ADD_PRODUCT:
            console.log('add product');
            state.listCarrito.push(action.payload);
            break;
        default:
            console.log('default action');
            break;

    }
}