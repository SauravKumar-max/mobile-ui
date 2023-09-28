import React from "react";
import Link from "next/link";
import { RiHome6Line, RiSettings3Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";

export function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-between bg-white px-9 py-5 w-full max-w-md border border-t border-[#00000060]">
      <Link href={"/"} className="flex items-center flex-col gap-1">
        <RiHome6Line className="w-6 h-6" />
        <span className="text-xs text-[#8D7B7B]">Home</span>
      </Link>
      <div className="flex items-center flex-col gap-1">
        <AiOutlineHeart className="w-6 h-6 text-[#8D7B7B]" />
        <span className="text-xs text-[#8D7B7B]">Saved</span>
      </div>
      <Link href={"/cart"} className="flex items-center flex-col gap-1">
        <CgShoppingBag className="w-6 h-6 text-[#8D7B7B]" />
        <span className="text-xs text-[#8D7B7B]">Cart</span>
      </Link>
      <div className="flex items-center flex-col gap-1">
        <RiSettings3Line className="w-6 h-6 text-[#8D7B7B]" />
        <span className="text-xs text-[#8D7B7B]">Settings</span>
      </div>
    </div>
  );
}
