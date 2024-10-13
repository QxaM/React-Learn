import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/shopping-cart-context";
import UserProgressContextProvider from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <CartContextProvider>
        <UserProgressContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </UserProgressContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
