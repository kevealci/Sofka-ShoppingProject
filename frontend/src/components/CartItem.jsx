import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TYPES } from '../actions/actions';
import { shoppingContext } from '../context/shoppingContext';
import toast, { Toaster } from 'react-hot-toast';

export const CartItem = ({ key, item }) => {
  const {
    state: { listaCarrito },
    dispatch
  } = useContext(shoppingContext);

  const productDetails = (item) => {
    dispatch({ type: TYPES.SET_ITEM, payload: item });
  };

  const deleteProduct = (item) => {
    let nuevaLista = listaCarrito.filter((elemento) => elemento.id !== item.id);
    dispatch({ type: TYPES.DELETE_PRODUCT, payload: nuevaLista });
    toast.error('Producto Eliminado');
  };

  return (
    <tr key={item.productCode}>
      <th scope="row">{item.productCode}</th>
      <td>{item.name}</td>
      <td>
        <span className="material-icons-outlined block">paid</span>
        <span className="block"> {item.price} </span>
      </td>
      <td className="d-flex justify-content-evenly">
        <Link to="/info">
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
        <button type="button" className="btn btn-danger" onClick={() => deleteProduct(item)}>
          <span className="material-icons-outlined">delete </span>
        </button>
        <Toaster
          toastOptions={{
            duration: 1000
          }}
        />
      </td>
    </tr>
  );
};
