import React from 'react'
import { Header } from './Header'
import {Body} from './Body'
import { Footer } from './Footer';

export const Card = () => {

    const styles = {};

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100" style={styles}>
                    <Header />
                    <Body />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
