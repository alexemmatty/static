// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/NavBar";
import Banner  from "./components/Banner";
import Contact  from "./components/Contact";
import  Footer  from "./components/Footer";
import About  from './components/AboutUs';
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
