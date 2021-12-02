import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {shoppingContext} from '../context/shoppingContext'
import { TYPES } from '../actions/actions';

const Card = ({info}) => {

    const { dispatch } = useContext(shoppingContext)

    const styles = {
        width: '18rem'
    };

    const [flag, setFlag] = useState(false)

    const boton = (e) => {
        dispatch({type:TYPES.ADD_PRODUCT, payload: info})
        setFlag(!flag)
    }

    const setItem=() => {
        dispatch({type:TYPES.SET_ITEM, payload: info})
    }

    return (
        <div className="col-auto">
            <div className="card" style={styles} >

                <Link onClick={setItem} className="text-decoration-none" to={`/info/${info.productCode}`}>
                    {flag ? <img src={info.picture} className="img-fluid img-thumbnail" alt="..." hidden /> : <img src={info.picture} className="img-fluid img-thumbnail" alt="..." />}
                </Link>
                <ul className="list-group list-group-flush">
                <Link onClick={setItem} className="text-decoration-none" to={`/info/${info.productCode}`}>
                    <li className="list-group-item">{info.name}</li>
                    <li className="list-group-item">{info.price}</li>
                </Link>
                    <li className="btn btn-success" onClick={boton}>AGREGAR</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;

