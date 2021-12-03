import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { shoppingContext } from '../context/shoppingContext'
import { TYPES } from '../actions/actions';
import toast, { Toaster } from 'react-hot-toast';

export const Footer = () => {
    const { state, dispatch } = useContext(shoppingContext)

    const addProduct = (e) => {
        dispatch({ type: TYPES.ADD_PRODUCT, payload: state.itemSeleccionado })
        toast.success('Producto agregado');
    }

    return (
        <div className="mt-4">
            <div className="d-flex justify-content-evenly">
                <div className="row">
                    <div className="col col-6">
                        <Button onClick={addProduct} classes={"btn btn-success"}>Agregar</Button>
                        <Toaster
                            toastOptions={{
                                // Define default options
                                duration: 1000
                            }}
                        />
                    </div>
                    <div className="col col-6">
                        <Link to="/">
                            <Button classes={"btn btn-primary"}>Regresar</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
