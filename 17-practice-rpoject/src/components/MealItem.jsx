/* eslint-disable react/prop-types */
import React from "react";
import Formatter from "../util/formatter.js";
import Button from "./UI/Button.jsx";
import { useCart } from "../hooks/useCart.jsx";

const MealItem = ({ title, image, price, description }) => {
  const { addItem: handleAddItem } = useCart();

  const item = { title, price };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`}></img>
        <div>
          <h3>{title}</h3>
          <p className="meal-item-price">{Formatter.format(price, "USD")}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => handleAddItem(item)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
