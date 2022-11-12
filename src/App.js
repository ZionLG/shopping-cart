import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Nav from "./pages/Nav";
import NotFound from "./pages/NotFound";
import Store from "./pages/Store";
import ProductData from "./ProductsData";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = ProductData;

  const onAdd = (product) => {
    const cartItem = cartItems.find((item) => item.id === product.id);
    if (cartItem) {
      const newCartItemList = cartItems.map((item) =>
        item.id === product.id ? { ...cartItem, qty: cartItem.qty + 1 } : item
      );
      setCartItems(() => newCartItemList);
    } else {
      const newCartItemList = [...cartItems, { ...product, qty: 1 }];
      setCartItems(() => newCartItemList);
    }
    console.log(cartItems);
  };

  const onRemove = (product) => {
    const cartItem = cartItems.find((item) => item.id === product.id);
    if (cartItem.qty === 1) {
      const newCartItemList = cartItems.filter(
        (item) => item.id !== product.id
      );
      setCartItems(newCartItemList);
    } else {
      const newCartItemList = cartItems.map((item) =>
        item.id === product.id ? { ...cartItem, qty: cartItem.qty - 1 } : item
      );
      setCartItems(newCartItemList);
    }
    console.log(cartItems);
  };
  return (
    <>
      <Nav cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route
            index
            element={
              <Store
                cartItems={cartItems}
                products={products}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path=":id"
            element={
              <Item
                cartItems={cartItems}
                products={products}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
