import { ProductType } from "@/constant/constant.type";
import { CART_ACTIONTYPE } from "@/reducer/reducer.types";


export type CartContextType = {
    cartState: CartInitialState,
    dispatchCart: (action: CART_ACTIONTYPE) => void
}

export type CartInitialState = {
    cart: CartType[]
}

export interface CartType extends ProductType {
    selectedSize: string
}