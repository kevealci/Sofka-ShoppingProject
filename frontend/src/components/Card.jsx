import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { shoppingContext } from '../context/shoppingContext'
import { TYPES } from '../actions/actions';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/card.css'

const Card = ({ info }) => {

    const { dispatch } = useContext(shoppingContext)

    const styles = {
        width: '18rem'
    };


    const boton = (e) => {
        dispatch({ type: TYPES.ADD_PRODUCT, payload: info })
        toast.success('Producto agregado');
    }

    const setItem = () => {
        dispatch({ type: TYPES.SET_ITEM, payload: info })
    }

    return (
        <>

            <div className="col-auto mt-3">
                <div className="card" style={styles} >

                    <Link onClick={setItem} className="text-decoration-none" to={`/info`}>
                        <img src={info.picture} className="img-fluid img-thumbnail" alt="..." />
                    </Link>
                    <ul className="list-group list-group-flush">
                        <Link onClick={setItem} className="text-decoration-none" to={`/info`}>
                            <li className="list-group-item">{info.name}</li>
                            <li className="list-group-item">{info.price}</li>
                        </Link>
                        <li className="btn btn-success" onClick={boton}>AGREGAR</li>
                    </ul>
                </div>
                <Toaster
                    toastOptions={{
                        // Define default options
                        duration: 1000
                    }}
                />
            </div>

        </>
    );
}

export default Card;

