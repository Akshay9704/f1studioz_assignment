import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from "./UI/components/header";
import Main from "./pages/main";
import NewOrder from "./pages/newOrder";
import NewDoor from "./pages/newDoor";
import ConfigDoor from "./pages/configDoor";
import CartPage from "./pages/cartpage";

function App() {
  const [cart, setCart] = useState({door:[], layout: [], window: [], track: [], other: [] });
  const [products, setProducts] = useState([]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main products={products}/>} />
        <Route path="/newOrder" element={<NewOrder />} />
        <Route path="/newDoor" element={<NewDoor setCart={setCart} />} />
        <Route path="/configDoor" element={<ConfigDoor setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setProducts={setProducts}/>} />
      </Routes>
    </Router>
  );
}

export default App;
