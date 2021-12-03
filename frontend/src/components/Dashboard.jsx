import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GetFetch } from '../hooks/GetFetch';
import Card from './Card';
import { shoppingContext } from '../context/shoppingContext';
import { TYPES } from '../actions/actions';

const Dashboard = () => {
  const { state, dispatch } = useContext(shoppingContext);

  let [searchParams] = useSearchParams();
  const { data, error, loading } = GetFetch('http://localhost:8080/api/product');

  useEffect(() => {
    dispatch({ type: TYPES.GET_ALL, payload: data });
  }, [data, dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error !== '') {
    return <h1>{error}</h1>;
  }

  return (
    <div className="row">
      {state?.listaGeneral
        ?.filter((item) => {
          let tt = item.name.toLowerCase();
          let ff = searchParams.get('filter');
          if (!ff) return true;
          return tt.includes(ff);
        })
        .map((item, index) => (
          <Card key={index} info={item} />
        ))}
      {searchParams.get('filter') && <h1 className="title mt-3 text-align-center">Categoria</h1>}
      {searchParams.get('filter') &&
        state?.listaGeneral
          ?.filter((item) => {
            let tt = item.category.toLowerCase();
            let ff = searchParams.get('filter');
            return tt.includes(ff);
          })
          .map((item, index) => <Card key={index} info={item} />)}
    </div>
  );
};

export default Dashboard;
