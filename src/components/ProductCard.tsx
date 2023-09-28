import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/constant/constant.type";

type ProductCardProps = {
  item: ProductType;
};

export function ProductCard({ item }: ProductCardProps) {
  const { id, name, price, image } = item;

  return (
    <div>
      <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 h-48">
        <Link href={`/${id}`}>
          <Image
            src={image}
            alt={name}
            className="w-full h-full scale-125"
            fill
            style={{ objectFit: "cover" }}
          />
        </Link>
        <div className="absolute top-2 right-2 bg-white p-3 rounded">
          <AiOutlineHeart className="w-4 h-4 text-black" />
        </div>
      </div>
      <div className="font-semibold mt-2">{name}</div>
      <div className="text-[#0000008f]">INR {price}</div>
    </div>
  );
}
