import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TYPES } from '../actions/actions';
import { shoppingContext } from '../context/shoppingContext';
import { shoppingInitialState } from '../reducers/shoppingReducer';

export const FooterShoppingCart = () => {
  const { state, dispatch } = useContext(shoppingContext);

  const confirmarCompra = () => {
    const body = {
      codeOrder: 12,
      orderList: state.listaCarrito,
      userName: state.item
    };

    const URL = 'http://localhost:8080/api/order';

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((todo) => todo)
      .catch((err) => console.error(err))
      .finally(() => {
        dispatch({ type: TYPES.INITIAL_STATE, payload: shoppingInitialState });
      });
  };

  const cancelarCompra = () => {
    dispatch({ type: TYPES.INITIAL_STATE, payload: shoppingInitialState });
  };

  return (
    <div className="d-flex justify-content-evenly">
      <Link to="/">
        <button
          onClick={confirmarCompra}
          type="button"
          className="btn btn-success"
          data-toggle="tooltip"
          data-placement="top"
          title="Confirmar compra"
        >
          <span className="material-icons-outlined">done</span>
        </button>
      </Link>
      <Link to="/">
        <button
          onClick={cancelarCompra}
          type="button"
          className="btn btn-danger"
          data-toggle="tooltip"
          data-placement="top"
          title="Cancelar compra"
        >
          <span className="material-icons-outlined">highlight_off</span>
        </button>
      </Link>
    </div>
  );
};
