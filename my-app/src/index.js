import React from 'react';
// import { Slide } from 'react-slideshow-image'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/style.css';
import Home from './pages/Home';
import Productsheet from './pages/Productsheet'
import Apropos from './pages/Apropos'
import Header from './components/Header';
import Footer from './components/Footer/index';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
        <Route path="/Productsheet/:id" element={<Productsheet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
