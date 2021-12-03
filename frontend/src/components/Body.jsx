import React, {useContext} from 'react'
import {Paragraph} from './Paragraph.jsx'
import {shoppingContext} from '../context/shoppingContext'

export const Body = () => {
  const {
    state: { itemSeleccionado }
  } = useContext(shoppingContext);


    return (
        <div className="col-7">                      
            <h4>Descripción</h4>
            <Paragraph>
                {itemSeleccionado.description}
            </Paragraph>
            <h4>Categoria</h4>
            <Paragraph>{itemSeleccionado.category}</Paragraph>
            <h4>Precio</h4>
            <Paragraph>{itemSeleccionado.price}</Paragraph>
        </div>    
    )
}
