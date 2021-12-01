import React from 'react'

const Navbar = () => {
    return (
        <ul className="nav nav-pills nav-fill mt-4">
            <li className="nav-item">
                <a className="nav-link active" href="">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Buscar</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Categorias</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Carrito</a>
            </li>
        </ul>
    )
}

export default Navbar
