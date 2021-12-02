import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { shoppingContext } from '../context/shoppingContext';
export const Navbar = () => {

    const { state: { listaCarrito }, dispatch } = useContext(shoppingContext);
    return (
        
        <nav className="navbar navbar-dark bg-dark container-fluid">
            <NavLink className="btn btn-outline-primary navbar-brand" to="/">
                Shopping
            </NavLink>

            <button type="button" class="btn btn-dark position-relative me-3 mt-2">
                <NavLink className="btn btn-outline-primary" to="/carrito">
                    <span class="material-icons-outlined">shopping_cart</span>
                </NavLink>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {listaCarrito.length    }<span class="visually-hidden">number of products</span>
                </span>
            </button>
        </nav>
    )
}


export default Navbar
