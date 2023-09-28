"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartType } from "@/context/context.types";
import { useCart } from "@/context/CartProvider";

type CartItemProps = {
  item: CartType;
};

export function CartItem({ item }: CartItemProps) {
  const { id, name, image, price, quantity, selectedSize } = item;
  const { dispatchCart } = useCart();

  function removeFromCart() {
    dispatchCart({ type: "REMOVE_FROM_CART", payload: { id, selectedSize } });
  }

  function updateQuantity(type: "INCREASE" | "DECREASE") {
    if (type === "INCREASE") {
      dispatchCart({
        type: "UPDATE_QUANTITY",
        payload: { id, selectedSize, updatedQuantity: quantity + 1 },
      });
    } else if (type === "DECREASE" && quantity > 1) {
      dispatchCart({
        type: "UPDATE_QUANTITY",
        payload: { id, selectedSize, updatedQuantity: quantity - 1 },
      });
    }
  }

  return (
    <div className="w-full flex items-start gap-4 px-4 py-3 bg-[#F2F2F2] rounded-xl">
      <div className="relative aspect-h-1 aspect-w-1 w-20 overflow-hidden rounded-md border bg-gray-200 h-20">
        <Image
          src={image}
          alt={name}
          className="w-full h-full scale-105"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full h-20 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm">{name}</p>
            <p className="text-xs text-[#00000099]">Size {selectedSize}</p>
          </div>
          <button onClick={removeFromCart}>
            <HiOutlineTrash className="w-4 h-4 text-[#F60000]" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm whitespace-nowrap">INR {price}</p>
          <div className="flex items-center gap-2">
            <button
              disabled={quantity === 1}
              className={`p-2 border border-[#00000033] rounded-sm ${
                quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => updateQuantity("DECREASE")}
            >
              <AiOutlineMinus className="w-3 h-3" />
            </button>
            <span>{quantity}</span>
            <button
              className="p-2 border border-[#00000033] rounded-sm"
              onClick={() => updateQuantity("INCREASE")}
            >
              <AiOutlinePlus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
