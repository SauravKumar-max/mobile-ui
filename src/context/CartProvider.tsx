"use client";

import React, { ReactNode, createContext, useContext, useReducer } from "react";
import { CartContextType, CartInitialState, CartType } from "./context.types";
import { cartReducer } from "@/reducer/cart-reducer";

const CartContext = createContext({} as CartContextType);

export default function CartProvider({ children }: { children: ReactNode }) {
  const cartInitialState: CartInitialState = {
    cart: [] as CartType[],
  };

  const [cartState, dispatchCart] = useReducer(cartReducer, cartInitialState);

  return (
    <CartContext.Provider value={{ cartState, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
