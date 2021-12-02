import React, { useState, useEffect, useContext } from 'react'
import { useSearchParams } from 'react-router-dom';

const Search = (props) => {

    const quemados = [

        {
            "name": "Producto 1",
            "price": 12.3,
            "productCode": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
            "category": "1"

        },
        {
            "name": "Producto 2",
            "price": 123,
            "productCode": 1,
            "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
            "category": "4"
        },
        {
            "name": "Producto 3",
            "price": 2.3,
            "productCode": 2,
            "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
            "category": "mar"
        },
        {
            "name": "Producto 4",
            "price": 1.39,
            "productCode": 3,
            "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
            "category": "asd"
        },
        {
            "name": "Producto 5",
            "price": 22.3,
            "productCode": 4,
            "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
            "category": "fds"
        },
        {
            "name": "Producto 6",
            "price": 72.9,
            "productCode": 5,
            "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
            "category": "1"
        },
        {
            "name": "Producto 7",
            "price": 92.1,
            "productCode": 6,
            "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
            "category": "1"
        },
        {
            "name": "Producto 8",
            "price": 8.3,
            "productCode": 7,
            "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
            "category": "1"
        },
        {
            "name": "Producto 9",
            "price": 63.5,
            "productCode": 8,
            "description": "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
            "category": "1"
        }
    ]


    let [searchParams, setSearchParams] = useSearchParams();
    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };

    return (
        <>
            <div className="input-group mb-3 mt-5">
                <input type="text"
                    className="form-control"
                    placeholder="Recipient's username"
                    value={searchParams.get('filter')}
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                {

                }
            </div>
        </>
    )
}

export default Search
