"use client";

import { BackNavigation, CartItem, PriceDetails } from "@/components";
import { useCart } from "@/context/CartProvider";

export default function Details() {
  const {
    cartState: { cart },
  } = useCart();

  return (
    <main className="bg-white px-6 pt-12 pb-20 overflow-hidden">
      <BackNavigation currentPage="My Cart" />
      {cart.length === 0 ? (
        <div className="flex items-center justify-center mt-4 font-semibold text-4xl text-gray-500 h-[80vh]">
          Cart is Empty
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 mt-8">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <PriceDetails />
        </>
      )}
    </main>
  );
}
