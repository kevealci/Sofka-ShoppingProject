import React, { useEffect, useState, useContext } from 'react'
import { TYPES } from '../actions/action'
import Card from './Card'
import Search from './Search'
import { shoppingContext } from '../context/shoppingContext'
import axios from 'axios';
import HomePage from '../pages/HomePage'

const Otro = () => {

  const [lista, setLista] = useState([]);
  const { state, dispatch } = useContext(shoppingContext);
  const HOST_API = 'http://localhost:8080/api';

  const pet = async () => {
    const datos = await axios.get(HOST_API + '/product');


     dispatch({
      type: TYPES.GET_ALL,
      payload: datos.data
    })
    setLista(state.listGeneral);
    console.log("state lista");
    console.log(state.listGeneral);
  }

  useEffect(() => {
    pet();

  }, [HomePage])



  return (
    <div className="row">
      {
        lista.map((item, index)=>{

          return <Card key={index} info={item}/>
        })
      }
    </div>
  )
}

export default Otro

