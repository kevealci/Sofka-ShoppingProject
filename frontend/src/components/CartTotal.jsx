import { useContext, useEffect, useState } from 'react';
import { shoppingContext } from '../context/shoppingContext';

export const CartTotal = () => {
  const {
    state: { listaCarrito }
  } = useContext(shoppingContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalValue = 0.0;
    for (let i of listaCarrito) {
      totalValue += i.price;
    }
    setTotal(totalValue);
  }, [listaCarrito]);

  return (
    <tr>
      <th colSpan="2" scope="row">
        Total
      </th>
      <td>
        <span className="material-icons-outlined block">paid</span>
        <span className="block">{total}</span>
      </td>
      <td></td>
    </tr>
  );
};
