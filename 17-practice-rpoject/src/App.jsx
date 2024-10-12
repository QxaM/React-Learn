import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/shopping-cart-context";
import CartModalProvider from "./store/cart-modal-context";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CartContextProvider>
        <CartModalProvider>
          <Header />
          <Meals />
          <Cart />
        </CartModalProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
