import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to="/">
                    Inicio
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/carrito">
                    Carrito
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
