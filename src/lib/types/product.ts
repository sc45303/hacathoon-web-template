export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  maxRating: number;
  imageUrl: string;
  category: string;
  description?: string;
  colors?: string[];
  sizes?: string[];
}

export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type ProductColor = string;