import React from 'react';
// import { Slide } from 'react-slideshow-image'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/style.css';
import Home from './pages/Home';
import Productsheet from './pages/Productsheet'
import Apropos from './pages/Apropos'
import Error from './components/Error';
import Layout from './components/Layout/index';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="Apropos" element={<Apropos />} />
          <Route path="Productsheet/:id" element={<Productsheet />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
