import React, {useReducer} from 'react';
import {productReducer, productInitialState} from '../reducers/ProductReduce';
import {contexPrueba} from '../context/contexPrueba';


export const ProductProvider = ({children}) =>{
    const[state, dispatch] = useReducer(productReducer, productInitialState);


    return<contexPrueba.Provider value={{state, dispatch}}>
        {children}
    </contexPrueba.Provider>
}