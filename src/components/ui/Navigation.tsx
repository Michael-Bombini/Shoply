import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="px-24 mx-auto py-4 flex justify-between">
        <Link to={"/"}>
          <h1 className="bg-gradient-to-br p-2 from-[#DC6161] to-red-600 text-transparent bg-clip-text text-4xl font-bold">
            Shoply
          </h1>
        </Link>
    </header>
  );
}
