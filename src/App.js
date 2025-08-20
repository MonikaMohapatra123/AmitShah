import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/Navbar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Home/>
      <Footer/>
      {/* Example routes (replace with yours) */}
      <Routes>
        {/* <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/projects/:id" element={<h1>Project Details</h1>} /> */}
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
