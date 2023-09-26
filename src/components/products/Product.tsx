import { Link } from "react-router-dom";

interface Props {
  name: string;
  thumbnail: string;
  price: number;
  slug: string;
}
export default function Product({ name, thumbnail, price, slug }: Props) {
  return (
    <div>
      <img src={thumbnail} alt="" className="w-full max-h-64 object-cover" />
      <h2 className="text-xl text-black/70 font-semibold">{name}</h2>
      <h3>{price}</h3>
      <Link to={`/product/${slug}`}>Buy Now</Link>
    </div>
  );
}
