import {
  decreaseQuantity,
  emptyCart,
  increaseQuantity,
} from "../redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <section>
      <div className="container mx-auto mt-8">
        {cart.map((item) => (
          <div
            className="flex items-center justify-between border-b border-gray-300 py-4"
            key={item.name}
          >
            <div className="flex items-center space-x-4">
              <img
                className="w-20 h-20 rounded-full"
                src={item.thumbnail_image}
                alt={item.name}
              />
              <div>
                <h2 className="font-bold text-xl">{item.name}</h2>
                <div className="flex gap-2 my-2">
                  <button
                    className="font-bold"
                    onClick={() =>
                      dispatch(decreaseQuantity({ name: item.name }))
                    }
                  >
                    -
                  </button>
                  <p className="text-gray-600 text-sm">{item.quantity} qty</p>
                  <button
                    className="font-bold"
                    onClick={() =>
                      dispatch(increaseQuantity({ name: item.name }))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg">
                {(item.quantity * item.price).toFixed(2)}€
              </p>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="container mx-auto mt-8 flex justify-end">
          <div className="space-x-8">
            <button
              onClick={() => dispatch(emptyCart())}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
            >
              Empty Cart
            </button>
            <button
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
