/* eslint-disable react/prop-types */
import React, { useState, createContext } from "react";

export const CartModalContext = createContext({
  isOpened: false,
  openCart: () => {},
  closeCart: () => {},
});

const CartModalProvider = ({ children }) => {
  const [isOpened, setOpened] = useState(false);

  const openCart = () => {
    setOpened(true);
  };

  const closeCart = () => {
    setOpened(false);
  };

  const contextValues = {
    isOpened,
    openCart,
    closeCart,
  };

  return (
    <CartModalContext.Provider value={contextValues}>
      {children}
    </CartModalContext.Provider>
  );
};

export default CartModalProvider;
