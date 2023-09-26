import { useGetProductsQuery } from "../api/apliSlice";
import Banner from "../components/ui/Banner";
import GridCategories from "../components/ui/GridCategories";
import Loading from "../components/loading/LoadingHome";

export default function Index() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <>
      <Banner />
      <GridCategories />
    </>
  );
}
