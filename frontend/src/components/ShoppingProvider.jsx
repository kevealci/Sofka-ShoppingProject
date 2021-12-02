import React, {useReducer} from 'react';
import {shoppingReducer, shoppingInitialState} from '../reducers/shoppingReducer';
import {shoppingContext} from '../context/shoppingContext';


export const ShoppingProvider = ({children}) =>{
    const[state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);


    return<shoppingContext.Provider value={{state, dispatch}}>
        {children}
    </shoppingContext.Provider>
}