import { Cart } from "../components/Cart"
import { InputUsername } from "../components/InputUsername"
import { useContext } from "react";
import { shoppingContext } from "../context/shoppingContext"
import { Link } from 'react-router-dom'
import { TYPES } from '../actions/actions'
import { shoppingInitialState } from '../reducers/shoppingReducer'
import toast, { Toaster } from 'react-hot-toast';

export const ShoppingCart = () => {

  const { state, dispatch } = useContext(shoppingContext);
  const initialState = shoppingInitialState;

  const confirmarCompra = () => {

    const body = {
      "codeOrder": 12,
      "orderList": state.listaCarrito,
      "userName": state.item
    }
    const URL = 'http://localhost:8080/api/order'
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }, toast('Compra realizada exitosamente', { icon: '👏', }))
      .then(response => response.json())
      .then((todo) => todo
      )
      .catch(err => console.error(err))
      .finally(() => { dispatch({ type: TYPES.INITIAL_STATE, payload: initialState }) })
  }

  const cancelarCompra = () => {
    dispatch({ type: TYPES.INITIAL_STATE, payload: initialState })
    toast.success('Compra Cancelada exitosamente');
  }

  return (
    <>
      <Cart />
      <InputUsername />
      <div className="d-flex justify-content-evenly">
        <Link to='/'>
          <button onClick={confirmarCompra} type="button" className="btn btn-success" data-toggle="tooltip" data-placement="top" title="Confirmar compra">
            <span className="material-icons-outlined">done</span>
          </button>
        </Link>
        <Link to='/'>
          <button onClick={cancelarCompra} type="button" className="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Cancelar compra">
            <span className="material-icons-outlined">highlight_off</span>
          </button>
        </Link>
      </div>
      <Toaster
        toastOptions={{
          // Define default options
          duration: 3000
        }}
      />
    </>
  )
}
