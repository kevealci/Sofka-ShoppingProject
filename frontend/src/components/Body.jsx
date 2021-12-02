import React from 'react'
import {Paragraph} from './Paragraph.jsx'
import {Title} from './Title.jsx'
import { GetFetch } from '../hooks/GetFetch'
import { useParams } from 'react-router'

export const Body = () => {
        let params = useParams();
    
        const { data, error, loading } = GetFetch(`http://localhost:8080/api/product/${params.id}`);
    
        const itemSeleccionado = data;
    
        if (loading) {
            return <h1>Loading...</h1>;
        }
    
        if (error !== "") {
            return <h1>{error}</h1>;
        }
    

    return (
        <div className="col-7">                      
            <Title>Descripción</Title>
            <Paragraph>
                {itemSeleccionado.description}
            </Paragraph>
            <Title>Categoria</Title>
            <Paragraph>{itemSeleccionado.category}</Paragraph>
            <Title>Precio</Title>
            <Paragraph>{itemSeleccionado.price}</Paragraph>
        </div>    
    )
}
