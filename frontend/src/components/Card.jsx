import React from 'react'
import { Header } from './Header'
import {Body} from './Body'
import { Footer } from './Footer';
import {Paragraph} from './Paragraph.jsx'
import {Title} from './Title.jsx'

export const Card = () => {

    return (
        <div className="container-fluid">        
            <h1 className="text-center">Nevera</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <Header />
                    <Paragraph classes={"text-center"}>Codigo: Nev-98563</Paragraph>
                </div>
                <div className="col-7">
                    <Body />
                </div>
            </div>
            <div className="mt-4">
                <Footer />
            </div>
        </div>
    )
}
