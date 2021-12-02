import React from 'react'
import {Button} from './Button'
import {TYPES} from '../actions/action'
import {useContext} from 'react'
import {shoppingContext} from '../context/shoppingContext'

export const Footer = () => {
    const {state, dispatch } = useContext(shoppingContext);
    const comeback = () => {
        dispatch({type: TYPES.DELETE_ITEM})
    console.log(state)
    }
    const addProduct = () => {
        dispatch({type: TYPES.ADD_PRODUCT, payload: state.itemSeleccionado})
    console.log(state)
    }
    return (
        <div className="mt-4">
            <div className="d-flex justify-content-evenly">
                <div className="row">
                    <div className="col col-6">
                        <Button classes={"btn btn-success"} onClick={addProduct}>Agregar</Button>
                    </div>
                    <div className="col col-6">
                        <Button classes={"btn btn-primary"} onClick={comeback}>Regresar</Button>
                    </div>
                </div>               
            </div>
        </div>
    )
}
