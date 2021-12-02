import React from 'react'
import { TYPES } from '../actions/action'
import Search from '../components/Search'
import Dashboard from '../components/Dashboard'


const HomePage = () => {

  
  return (
    <div className="container">
      <Search />
      <Dashboard/>
    </div>
  )
}

export default HomePage
