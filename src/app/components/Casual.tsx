import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

const CasualProducts = [
  {
    name: "Casual Cotton Shirt",
    image: "/images/casual1.png",
    rating: 4.5,
    price: 150,
    originalPrice: null,
  },
  {
    name: "Relaxed Fit Trousers",
    image: "/images/casual2.png",
    rating: 4.0,
    price: 200,
    originalPrice: 250,
  },
  {
    name: "Casual Sneakers",
    image: "/images/casual3.png",
    rating: 4.8,
    price: 180,
    originalPrice: null,
  },
  {
    name: "Classic Denim Jacket",
    image: "/images/casual4.png",
    rating: 5.0,
    price: 300,
    originalPrice: null,
  },
];

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((value) => {
        if (value <= Math.floor(rating)) {
          return <Star key={value} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
        } else if (value === Math.ceil(rating) && !Number.isInteger(rating)) {
          return <StarHalf key={value} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
        } else {
          return <Star key={value} className="w-4 h-4 text-gray-200" />;
        }
      })}
      <span className="text-sm text-gray-500 ml-1">{rating}/5</span>
    </div>
  );
}

export default function Casual() {
  return (
    <section className="py-8 md:py-16 font-Bold">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12">CASUAL WEAR</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CasualProducts.map((product) => (
            <div key={product.name} className="group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 bg-gray-100"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <Rating rating={product.rating} />
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
