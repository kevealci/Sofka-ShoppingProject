import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Search from '../components/Search'


const HomePage = () => {
    return (
        <div className="container">
      <Navbar/>
      <Search/>
      <div className="row mt-4 align-items-end">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    )
}

export default HomePage
