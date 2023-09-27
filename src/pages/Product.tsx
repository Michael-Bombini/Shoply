import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../api/apliSlice";
import Loading from "../components/loading/LoadingHome";
import ProductDetail from "../components/products/ProductDetail";
import NoResult from "../components/ui/NoResult";
import useTitle from "../hooks/useTitle";

function Product() {
  const { slug } = useParams();
  const { data: products, isLoading } = useGetProductsQuery();

  useTitle(slug);

  if (isLoading) return <Loading />;
  const product = products?.find(
    (product) => product.slug.toLowerCase() === slug?.toLowerCase()
  );

  return (
    <section>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <NoResult message="This product does not exist" />
      )}
    </section>
  );
}

export default Product;
