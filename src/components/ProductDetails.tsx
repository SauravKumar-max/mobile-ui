"use client";

import { ProductType } from "@/constant/constant.type";
import { useCart } from "@/context/CartProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { HiMiniArrowRight } from "react-icons/hi2";

type ProductDetailsProps = {
  details: ProductType;
};

export function ProductDetails({ details }: ProductDetailsProps) {
  const { dispatchCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [isCartClicked, setIsCartClicked] = useState(false);

  const { name, image, description, price, rating, sizes, noOfReviews } =
    details;

  function addtoCart() {
    if (selectedSize !== "") {
      const cartItem = { ...details, selectedSize };
      dispatchCart({ type: "ADD_TO_CART", payload: cartItem });
      setIsCartClicked(true);
    }
  }

  function onSizeClick(size: string) {
    setSelectedSize(size);
  }

  return (
    <>
      <div className="relative aspect-h-1 aspect-w-1 mt-3 w-full overflow-hidden rounded-md bg-gray-200 h-96">
        <Image
          src={image}
          alt={name}
          className="w-full h-full scale-125"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-2 right-2 bg-white p-3 rounded">
          <AiOutlineHeart className="w-8 h-8 text-black" />
        </div>
      </div>
      <h2 className="text-2xl my-3">{name}</h2>
      <div className="flex items-center gap-1">
        <AiTwotoneStar className="w-6 h-6 text-[#FFA928]" />
        <p>
          {rating}/5
          <span className="text-[#00000099]">({noOfReviews} reviews)</span>
        </p>
      </div>
      <p className="my-5 text-[#00000099]">{description}</p>
      <div className="mb-12">
        <h4 className="text-xl mb-4">Choose Size</h4>
        <div className="flex items-center gap-3">
          {sizes.map((size, index) => (
            <button
              key={size + index}
              className={`w-12 h-12 flex items-center justify-center text-xl border border-[#00000033] rounded-md ${
                selectedSize === size ? "bg-black text-white border-none" : ""
              }`}
              onClick={() => onSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-between gap-8 bg-white px-6 py-5 w-full max-w-md border border-t border-[#00000060]">
        <div>
          <p className="text-[#00000099]">Price</p>
          <p className="text-2xl whitespace-nowrap">INR {price}</p>
        </div>
        {isCartClicked ? (
          <Link
            href={"/cart"}
            className="bg-black text-white w-full py-4 flex items-center justify-center gap-2 rounded-xl"
          >
            <span>Go to Cart</span>
            <HiMiniArrowRight className="w-6 h-6 text-white" />
          </Link>
        ) : (
          <button
            onClick={addtoCart}
            disabled={selectedSize === ""}
            className={`bg-black text-white w-full py-4 flex items-center justify-center gap-2 rounded-xl ${
              selectedSize === "" ? "bg-[#00000091] cursor-not-allowed" : ""
            }`}
          >
            <CgShoppingBag className="w-6 h-6 text-white" />
            <span>Add to Cart</span>
          </button>
        )}
      </div>
    </>
  );
}
