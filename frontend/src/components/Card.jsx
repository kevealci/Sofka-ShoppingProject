import React from 'react'
import { Header } from './Header'
import {Body} from './Body'
import { Footer } from './Footer';

export const Card = () => {

    return (
        <div className="container-fluid">        
            <h2 className="text-center">Nevera</h2>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <Header />
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
