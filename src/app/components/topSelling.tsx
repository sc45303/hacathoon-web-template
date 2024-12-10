import Image from "next/image"
import { Star, StarHalf } from 'lucide-react'

const Arrivals = [
  {
    name: "T-shirt with Tape Details",
    image: "/images/pic8.png",
    rating: 4.5,
    price: 120,
    originalPrice: null,
    discount: null
  },
  {
    name: "Skinny Fit Jeans",
    image: "/images/pic7.png",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20
  },
  {
    name: "Checkered Shirt",
    image: "/images/pic6.png",
    rating: 4.5,
    price: 180,
    originalPrice: null,
    discount: null
  },
  {
    name: "Sleeve Striped T-shirt",
    image: "/images/pic5.png",
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30
  }
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

export function TopSelling() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12">Top Selling</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {Arrivals.map((product) => (
            <div key={product.name} className="group">
              <div className="relative aspect-square mb-4   overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 "
                />
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}
              </div>
              <h3 className="font-medium mb-2 text-sm md:text-base">{product.name}</h3>
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

