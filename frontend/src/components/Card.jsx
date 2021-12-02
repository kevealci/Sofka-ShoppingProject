import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {shoppingContext} from '../context/shoppingContext'
import { TYPES } from '../actions/Action'

const Card = ({info}) => {

    const {state, dispatch} = useContext(shoppingContext)

    const styles = {
        width: '18rem'
    };

    const [flag, setFlag] = useState(false)

    const boton = (e) => {
        dispatch({type:TYPES.ADD_PRODUCT, payload: info})
        setFlag(!flag)
    }

        console.log(`state desde card fuera boton`, state)

    return (
        <div className="col mt-4">
            <div className="card" style={styles} >
<<<<<<< HEAD
                <Link className="text-decoration-none" to={`/info/${info.productCode}`}>
                    {flag ? <img src="" className="card-img-top" alt="..." hidden /> : <img src="" className="card-img-top" alt="..." />}
=======
                <Link className="text-decoration-none" to={`/info/${props.info.productCode}`}>
                    {flag ? <img src={props.info.picture} className="img-fluid img-thumbnail" alt="..." hidden /> : <img src={props.info.picture} className="img-fluid img-thumbnail" alt="..." />}
>>>>>>> 672edb1477d6928c425076bce0d6bf5bfb787730
                </Link>
                <ul className="list-group list-group-flush">
                <Link className="text-decoration-none" to={`/info/${info.productCode}`}>
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

