import { Link } from "react-router-dom";

interface Props {
  name: string;
  thumbnail: string;
  price: number;
  slug: string;
  sale: boolean;
}

export default function Product({ name, thumbnail, price, slug, sale }: Props) {
  return (
    <li className="border-b border-red-500 rounded-t-lg relative">
      <img
        src={thumbnail}
        alt={name}
        className="w-full h-52 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl text-gray-800 font-semibold">{name}</h2>
        <div className="text-gray-600 text-lg">${price.toFixed(2)}</div>
        <Link
          to={`/product/${slug}`}
          className="mt-4 inline-block bg-gradient-to-br from-[#DC6161] to-red-600 hover:scale-105 text-white py-2 px-4 rounded-md transition-all"
        >
          Buy Now
        </Link>
      </div>
      {sale && (
        <div className="absolute top-0 right-0 px-2 bg-gradient-to-br from-[#DC6161] to-red-600 text-white rounded-bl-md font-semibold">
          SALE
        </div>
      )}
    </li>
  );
}
