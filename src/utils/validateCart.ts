import { Cart } from "../models/Cart";

export function isValidCart(data: string | null): boolean {
  if (!data) {
    return false;
  }
  try {
    const cartItems: Cart[] = JSON.parse(data);

    if (!Array.isArray(cartItems)) {
      return false;
    }

    for (const item of cartItems) {
      if (
        typeof item.name !== "string" ||
        typeof item.price !== "number" ||
        typeof item.quantity !== "number" ||
        typeof item.thumbnail_image !== "string"
      ) {
        return false;
      }
    }

    return true;
  } catch (error) {
    return false;
  }
}
