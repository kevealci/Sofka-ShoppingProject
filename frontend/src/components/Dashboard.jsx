import React, { useEffect, useState, useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import { GetFetch } from '../hooks/GetFetch'
import Card from './Card';



const Dashboard = () => {

  let [searchParams, setSearchParams] = useSearchParams();
  // const { data, error, loading } = GetFetch('https://jsonplaceholder.typicode.com/todos');
  const { data, error, loading } = GetFetch('http://localhost:8080/api/product');

  useEffect(() => {
    console.log(searchParams.get("filter"));
  }, [searchParams]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error !== "") {
    return <h1>{error}</h1>;
  }


  return (
    <div className="row">
      {

        data.filter(item => {
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

