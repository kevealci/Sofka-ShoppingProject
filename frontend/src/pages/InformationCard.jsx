import React from 'react'
import {Card} from '../components/Card'
import {Navbar} from '../components/Navbar'
import { Search } from '../components/Search'

export const InformationCard = () => {
    return (
        <>
        
        <Navbar />
        <Search />
            <div className="container">
                <div className="row mt-4 align-items-end">
                    <Card />
                </div>
            </div>
        </>
    )
}
