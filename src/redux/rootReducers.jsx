import {combineReducers} from "redux";
import counterSlice from "@/redux/counterSlice";
import categorySlice from "@/redux/categorySlice";
import cartSlice from "@/redux/cartSlice";

const allReducers = combineReducers({
  counterSlice: counterSlice,
  cartSlice: cartSlice,
  categorySlice: categorySlice,
});

const initialState = {
  counterSlice: {},
  cartSlice: {},
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "clear":
      return (state = initialState);
    default:
      return allReducers(state, action);
  }
};

export default rootReducer;
