// AppRoutes.js
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import  NavBar  from "./components/NavBar";
import Footer  from "./components/Footer";
import About  from './components/AboutUs';
import ServiceDetail from "./components/ServiceDetail"; // Import the ServiceDetail component

export default function AppRoutes() {
  return (
    <Fragment>
      <NavBar />
      <main style={{ minHeight: "90vh" }}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/service/:serviceName" element={<ServiceDetail />} />
          {/* Define routes for each service */}
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}
