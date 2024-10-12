import React from "react";
import Modal from "./UI/Modal";
import CartDetails from "./CartDetails";
import { useCartModal } from "../hooks/useCartModal";

const Cart = () => {
  const { isOpened } = useCartModal();

  return (
    <Modal open={isOpened}>
      <CartDetails />
    </Modal>
  );
};

export default Cart;
