import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

export const Footer = () => {

    const addProduct = () => {
        // dispatch({type: TYPES.ADD_PRODUCT, payload: state.itemSeleccionado})
        console.log("state")
    }
    return (
        <div className="mt-4">
            <div className="d-flex justify-content-evenly">
                <div className="row">
                    <div className="col col-6">
                        <Button classes={"btn btn-success"} onClick={addProduct}>Agregar</Button>
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
