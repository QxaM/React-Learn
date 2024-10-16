import React, { useState } from "react";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ],
  toggleFavorite: () => {},
};

export const ProductsContext = React.createContext(initialState);

export default ({ children }) => {
  const [products, setProducts] = useState(initialState.products);

  const toggleFavorite = (productId) => {
    setProducts((current) => {
      const prodIndex = current.findIndex((p) => p.id === productId);
      const newFavStatus = !current[prodIndex].isFavorite;
      const updatedProducts = [...current];
      updatedProducts[prodIndex] = {
        ...current[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  const contextValue = {
    products,
    toggleFavorite,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
