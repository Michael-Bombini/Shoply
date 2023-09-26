import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../models/Product";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://shoply-d7eed-default-rtdb.europe-west1.firebasedatabase.app",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products.json",
    }),
    getProduct: builder.query<Product, string>({
      query: (productId: string) => `/${productId}.json`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = apiSlice;
