import React from "react";
import { Product } from "../../../../../../typing";
import {
  getProductByCategory,
  getSingleProduct,
} from "../../../../../../Requests/Requests";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import AddToCart from "@/app/(root)/product/product-details/[id]/AddToCart";
import ProductCard from "@/components/HomePage/ProductCard";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const singleProduct: Product = await getSingleProduct(id);
  const relatedProduct: Product[] = await getProductByCategory(
    singleProduct.category
  );

  const num = Math.round(singleProduct.rating.rate);
  const starArray = new Array(num).fill(0);

  return (
    <div className="my-20">
        {/* product details */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4 ">
        {/* image */}
        <div className="col-span-3  lg:mb-0 mb-6">
          <Image
            src={singleProduct.image}
            alt={singleProduct.title}
            width={400}
            height={200}
            className=" h-[440px] lg:mx-0 sm:mx-auto"
          />
        </div>

        {/*content */}
        <div className="col-span-4">
          {/* title */}
          <h1 className="lg:text-2xl text-2xl "> {singleProduct.title} </h1>
          {/* rating */}
          <div className="mt-2 flex items-center space-x-2 ">
            <div className="flex items-center">
              {starArray.map(() => {
                return (
                  <StarIcon
                    key={Math.random() * 5000}
                    size={20}
                    fill="yellow"
                    className="text-yellow-300"
                  />
                );
              })}
            </div>
            <p className="text-base text-gray-600 font-semibold">
              ({singleProduct?.rating.count} Reviews)
            </p>
          </div>
          {/* line */}
          <hr className="w-4/5 my-4 rounded-lg" />
          {/* price */}
          <h1 className="lg:text-5xl text-3xl text-charcoal font-bold ">
            ${singleProduct.price.toFixed(2)}
          </h1>
          {/* description */}
          <p className="mt-4 text-base text-black opacity-70">
            {singleProduct.description}
          </p>
          {/* caregory */}
          <p className="mt-2 text-base text-charcoal font-semibold ">
            {singleProduct.category}
          </p>
          {/* tag */}
          <p className="mt-1 text-sm text-charcoal opacity-85 font-medium ">
            Tag: PrimePick
          </p>
          {/* stock keeping unit SKU */}
          <p className=" text-sm text-charcoal opacity-85 font-medium ">
          SKU: {Math.random()*500}
          </p>
          {/* AddToCart */}
          <AddToCart product = {singleProduct} />
        </div>
         
      </div>
      
       {/* related products */}
       <div className="w-4/5 mt-20 mx-auto ">
       <h1 className="md:text-3xl text-2xl text-charcoal font-semibold">Related Products</h1>
       <div className="sm:mt-12 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {relatedProduct.map((product)=>{
            return <ProductCard key={product.id} product={product} />
        })}
       </div>
       </div>
    </div>
  );
};

export default ProductDetails;
