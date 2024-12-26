"use client";

import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'portrait';
  className?: string;
}

export function ProductImage({ src, alt, aspectRatio = 'portrait', className = '' }: ProductImageProps) {
  const aspectRatioClass = aspectRatio === 'square' ? 'aspect-square' : 'aspect-[3/4]';
  
  return (
    <div className={`relative ${aspectRatioClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}