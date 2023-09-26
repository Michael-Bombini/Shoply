import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../api/apliSlice";
import electronics from "./../../assets/electronics.jpg";

export default function GridCategories() {
  const { data, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <p>Loading....</p>;
  }
  const onSale = data?.filter((d) => d.in_sale);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-12 md:container md:mx-auto lg:gap-4">
      <Link to={"/products?category=Electronics"}>
        <div className="relative lg:rounded-lg h-full">
          <img
            src={electronics}
            alt=""
            className="w-full transition-opacity duration-300 hover:opacity-50 lg:rounded-lg h-full object-cover"
          />
          <h1 className="absolute top-1/2 left-1/3 text-3xl lg:text-5xl -translate-y-1/2 -translate-x-1/3 font-bold text-white z-50">
            Electronics
          </h1>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 hover:opacity-80 transition-opacity duration-500 lg:rounded-lg"></div>
        </div>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to={"/products?onSale=true"}>
          <div className="bg-gradient-to-b from-gray-200 to-gray-400 flex justify-center gap-4 px-8 flex-col h-full">
            <p className="text-2xl">{onSale?.length} items</p>
            <p className="text-4xl font-bold">On sale!</p>
          </div>
        </Link>

        <Link to={"/products?category=Clothing"}>
          <div className="bg-gray-700 relative">
            <img
              src={data && data[0].thumbnail_image}
              className="h-full object-cover opacity-20"
              alt=""
            />
            <div className="absolute top-0 right-0 bg-gray-300 opacity-70 font-bold px-6 py-2 rounded-bl-lg">
              Clothing
            </div>
          </div>
        </Link>

        <div className="bg-gradient-to-br p-2 from-[#DC6161] to-red-600 col-span-1 sm:col-span-2 text-white">
          <div className="px-4 py-8 mb">
            <p className="w-2/3 mb-4">
              Are you curious to explore our extensive collection of currently
              available products? We invite you to discover our diverse range by
              simply clicking below
            </p>
            <div>
              <Link
                to={"/products"}
                className="bg-[#9f3737] font-bold px-6 py-2 inline-block"
              >
                All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
