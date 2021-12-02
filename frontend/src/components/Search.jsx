import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { TYPES } from '../actions/action';
import { shoppingContext } from '../context/shoppingContext';
import HomePage from '../pages/HomePage';
import Card from './Card'
import Navbar from './Navbar';

const Search = (props) => {

    // const quemados = [

    //     {
    //         "name": "Producto 1",
    //         "price": 12.3,
    //         "productCode": 0,
    //         "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    //         "category": "1"

    //     },
    //     {
    //         "name": "Producto 2",
    //         "price": 123,
    //         "productCode": 1,
    //         "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    //         "category": "4"
    //     },
    //     {
    //         "name": "Producto 3",
    //         "price": 2.3,
    //         "productCode": 2,
    //         "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    //         "category": "mar"
    //     },
    //     {
    //         "name": "Producto 4",
    //         "price": 1.39,
    //         "productCode": 3,
    //         "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    //         "category": "asd"
    //     },
    //     {
    //         "name": "Producto 5",
    //         "price": 22.3,
    //         "productCode": 4,
    //         "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    //         "category": "fds"
    //     },
    //     {
    //         "name": "Producto 6",
    //         "price": 72.9,
    //         "productCode": 5,
    //         "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    //         "category": "1"
    //     },
    //     {
    //         "name": "Producto 7",
    //         "price": 92.1,
    //         "productCode": 6,
    //         "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    //         "category": "1"
    //     },
    //     {
    //         "name": "Producto 8",
    //         "price": 8.3,
    //         "productCode": 7,
    //         "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    //         "category": "1"
    //     },
    //     {
    //         "name": "Producto 9",
    //         "price": 63.5,
    //         "productCode": 8,
    //         "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    //         "category": "1"
    //     }
    // ]

    // const { state, dispatch } = useContext(shoppingContext);
    // const [list, setList] = useState([]);
    // const [busqueda, setBusqueda] = useState();

    const { state, dispatch } = useContext(shoppingContext);
    const handleInputChange = (e) => {
        console.log(e.target.value);
        // setBusqueda(e.target.value);
        // filtrar(e.target.value);
        console.log("state");
        console.log(state);

    }

    // const filtrar = (arg) => {
    //     // setList(quemados.filter(item => {
    //     //     console.log(item.name)
    //     //     console.log(arg)
    //     //     console.log(item.name.includes(arg))
    //     //     return item.name.includes(arg)
    //     // }))
    // }
    

    // useEffect(() => {
    //     console.log("props.lista");
    //     console.log(props.lista);
    //     setList(props.lista);

    // },[])

    return (
        <>
            <div className="input-group mb-3 mt-5">
                <input type="text"
                    className="form-control"
                    placeholder="Recipient's username"
                    onChange={handleInputChange}
                />
            </div>
            <div className="row">
                {
                    // list.map((item, index) => {

                    //     return <Card key={index} info={item} />
                    // })
                }
            </div>
        </>
    )
}

export default Search
