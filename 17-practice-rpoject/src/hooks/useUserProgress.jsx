import { useContext } from "react";
import { UserProgressContext } from "../store/UserProgressContext";

export const useCartModal = () => useContext(UserProgressContext);
