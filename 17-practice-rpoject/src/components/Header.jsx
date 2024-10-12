import React from "react";
import ReactfoodLogo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useCart } from "../hooks/useCart";
import { useCartModal } from "../hooks/useCartModal";

const Header = () => {
  const { items } = useCart();
  const { openCart } = useCartModal();

  return (
    <header id="main-header">
      <div id="title">
        <img src={ReactfoodLogo} alt="Logo with burger on a plate"></img>
        <h1>Reactfood</h1>
      </div>
      <Button text onClick={openCart}>
        Cart({items.length})
      </Button>
    </header>
  );
};

export default Header;
