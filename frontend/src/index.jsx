import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Jennifer from './pages/Jennifer'
import HomePage from './pages/HomePage'
import Kevin from './pages/Kevin'
import NoEncontrada from './components/Noencontrado';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />}/>
        <Route path="info/:id" element={<Jennifer/>}/>
        <Route path="carrito" element={<Kevin/>}/>
        <Route path="*" element={<NoEncontrada />} />
      </Route>
      
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
