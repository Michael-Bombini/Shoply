import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../models/Cart";
import { isValidCart } from "../../utils/validateCart";

const storedCart = localStorage.getItem("cart");
const initialState: Cart[] = storedCart
  ? isValidCart(storedCart)
    ? JSON.parse(storedCart)
    : []
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Cart, "quantity">>) => {
      const existingProduct = state.find(
        (product) => product.name === action.payload.name
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { addProduct } = cartSlice.actions;
