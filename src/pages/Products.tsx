import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../api/apliSlice";
import Loading from "../components/loading/LoadingHome";
import SaleFilter from "../components/filters/SaleFilter";
import CategoryFilter from "../components/filters/CategoryFilter";
import ProductList from "../components/products/ProductList";
import NoResult from "../components/ui/NoResult";
import useTitle from "../hooks/useTitle";

export default function Products() {
  const [params, setParams] = useSearchParams();

  const category = params.get("category");
  const sale = params.get("onSale");
  const { data: products, isLoading } = useGetProductsQuery();

  useTitle(`Shoply - ${category ? category : ""}`);
  if (isLoading) return <Loading />;

  let categoryProducts = products;
  if (category) {
    categoryProducts = products?.filter(
      (product) => product.category.toLowerCase() === category?.toLowerCase()
    );
  }
  let onSaleProducts = categoryProducts;
  if (sale === "true") {
    onSaleProducts = onSaleProducts?.filter(
      (product) => product.in_sale === true
    );
  }

  return (
    <section className="">
      <div className="flex flex-wrap justify-center items-center mt-4 mb-8">
        <SaleFilter setParams={setParams} onSale={sale} />
        <CategoryFilter setParams={setParams} category={category} />
      </div>

      {onSaleProducts && onSaleProducts.length > 0 ? (
        <ProductList products={onSaleProducts} />
      ) : (
        <NoResult message="There are no results try to change filters" />
      )}
    </section>
  );
}
