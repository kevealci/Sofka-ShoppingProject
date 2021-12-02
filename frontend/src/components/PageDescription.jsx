import React from 'react'
import { Image } from './Image'
import {Body} from './Body'
import { Footer } from './Footer';
import {Paragraph} from './Paragraph.jsx'
import { GetFetch } from '../hooks/GetFetch'
import { useParams } from 'react-router'


export const PageDescription = () => {
    
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
        <div className="container-fluid">        
            <h1 className="text-center">{itemSeleccionado.name}</h1>
            <hr/>
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