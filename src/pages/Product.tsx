import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../api/apliSlice";
import Loading from "../components/loading/LoadingHome";
import ProductList from "../components/products/ProductList";

export default function Product() {
  const { slug } = useParams();
  const { data: products, isLoading } = useGetProductsQuery();
  if (isLoading) return <Loading />;
  const product = products?.find(
    (product) => product.slug.toLowerCase() === slug?.toLowerCase()
  );

  return (
    <section>
      {/* 
      <button
        className="bg-blue-700 rounded-md text-white px-2 py-1 block my-6"
        onClick={() => {
          dispatch(
            addProduct({
              name: product?.name,
              price: product?.price,
              thumbnail_image: product?.thumbnail_image,
            })
          );
          dispatch(openModal({ message: "Product added to cart" }));
        }}
      >
        Add Product
      </button> */}
    </section>
  );
}
