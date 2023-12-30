import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Product from "./Components/Product/Product";
import Register from "./Components/Register/Register";
import SideNavBar from "./Components/SideNav/SideNavBar";
import Login from "./Components/Login/Login";
import Contact from "./Components/Contact/Contact";
import CheckOut from "./Components/CheckOut/CheckOut";
import Page404 from "./Components/404Page/Page404";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sidenav" element={<SideNavBar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Page404 />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
