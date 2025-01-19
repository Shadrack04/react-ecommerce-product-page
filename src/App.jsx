import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Details from "./components/Details";
import Order from "./components/Order";
import LightBox from "./components/LightBox";

function App() {
  const [cart, setCart] = useState([]);
  const [openOrder, setOpenOrder] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [openLightBox, setOpenLightBox] = useState(false);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 700px)");
    function handleScreenChange() {
      setIsLargeScreen(mediaQuery.matches);
    }

    handleScreenChange();
    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

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
    console.log(quantity);
    if (quantity < 1) {
      setCart([]);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((c) =>
        c.name === name ? { ...c, quantity: c.quantity - 1 } : c
      )
    );
  }

  function handleCheckout() {
    setOpenOrder(false);
    setCart([]);
  }

  return (
    <div className=" relative w-screen sm:w-[80%] mx-auto">
      {openLightBox && (
        <LightBox
          setOpenLightBox={setOpenLightBox}
          isLargeScreen={isLargeScreen}
        />
      )}
      {openOrder && (
        <Order
          cart={cart}
          handleCheckout={handleCheckout}
          setOpenOrder={setOpenOrder}
        />
      )}
      <Header
        cart={cart}
        openOrder={{ openOrder }}
        setOpenOrder={setOpenOrder}
      />
      <div className=" sm:grid grid-cols-2">
        <Product
          isLargeScreen={isLargeScreen}
          setOpenLightBox={setOpenLightBox}
        />
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
