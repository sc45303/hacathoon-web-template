"use client";

import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  maxRating: number;
  size?: 'sm' | 'md' | 'lg';
}

export function ProductRating({ rating, maxRating, size = 'sm' }: ProductRatingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="text-sm text-gray-600">
        {rating}/{maxRating}
      </span>
    </div>
  );
}