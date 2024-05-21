import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/NavBar";
import Banner  from "./components/Banner";
import Contact  from "./components/Contact";
import  Footer  from "./components/Footer";
import About  from './components/AboutUs';
import React from "react";
import Service from './components/Services';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDsiCMj43nOKqc-6MERyBoi5AqarKaRmrI",
  authDomain: "nxtep-contact.firebaseapp.com",
  projectId: "nxtep-contact",
  storageBucket: "nxtep-contact.appspot.com",
  messagingSenderId: "562902432010",
  appId: "1:562902432010:web:03353522c825365ae0a2f3",
  measurementId: "G-6P19YRZTBN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Service />
      <Contact />
      
    </div>
  );
}

export default App;
