
"use client";
import React from 'react'

import Image from "next/image"
import  Link from 'next/link'
import { useRouter } from 'next/navigation';

import { Star, StarHalf } from 'lucide-react';
const PageArrivals = [
  {
    id: "t-shirt-tape-details",
    name: "T-shirt with Tape Details",
    image: "/images/pic1.png",
    rating: 4.5,
    price: 120,
    originalPrice: null,
    discount: null
  },
  {
    id: "skinny-fit-jeans",
    name: "Skinny Fit Jeans",
    image: "/images/pic2.png",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    // discount: 20
  },
  {
    id: "checkered-shirt",
    name: "Checkered Shirt",
    image: "/images/pic3.png",
    rating: 4.5,
    price: 180,
    originalPrice: null,
    discount: null
  },
  {
    id: "sleeve-striped-tshirt",
    name: "Sleeve Striped T-shirt",
    image: "/images/pic4.png",
    rating: 4.5,
    price: 130,
    originalPrice: 160,
     discount: 30
  },
  {
    id: "t-shirt-tape-details",
    name: "T-shirt with Tape Details",
    image: "/images/pic1.png",
    rating: 4.5,
    price: 120,
    originalPrice: null,
    discount: null
  },
  {
    id: "skinny-fit-jeans",
    name: "Skinny Fit Jeans",
    image: "/images/pic2.png",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
     discount: 20
  },
  {
    id: "checkered-shirt",
    name: "Checkered Shirt",
    image: "/images/pic.png",
    rating: 4.5,
    price: 180,
    originalPrice: null,
    discount: null
  },
  {
    id: "sleeve-striped-tshirt",
    name: "Skinny Fit Jeans",
    image: "/images/pic5.png",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
     discount: 20
  },
 
]

function Rating({ rating }: { rating: number }) {

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((value) => {
        if (value <= Math.floor(rating)) {
          return <Star key={value} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        } else if (value === Math.ceil(rating) && !Number.isInteger(rating)) {
          return <StarHalf key={value} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        } else {
          return <Star key={value} className="w-4 h-4 text-gray-200" />
        }
      })}
      <span className="text-sm text-gray-500 ml-1">{rating}/5</span>
    </div>
  )
}

  

const PageArrival = () => {
 
  const router = useRouter();
  const handleProductClick = (id: string) => {
    router.push(`/product/${id}`); // Navigate to dynamic product page
  };


  return (
    <section className="py-8 md:py-16 font-satoshi">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-Bold text-center mb-6 md:mb-12 ">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {PageArrivals.map((product) => (
            <div key={product.name} className="group cursor-move"
            onClick={() => handleProductClick(product.id)}
            >
           
              
              <div className="relative aspect-square mb-4  rounded-lg overflow-hidden font-satoshi">

              <Link href="#product1" className="absolute top-0 left-0 w-full h-full z-10">
                <Image
                 
                  src={product.image}
                  alt={product.name}
                  
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4"

                />
                </Link>
                
                
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded font-satoshi">
                    {/* -{product.discount}% */}
                  </div>
                  
                )}
              </div>
              <h3 className="font-satoshi mb-2 text-sm md:text-base ">{product.name}</h3>
              <Rating rating={product.rating} />
              <div className="flex items-center gap-3 mt-2">
                <span className="font-medium">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 md:mt-12">
          <button className="text-base w-full sm:w-[228px] h-[52px] border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
            View All
          </button>
        </div>
      </div>
      <div className=" mx-auto px-4 mt-8 md:mt-12 w-full bg-[#F5F5F5] h-[1px] ">
        <hr />
      </div>
    </section>
  )
}

export default PageArrival
