import { useContext, useState, useEffect } from "react"
import { shoppingContext } from "../context/shoppingContext"
import { TYPES } from '../actions/actions'
import { Link } from "react-router-dom"

export const Cart = () => {

  const { state: { listaCarrito }, dispatch } = useContext(shoppingContext)
  const [total, setTotal] = useState(0);

  const productDetails = (item) => {
    dispatch({ type: TYPES.SET_ITEM, payload: item })

  }

  const deleteProduct = (item) => {
    let nuevaLista = listaCarrito.filter(elemento => elemento.id !== item.id);
    dispatch({ type: TYPES.DELETE_PRODUCT, payload: nuevaLista});
  }

  useEffect(() =>{
    let totalValue=0;
    for(let i of listaCarrito){
      totalValue+=i.price;
    }
    setTotal(totalValue);
  },[listaCarrito]  )

  return (
    <div className="container">
      <table className="table table-hover table-bordered mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            listaCarrito.map(item => {
              return <tr key={item.productCode}>
                <th scope="row">{item.productCode}</th>
                <td>{item.name}</td>
                <td>
                  <span className="material-icons-outlined block">paid</span>
                  <span className="block"> {item.price} </span>
                </td>
                <td className="d-flex justify-content-evenly">
                  <Link to='/info'>
                    <button
                      type="button"
                      className="btn btn-info"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Ver detalles"
                      onClick={() => productDetails(item)}
                    >
                      <span className="material-icons-outlined">info</span>
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>deleteProduct(item)}
                  >
                    <span className="material-icons-outlined">delete </span>
                  </button>
                </td>
              </tr>
            })
          }

          <tr>
            <th colSpan="2" scope="row">Total</th>
            <td>
              <span className="material-icons-outlined block">paid</span>
              <span className="block">{total}</span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
