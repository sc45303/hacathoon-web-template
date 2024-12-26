"use client";
import { useRouter } from "next/navigation"; // Use 'next/navigation' for Next.js 13+
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

const Arrivals = [
  {
    id: "1",
    name: "T-shirt with Tape Details",
    image: "/images/pic1.png",
    rating: 4.5,
    price: 120,
    originalPrice: null,
    discount: null,
    description: "A stylish T-shirt with tape details for a modern look.",
  },
  {
    id: "2",
    name: "Skinny Fit Jeans",
    image: "/images/pic2.png",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
  },
  {
    id: "3",
    name: "Checkered Shirt",
    image: "/images/pic3.png",
    rating: 4.5,
    price: 180,
    originalPrice: null,
    discount: null,
  },
  {
    id: "4",
    name: "Sleeve Striped T-shirt",
    image: "/images/pic4.png",
    rating: 4.5,
    price: 130,
    originalPrice: 160,
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

export function NewArrivals() {
  const router = useRouter();

  const handleProductClick = (id: string) => {
    router.push(`/product/${id}`); // Navigate to dynamic product page
  };

  return (
    <>
          {/* <ProductCard data={{
            id: "1",
            title: "Sample Product",
            srcUrl: "/images/pic1.png",
            price: 100,
            discount: {
              percentage: 10,
              amount: 10,
            },
            rating: 4.5,
          }}/> */}

    <section className="py-8 md:py-16 font-Bold">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 font-satoshi r">
          {Arrivals.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => handleProductClick(product.id)} // Attach click handler
            >
              <div className="relative aspect-square mb-4 rounded-4xl overflow-hidden transform hover:scale-110 duration-300 ease-in-out">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4  "
                />
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {/* -{product.discount}% */}
                  </div>
                )}
              </div>
              <h3 className="font-bold mb-2 text-sm md:text-base font-satoshi">{product.name}</h3>
              <Rating rating={product.rating} />
              <div className="flex items-center gap-3 mt-2">
                <span className="font-bold font-satoshi">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 md:mt-12 font-satoshi">
          <button className="text-base w-full sm:w-[228px] h-[52px] hover:border-gray-300 border border-gray-200 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:transition-transform ease-in-out transform hover:scale-110 duration-300">
            View All
          </button>
        </div>
      </div>
      <div className="mx-auto px-4 mt-8 md:mt-12 w-full bg-[#F5F5F5] h-[1px]">
        <hr />
      </div>
    </section>
    </>
  );
}
