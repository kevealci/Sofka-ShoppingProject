import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Search from '../components/Search'


const HomePage = () => {

  const [lista, setLista] = useState([]);

  useEffect(() => {

    const HOST_API = 'http://localhost:8080/api';
    fetch(HOST_API + "/product", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        setLista(todo);
        console.log(lista)
      }).catch(err => console.log(err))
  }, []);


  console.log("lista")
  console.log(lista)


  return (
    <div className="container">
      <Navbar />
      <Search />
      <div className="row mt-4">
      {
        lista.map((item, index) =>{
          return <Card key={index} info={item}/>
        })
      }
      </div>
    </div>
  )
}

export default HomePage
