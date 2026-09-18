import { createSlice } from "@reduxjs/toolkit";
import products from "../../db/data";

const initialState = {
  products: products,
  category: "All",
  sort: "default",
  maximumPrice: 200,
  search: "",
  colors: "All",
  minimumPrice: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setSearch: (state, action) => {
      state.search = "";
      state.search = action.payload;
    },

    setMaximumPrice: (state, action) => {
      state.maximumPrice = action.payload;
    },

    setMinimumPrice: (state, action) => {
      state.minimumPrice = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setColors: (state, action) => {
      state.colors = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const {
  setSearch,
  setMaximumPrice,
  setMinimumPrice,
  setCategory,
  setColors,
  setSort,
} = productSlice.actions;

export default productSlice.reducer;

