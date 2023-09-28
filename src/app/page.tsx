import { BottomNavigation, HomeHeader, ProductCard } from "@/components";
import { products } from "@/constant/data";

export default function Home() {
  return (
    <main className="bg-white px-6 pt-12 pb-24 overflow-hidden">
      <HomeHeader />
      <div className="mt-6 grid gap-x-6 gap-y-6 grid-cols-2">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <BottomNavigation />
    </main>
  );
}
