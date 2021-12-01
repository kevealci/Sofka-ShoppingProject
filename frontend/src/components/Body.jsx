import React from 'react'
import {Paragraph} from './Paragraph.jsx'
import {Title} from './Title.jsx'

export const Body = () => {
    return (
        <>  
            <Title>Codigo</Title>
            <Paragraph>Nev-98563</Paragraph>          
            <Title>Descripción</Title>
            <Paragraph>
                This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.
            </Paragraph>
            <Title>Categoria</Title>
            <Paragraph>Electrodomesticos</Paragraph>
            <Title>Precio</Title>
            <Paragraph>El valor del precio es $1.560.000.</Paragraph>
        </>
    )
}
