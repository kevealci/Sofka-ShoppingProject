import React, { useEffect, useState, useContext } from 'react'
import { TYPES } from '../actions/action'
import Card from '../components/Card'
import Search from '../components/Search'
import { shoppingContext } from '../context/shoppingContext'
import axios from 'axios';
import Otro from '../components/Otro'


const HomePage = () => {

  // const [lista, setLista] = useState([]);
  // const { state, dispatch } = useContext(shoppingContext);
  // const HOST_API = 'http://localhost:8080/api';

  // const pet = async () => {
  //   const datos = await axios.get(HOST_API + '/product');

  //   console.log(datos.data);
    
  //    dispatch({
  //     type: TYPES.GET_ALL,
  //     payload: datos.data
  //   })
  //   setLista(state.listGeneral);
  // }

  // useEffect(() => {
  //   console.log(state.listGeneral)
  //   pet();
  //   console.log(state.listGeneral)

  // }, [HomePage])



  return (
    <div className="container">
      {/* <Search lista={lista} /> */}
      <Search />
      <Otro/>
    </div>
  )
}

export default HomePage
