"use client";

import { NextResponse } from 'next/server';

// Define a Product Type
interface Product {
  id: number;
  name: string;
  price: number;
}

let products: Product[] = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 200 },
  { id: 3, name: 'Product C', price: 300 },

];

// GET: Fetch a single product
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  if (!product) {
    return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, product });
}

// DELETE: Remove a single product
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  products = products.filter((p) => p.id !== parseInt(params.id));
  return NextResponse.json({ success: true, message: 'Product deleted' });
}
