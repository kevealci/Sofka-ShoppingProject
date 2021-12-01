import React from 'react'
import {Card} from '../components/Card'
import {Navbar} from '../components/Navbar'

export const InformationCard = () => {
    return (
        <>        
            <Navbar />
            <div className="container">
                <div className="row mt-4 align-items-end">
                    <Card />
                </div>
            </div>
        </>
    )
}
