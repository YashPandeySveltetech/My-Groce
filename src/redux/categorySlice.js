import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categoryList: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryList: (state, {payload}) => {
      console.log(state, "state");
      state.categoryList = payload;
    },
  },
});

export const {setCategoryList} = categorySlice.actions;

export default categorySlice.reducer;
