import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <Image src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h4 className="text-lg font-semibold">{product.name}</h4>
      <p className="text-gray-700">${product.price}</p>
      <Link
        href={`/product/${product.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}
