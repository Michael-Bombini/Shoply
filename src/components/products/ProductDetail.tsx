import { Product } from "../../models/Product";
import { addProduct } from "../../redux/slices/cartSlice";
import { openModal } from "../../redux/slices/modalSlice";
import { useAppDispatch } from "../../redux/store";
import { useState } from "react";
interface Props {
  product: Product;
}
export default function ProductDetail({ product }: Props) {
  const dispatch = useAppDispatch();
  const [selectedThumb, setSelectedThumb] = useState(product.thumbnail_image);

  function handleAddProduct() {
    dispatch(
      addProduct({
        name: product?.name,
        price: product?.price,
        thumbnail_image: product?.thumbnail_image,
      })
    );
    dispatch(openModal({ message: "Product added to cart" }));
  }

  return (
    <div className="max-w-screen-xl mt-14 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-8  h-96 mx-auto">
            <img
              src={selectedThumb}
              className="rounded-none md:rounded-lg w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-wrap  justify-center gap-8 w-full items-center">
            {product.images?.map((image) => (
              <div
                className="w-32 h-32"
                onClick={() => setSelectedThumb(image)}
                key={image}
              >
                <img
                  src={image}
                  className="object-cover rounded-md h-full cursor-pointer w-full"
                  alt={`image of ${product.name}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center lg:items-start h-full px-4">
            <div>
              <h2 className="text-4xl font-bold text-black/80 mb-4">
                {product.name}
              </h2>
              {product.description && <h3 className="mb-2">{product.description}</h3>}
              <p className="text-black/70 text-2xl font-semibold">
                {product.price.toFixed(2)} €
              </p>
              <button
                className="bg-gradient-to-br from-[#DC6161] to-red-600 rounded-md text-white px-2 py-1 block my-6 w-full"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
