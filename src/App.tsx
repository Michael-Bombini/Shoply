import { Route, Routes } from "react-router-dom";
import Modal from "./components/modal/Modal";
import Navigation from "./components/ui/Navigation";
import Cart from "./pages/Cart";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Completed from "./pages/Completed";

export default function App() {
  return (
    <div>
      <Modal />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" Component={Index} />
          <Route path="/products" Component={Products} />
          <Route path="/product/:slug" Component={Product} />
          <Route path="/cart" Component={Cart} />
          <Route path="/completed" Component={Completed} />
        </Routes>
      </main>
    </div>
  );
}
