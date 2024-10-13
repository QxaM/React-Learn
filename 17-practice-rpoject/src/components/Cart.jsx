import React from "react";
import Modal from "./UI/Modal";
import CartDetails from "./CartDetails";
import { useCartModal } from "../hooks/useUserProgress";

const Cart = () => {
  const { progress, close } = useCartModal();

  return (
    <Modal
      open={progress === "cart"}
      onClose={progress === "cart" ? close : null}
    >
      <CartDetails />
    </Modal>
  );
};

export default Cart;
