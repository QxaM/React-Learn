import React from "react";
import Button from "./UI/Button";
import { useCart } from "../hooks/useCart";
import { useCartModal } from "../hooks/useCartModal";
import CartItem from "./CartItem";
import Formatter from "../util/formatter";

const CartDetails = () => {
  const { items } = useCart();
  const { closeCart } = useCartModal();

  let total = items.reduce(
    (accumulator, item) => accumulator + item.count * item.price,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.title} item={item} />
        ))}
      </ul>
      <div className="cart-total">
        <p>{Formatter.format(total, "USD")}</p>
      </div>
      <menu className="modal-actions">
        <Button text onClick={closeCart}>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </menu>
    </div>
  );
};

export default CartDetails;
