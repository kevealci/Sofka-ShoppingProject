import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import InformationCard from './pages/InformationCard';
import NoEncontrada from './components/Noencontrado';
import { ShoppingProvider } from './components/ShoppingProvider';
import { ShoppingCart } from './pages/ShoppingCart';
ReactDOM.render(
  <ShoppingProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="info" element={<InformationCard />} />
          <Route path="carrito" element={<ShoppingCart />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ShoppingProvider>,
  document.getElementById('root')
);
