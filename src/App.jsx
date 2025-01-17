import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Details from "./components/Details";
import Order from "./components/Order";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    let isInCart = false;
    let newCart = cart.map((item) => {
      if (item.name === product.name) {
        isInCart = true;
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    if (!isInCart) {
      newCart = [...newCart, { ...product, quantity: 1 }];
    }
    setCart(newCart);
  }

  function handleIncrease(name) {
    setCart((prevCart) =>
      prevCart.map((c) =>
        c.name === name ? { ...c, quantity: c.quantity + 1 } : c
      )
    );
  }

  function handleDecrease(name, quantity) {
    if (quantity <= 0) {
      setCart([]);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((c) =>
        c.name === name ? { ...c, quantity: c.quantity - 1 } : c
      )
    );
  }

  return (
    <div className=" relative sm:px-2 md:px-4 lg:px-40">
      <Order cart={cart} />
      <Header cart={cart} />
      <div className=" sm:grid grid-cols-2">
        <Product />
        <Details
          cart={cart}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default App;
