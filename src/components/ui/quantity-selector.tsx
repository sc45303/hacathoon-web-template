"use client";

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const decrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center border rounded-full">
      <button
        className="p-2 disabled:opacity-50"
        onClick={decrease}
        disabled={quantity <= min}
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-12 text-center">{quantity}</span>
      <button
        className="p-2 disabled:opacity-50"
        onClick={increase}
        disabled={quantity >= max}
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}