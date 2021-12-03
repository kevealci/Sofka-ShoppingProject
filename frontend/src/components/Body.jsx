import React, { useContext } from 'react';
import { Paragraph } from './Paragraph.jsx';
import { Title } from './Title.jsx';
import { shoppingContext } from '../context/shoppingContext';

export const Body = () => {
  const {
    state: { itemSeleccionado }
  } = useContext(shoppingContext);

  return (
    <div className="col-7">
      <Title>Descripción</Title>
      <Paragraph>{itemSeleccionado.description}</Paragraph>
      <Title>Categoria</Title>
      <Paragraph>{itemSeleccionado.category}</Paragraph>
      <Title>Precio</Title>
      <Paragraph>{itemSeleccionado.price}</Paragraph>
    </div>
  );
};
