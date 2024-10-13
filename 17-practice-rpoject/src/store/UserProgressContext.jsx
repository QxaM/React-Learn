/* eslint-disable react/prop-types */
import React, { useState, createContext } from "react";

export const UserProgressContext = createContext({
  progress: "",
  openCart: () => {},
  openCheckout: () => {},
  close: () => {},
});

const UserProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState("");

  const openCart = () => {
    setProgress("cart");
  };

  const openCheckout = () => {
    setProgress("checkout");
  };

  const close = () => {
    setProgress("");
  };

  const contextValues = {
    progress,
    openCart,
    openCheckout,
    close,
  };

  return (
    <UserProgressContext.Provider value={contextValues}>
      {children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContextProvider;
