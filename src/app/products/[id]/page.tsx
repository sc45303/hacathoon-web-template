// app/products/[id]/page.tsx

import { ProductDetail } from "@/app/components/product-detail";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
   <ProductDetail />
  );
}
