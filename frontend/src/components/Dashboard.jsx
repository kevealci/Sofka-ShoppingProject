<<<<<<< HEAD
import React, { useContext, useEffect } from 'react'
=======
import React, { useEffect } from 'react'
>>>>>>> 672edb1477d6928c425076bce0d6bf5bfb787730
import { useSearchParams } from 'react-router-dom';
import { GetFetch } from '../hooks/GetFetch'
import Card from './Card';
import {shoppingContext} from '../context/shoppingContext'
import { TYPES } from '../actions/Action';


const Dashboard = () => {

<<<<<<< HEAD
  const {state, dispatch} = useContext(shoppingContext)

  let [searchParams, setSearchParams] = useSearchParams();
  // const { data, error, loading } = GetFetch('https://jsonplaceholder.typicode.com/todos');
=======
  let [searchParams] = useSearchParams();
>>>>>>> 672edb1477d6928c425076bce0d6bf5bfb787730
  const { data, error, loading } = GetFetch('http://localhost:8080/api/product');

  useEffect(() => {
    console.log(searchParams.get("filter"));
  }, [searchParams]);

  useEffect(() => {
    dispatch({type:TYPES.GET_ALL, payload:data})
  }, [data])

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error !== "") {
    return <h1>{error}</h1>;
  }

  console.log(`data`, data)
  
  console.log(`state dashboard`, state)


  return (
    <div className="row">
      {
//data
        state.listaGeneral.filter(item => {
          let tt = item.name.toLowerCase();
          let ff = searchParams.get("filter");
          if (!ff) return true;
          return tt.includes(ff);
        })
          .map((item, index) => (
              <Card key={index} info={item} />
          ))

      }
    </div>
  )
}

export default Dashboard

