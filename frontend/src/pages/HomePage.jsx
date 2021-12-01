import React, { useEffect, useState, useContext } from 'react'
import { TYPES } from '../actions/action'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import { contexPrueba } from '../context/contexPrueba'
import axios from 'axios';


const HomePage = () => {



  const [lista, setLista] = useState([]);
  const { state, dispatch } = useContext(contexPrueba);

  const pet = async () => {
      await dispatch
  }


  useEffect( () => {

    const HOST_API = 'http://localhost:8080/api';
    fetch(HOST_API + "/product", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((payload) => {
        dispatch({ type: TYPES.SEARCH, items: payload })
        setLista(state.product.list)
      }).catch(err => console.log(err))
    }, []);
    




  return (
    <div className="container">
      <Navbar />
      <Search />
      <div className="row mt-4">
        {
          lista.map((item, index) => {
            return <Card key={index} info={item} />
          })
        }
       
      </div>
    </div>
  )
}

export default HomePage
