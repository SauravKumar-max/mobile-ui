import { CartInitialState, CartType } from "../context/context.types";
import { CART_ACTIONTYPE } from "./reducer.types";


export const cartReducer = (
    cartState: CartInitialState,
    action: CART_ACTIONTYPE
  ) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const cart = [...cartState.cart];
        const presentItem = cart.find((item) => item.id === action.payload.id);
        let updatedCart = [] as CartType[];
        if (
          presentItem === undefined ||
          presentItem.selectedSize !== action.payload.selectedSize
        ) {
          // For adding completly new product in cart
          // AND
          // For adding same product but with different size
          updatedCart = [...cart, action.payload];
        } else if (presentItem.selectedSize === action.payload.selectedSize) {
          // For increasing the quantity of the same product with same size present in the cart.
          updatedCart = cart.map((item) =>
            item.id === action.payload.id &&
            item.selectedSize === action.payload.selectedSize
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return { ...cartState, cart: updatedCart };

      case "REMOVE_FROM_CART":
        return {
          ...cartState,
          cart: cartState.cart.filter(
            (item) =>
              item.id !== action.payload.id || 
              item.selectedSize !== action.payload.selectedSize
          ),
        };

      case "UPDATE_QUANTITY":
        return {
          ...cartState,
          cart: cartState.cart.map((item) =>
            item.id === action.payload.id &&
            item.selectedSize === action.payload.selectedSize
              ? { ...item, quantity: action.payload.updatedQuantity }
              : item
          ),
        };

      default:
        return cartState;
    }
  };