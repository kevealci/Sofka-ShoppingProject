import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { shoppingContext } from '../context/shoppingContext';
export const Navbar = () => {
  const {
    state: { listaCarrito }
  } = useContext(shoppingContext);
  return (
    <nav className="navbar navbar-dark bg-dark container-fluid sticky-sm-top">
      <NavLink className="btn btn-outline-primary navbar-brand" to="/">
        Shopping
      </NavLink>

      <button type="button" className="btn btn-dark position-relative me-3 mt-2">
        <NavLink className="btn btn-outline-primary" to="/carrito">
          <span className="material-icons-outlined">shopping_cart</span>
        </NavLink>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {listaCarrito?.length}
          <span className="visually-hidden">number of products</span>
        </span>
      </button>
    </nav>
  );
};
