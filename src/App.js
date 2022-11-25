import React from "react";

import "./App.css";
import { Routes, Route, Form } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
//new export

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<ProductList />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Default />}></Route>
      </Routes>
      <Modal />
    </>
  );
}

export default App;
