import React from 'react'

const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
)
    // return (
    //     <ul className="nav nav-pills nav-fill mt-4">
    //         <li className="nav-item">
    //             <a className="nav-link active" href="">Inicio</a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link" href="#">Buscar</a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link" href="#">Categorias</a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link" href="#">Carrito</a>
    //         </li>
    //     </ul>
    // )
}

export default Navbar
