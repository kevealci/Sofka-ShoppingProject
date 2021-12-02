import {createContext} from 'react';
import {shoppingInitialState} from '../reducers/shoppingReducer';

export const shoppingContext = createContext(shoppingInitialState);