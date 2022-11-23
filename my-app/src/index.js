import React from 'react';
// import { Slide } from 'react-slideshow-image'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/style.css';
import Home from './pages/Home';
import Productsheet from './pages/Productsheet'
import Apropos from './pages/Apropos'
import Error from './components/Error';
// import Layout from './components/Layout/index'
import reportWebVitals from './reportWebVitals';
import Header from './components/Header'
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Layout />} > */}
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
        <Route path="/Productsheet/:id" element={<Productsheet />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
