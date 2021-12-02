import React, {useContext} from 'react'
import { Image } from './Image'
import { Body } from './Body'
import { Footer } from './Footer';
import { Paragraph } from './Paragraph.jsx'
import { shoppingContext } from '../context/shoppingContext'


export const PageDescription = () => {

   
    const { state } = useContext(shoppingContext);
    const itemSeleccionado = state.itemSeleccionado;

    return (
        <div className="container-fluid">
            <h1 className="text-center">{itemSeleccionado.name}</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <Image classes={"card-img-top"} src={itemSeleccionado.picture} />
                    <Paragraph classes={"text-center"}>Codigo: {itemSeleccionado.productCode}</Paragraph>
                </div>
                <Body />
            </div>
            <Footer />
        </div>
    )
}