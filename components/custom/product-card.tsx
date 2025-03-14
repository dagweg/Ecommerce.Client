// components/ProductCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Star, StarsIcon } from "lucide-react";
import { ProductResult } from "@/types/cart.types";

const ProductCard: React.FC<{
  productResult: ProductResult;
  variant: "compact" | "full";
}> = ({ productResult, variant = "compact" }) => {
  const handleAddToCart = () => {
    console.log(
      `Product "${name}" added to cart (ID: ${productResult.productId})`
    );
    alert(`"${name}" added to cart! (Simulated)`);
  };

  return (
    <div
      className={clsx({
        "cursor-pointer overflow-hidden relative   rounded-3xl border-[1px]  border-neutral-100 hover:border-[1px] hover:border-neutral-300 active:ring-4 ring-neutral-200   duration-100 hover:rounded-3xl mx-auto  p-4 group":
          true,
        "w-full h-60 flex items-end": variant === "full",
        "max-w-sm h-96": variant === "compact",
      })}
    >
      <Image
        src={
          productResult.images.thumbnail.url ?? "https://imgur.com/N8xhNK3.jpg"
        }
        alt=""
        width={200}
        height={200}
        className={clsx({
          "opacity-100 h-full object-contain": true,
          "mx-auto h-[200]": variant === "compact",
        })}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Image>
      {/* <div className=" w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-neutral-100 bg-neutral-200  opacity-60"></div> */}
      <div className="text content relative z-10 p-4 flex flex-col ">
        <Link
          href={`/store/${name}`}
          className="font-bold text-xl md:text-2xl text-black hover:text-blue-800"
        >
          {productResult.productName}
        </Link>
        <div className="flex items-center gap-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star className="text-neutral-400 invert" size={15} />
            ))}
        </div>
        <p className="font-normal text-sm text-black mt-3">
          {productResult.productDescription || "No description available."}
        </p>
        <p className="font-semibold text-sm text-black">
          ${(productResult.priceValueInCents / 100).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
