"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../typing";
import { getAllProducts } from "../../../Requests/Requests";
import { Loader } from "lucide-react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
        const getData = async () =>{
            try {
                const products:Product[] = await getAllProducts();
                setProducts(products);
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        getData();
  },[])

  return <div className="py-16">
            <h1 className='text-center font-bold sm:text-4xl text-2xl font-sans capitalize text-charcoal mb-12'>All Products</h1>
            {loading ? (
                <div className="flex justify-center items-center mt-16 ">
                    <Loader size={32} className="animate-spin" />
                </div>
            ) : (
                <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 ">
                    {
                        products?.map((products)=>{
                            return <ProductCard key={products.id}  product={products} />
                        })
                    }
                </div>
            )}

  </div>;
};

export default AllProducts;
