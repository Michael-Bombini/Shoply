import { Link } from "react-router-dom";
import cartIcon from "../../assets/cart-icon.svg";
import { useAppSelector } from "../../redux/store";

export default function Navigation() {
  const cart = useAppSelector((state) => state.cart);
  return (
    <header className="px-4 sm:px-8 md:px-24 mx-auto py-4 flex justify-between items-center">
      <Link to={"/"}>
        <h1 className="bg-gradient-to-br p-2 from-[#DC6161] to-red-600 text-transparent bg-clip-text text-4xl font-bold">
          Shoply
        </h1>
      </Link>
      <Link to={"/cart"} className="relative">
        <img src={cartIcon} alt="" className="w-6" />
        <div className="w-6 h-6 flex justify-center items-center rounded-full bg-red-500 text-white font-semibold absolute -bottom-4 -right-3">
          {cart.length}
        </div>
      </Link>
    </header>
  );
}
