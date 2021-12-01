import React from 'react'
import {Button} from './Button'

export const Footer = () => {
    return (
        <>
            <div className="d-flex justify-content-evenly">
                <div className="row">
                    <div className="col col-6">
                        <Button classes={"btn btn-success"}>Agregar</Button>
                    </div>
                    <div className="col col-6">
                        <Button classes={"btn btn-primary"}>Regresar</Button>
                    </div>
                </div>               
            </div>
        </>
    )
}
