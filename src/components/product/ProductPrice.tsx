interface ProductPriceProps {
  price: number;
  originalPrice?: number;
  discount?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function ProductPrice({ price, originalPrice, discount, size = 'sm' }: ProductPriceProps) {
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`font-bold ${sizeClasses[size]}`}>${price}</span>
      {originalPrice && (
        <>
          <span className={`text-gray-500 line-through ${sizeClasses[size]}`}>
            ${originalPrice}
          </span>
          {discount && (
            <span className="text-red-500 text-sm">-{discount}%</span>
          )}
        </>
      )}
    </div>
  );
}