import { TYPES } from '../actions/action';

export const shoppingInitialState = {
        listGeneral: [],
        listaCarrito: [],
        itemSeleccionado: {
            name: "Producto 1",
            price: 12.3,
            productCode: 0,
            description: "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
            category: "1",
            picture: "https://i.ibb.co/NyS9VGh/dario-KJZ-utw-Lc0w-unsplash.jpg"
        },
        item: {}
}


export function shoppingReducer (state, action) {
    switch (action.type) {
        case TYPES.ADD_PRODUCT:
            const list = state.listaCarrito
            list.push(action.payload)
            return{
                ...state,
                listaCarrito: list
            }
            break;
        case TYPES.DELETE_ITEM:
            return {
                ...state,
                itemSeleccionado: {}
            };
            break;
        default:
            console.log(state);
            break;

    }
}