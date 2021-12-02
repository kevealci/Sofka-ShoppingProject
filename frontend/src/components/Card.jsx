import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {

    let list = [];
    const styles = {
        width: '18rem'
    };

    const [flag, setFlag] = useState(false)

    const boton = (e) => {
        console.log(e.target);
        list.push(props.info)
        console.log(list);
        setFlag(!flag)
    }


    return (
        <div className="col mt-4">
            <div className="card" style={styles} >
                <Link className="text-decoration-none" to={`/info/${props.info.productCode}`}>
                    {flag ? <img src={props.info.picture} className="card-img-top" alt="..." hidden /> : <img src={props.info.picture} className="card-img-top" alt="..." />}
                </Link>
                <ul className="list-group list-group-flush">
                <Link className="text-decoration-none" to={`/info/${props.info.productCode}`}>
                    <li className="list-group-item">{props.info.name}</li>
                    <li className="list-group-item">{props.info.price}</li>
                </Link>
                    <li className="btn btn-success" onClick={boton}>AGREGAR</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;

