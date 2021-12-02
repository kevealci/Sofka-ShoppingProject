import React, {useContext, useState} from 'react'
import { shoppingContext } from '../context/shoppingContext'


const Card = (props) => {
    
    const { state } = useContext(shoppingContext);
    let list= [];
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
                {flag?<img src="" className="card-img-top" alt="..." hidden/> : <img src="" className="card-img-top" alt="..." />}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.info.name}</li>
                    <li className="list-group-item">{props.info.price}</li>
                    <li className="btn btn-success" onClick={boton}>AGREGAR</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;

