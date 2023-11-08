import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import About from './components/AboutUs';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ServiceDetail from './components/ServiceDetail';

ReactDOM.render(
  
  <React.StrictMode>
    <NavBar />
    <Router>
      <Routes>

        <Route path="/" element={<App /> } />
        <Route path="/services/:serviceTitle" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
    <Footer />

  </React.StrictMode>
  ,
  document.getElementById('root')
);
