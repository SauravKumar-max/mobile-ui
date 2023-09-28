import React from "react";
import { useCart } from "@/context/CartProvider";
import { CartType } from "@/context/context.types";
import { HiMiniArrowRight } from "react-icons/hi2";

export function PriceDetails() {
  const {
    cartState: { cart },
  } = useCart();

  const totalPrice = cart.reduce(
    (acc: number, val: CartType) => acc + val.price * val.quantity,
    0
  );
  return (
    <div className="mt-7">
      <input
        type="text"
        className="w-full py-4 px-5 bg-[#0000000D] rounded-xl"
        placeholder="Add a voucher"
      />
      <div className="flex flex-col gap-4 mt-7">
        <div className="flex items-center justify-between">
          <span className="text-base text-[#00000099]">Sub-total</span>
          <span>INR {totalPrice}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base text-[#00000099]">VAT (%)</span>
          <span>INR 0.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base text-[#00000099]">Shipping Fee</span>
          <span>INR 80</span>
        </div>
        <div className="flex items-center justify-between pt-4 pb-10 border-t border-[#00000033]">
          <span>Total</span>
          <span>INR {totalPrice + 80}</span>
        </div>
      </div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-white px-9 py-5 w-full max-w-md border-transparent border-t border-t-[#00000060]">
        <button className="bg-black text-white w-full py-4 flex items-center justify-center gap-2 rounded-xl">
          <span>Checkout</span>
          <HiMiniArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
