import { CartType } from "@/context/context.types";

export type CART_ACTIONTYPE =
    | { type: "ADD_TO_CART", payload: CartType}
    | { type: "REMOVE_FROM_CART", payload: {id: string, selectedSize: string} }
    | { type: "UPDATE_QUANTITY", payload: {id: string, selectedSize: string, updatedQuantity: number} }
