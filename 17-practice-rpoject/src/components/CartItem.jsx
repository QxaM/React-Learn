/* eslint-disable react/prop-types */
import React from "react";
import Formatter from "../util/formatter";
import { useCart } from "../hooks/useCart";

const CartItem = ({ item }) => {
  const { incrementItem, decrementItem } = useCart();

  return (
    <li className="cart-item">
      <p>{`${item.title} - ${item.count} x ${Formatter.format(
        item.price,
        "USD"
      )}`}</p>
      <div className="cart-item-actions">
        <button onClick={() => decrementItem(item)}>-</button>
        <p>{item.count}</p>
        <button onClick={() => incrementItem(item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
