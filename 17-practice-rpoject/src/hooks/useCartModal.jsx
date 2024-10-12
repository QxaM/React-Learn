import { useContext } from "react";
import { CartModalContext } from "../store/cart-modal-context";

export const useCartModal = () => useContext(CartModalContext);
