import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./shared/header/Header";
import ListItems from "./views/shop/ListItems";
import AddItem from './views/shop/AddItem';
import Checkout from "./views/shop/Checkout";
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <div className="row col-sm-8 mx-auto">

      <Routes>
        <Route path="/items" element={<ListItems />} />
        <Route path="/add-item" element={<AddItem />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
