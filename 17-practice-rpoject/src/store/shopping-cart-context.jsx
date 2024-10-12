/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
});

const incrementItemCount = (array, item) => {
  const newItem = {
    ...item,
    count: item.count + 1,
  };
  return array.map((item) => (item.title === newItem.title ? newItem : item));
};

const decrementItemCount = (array, item) => {
  const newItem = {
    ...item,
    count: item.count - 1,
  };

  let newState = array.filter((item) => item.title !== newItem.title);

  if (newItem.count > 0) {
    newState = [...newState, newItem];
  }
  return newState;
};

const cartReducer = (state, action) => {
  const foundItem = state.find(
    (item) => item.title === action.payload.item.title
  );
  switch (action.type) {
    case "ADD_ITEM": {
      if (foundItem) {
        return incrementItemCount(state, foundItem);
      }
      return [...state, { ...action.payload.item, count: 1 }];
    }

    case "INCREMENT": {
      if (foundItem) {
        return incrementItemCount(state, foundItem);
      }
      return state;
    }

    case "DECREMENT": {
      if (foundItem) {
        return decrementItemCount(state, foundItem);
      }
      return state;
    }

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useReducer(cartReducer, []);

  const addItem = (newItem) => {
    setItems({
      type: "ADD_ITEM",
      payload: {
        item: newItem,
      },
    });
  };

  const incrementItem = (item) => {
    setItems({
      type: "INCREMENT",
      payload: {
        item: item,
      },
    });
  };

  const decrementItem = (item) => {
    setItems({
      type: "DECREMENT",
      payload: {
        item: item,
      },
    });
  };

  const contextValues = { items, addItem, incrementItem, decrementItem };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
