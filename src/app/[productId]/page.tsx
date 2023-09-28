import { BackNavigation } from "@/components";
import { products } from "@/constant/data";
import { ProductDetails } from "@/components/ProductDetails";

type DetailProps = {
  params: { productId: string };
};

export default function Details({ params }: DetailProps) {
  const productDetails = products.find((item) => item.id === params.productId);

  return (
    <main className="bg-white px-6 pt-12 pb-20 overflow-hidden">
      <BackNavigation currentPage="Details" />
      {productDetails === undefined ? (
        <div className="flex items-center justify-center mt-4 font-semibold text-4xl text-gray-500 h-[70vh]">
          Product Not Found!
        </div>
      ) : (
        <ProductDetails details={productDetails} />
      )}
    </main>
  );
}
