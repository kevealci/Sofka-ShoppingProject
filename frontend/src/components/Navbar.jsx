import React from 'react'

const Navbar = () => {
    return (
            <ul className="nav nav-pills nav-fill mt-4">
                <li className="nav-item">
                    <a className="nav-link active" href="">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Much longer nav link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
    )
}

export default Navbar
