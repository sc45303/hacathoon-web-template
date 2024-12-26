"use client";

import Link from 'next/link';
import { Product } from '@/lib/types/product';
import { ProductImage } from './ProductImage';
import { ProductRating } from './ProductRating';
import { ProductPrice } from './ProductPrice';

export function ProductCard({ id, name, price, originalPrice, discount, rating, maxRating, imageUrl }: Product) {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="relative mb-4">
        <ProductImage
          src={imageUrl}
          alt={name}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        {discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
            -{discount}%
          </span>
        )}
      </div>
      <h3 className="font-medium text-base mb-2">{name}</h3>
      <ProductRating rating={rating} maxRating={maxRating} />
      <div className="mt-2">
        <ProductPrice
          price={price}
          originalPrice={originalPrice}
          discount={discount}
        />
      </div>
    </Link>
  );
}