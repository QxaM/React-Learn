import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export const useCart = () => useContext(CartContext);
