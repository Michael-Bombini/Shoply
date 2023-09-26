import { Product as IProduct } from "../../models/Product";
import Product from "./Product";

interface Props {
  products: IProduct[];
}
export default function ProductList({ products }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto flex-1">
      {products.map((product) => (
        <Product name={product.name} thumbnail={product.thumbnail_image} price={product.price} slug={product.slug}/>
      ))}
    </ul>
  );
}
