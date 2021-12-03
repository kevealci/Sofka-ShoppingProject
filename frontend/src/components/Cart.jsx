
import { useContext } from 'react';
import { shoppingContext } from '../context/shoppingContext';
import { CartItem } from './CartItem';
import { CartTotal } from './CartTotal';

export const Cart = () => {
  const {
    state: { listaCarrito }
  } = useContext(shoppingContext);

  return (
    <table className="table table-hover table-bordered mt-5 text-center container">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {listaCarrito.map((item) => (
          <CartItem item={item} />
        ))}
        <CartTotal />
      </tbody>
    </table>
  );
};