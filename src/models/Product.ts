export interface Product {
  category: string;
  images?: string[];
  in_sale: boolean;
  name: string;
  description?: string;
  price: number;
  slug: string;
  thumbnail_image: string;
}
