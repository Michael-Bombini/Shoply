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
    emptyCart: (state) => {
      state.splice(0);
      localStorage.removeItem("cart");
    },
    increaseQuantity: (state, action) => {
      const product = state.find((item) => item.name === action.payload.name);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productIndex = state.findIndex((item) => item.name === action.payload.name);
      if (productIndex !== -1) {
        state[productIndex].quantity -= 1;
        if (state[productIndex].quantity === 0) {
          state.splice(productIndex, 1); 
        }
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },    
  },
});

export default cartSlice.reducer;
export const { addProduct, emptyCart, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;
