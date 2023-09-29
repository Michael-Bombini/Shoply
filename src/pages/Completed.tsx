import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CheckoutResult from "../components/checkout/CheckoutResult";
export default function Completed() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className={`${
            loading
              ? "animate-pulse  bg-red-300 absolute inset-0 z-50 flex justify-center items-center text-white font-bold text-2xl text-center"
              : "hidden"
          }`}
        >
          Wait we are processing your order
        </div>
      ) : (
        <CheckoutResult result={location.state} />
      )}
    </>
  );
}
