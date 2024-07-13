import {combineReducers} from "redux";
import counterSlice from "@/redux/counterSlice";
import cartSlice from "@/redux/cartSlice";

const allReducers = combineReducers({
  counterSlice: counterSlice,
  cartSlice: cartSlice,
});

const initialState = {
  counterSlice: {},
  cartSlice: {},
};

const rootReducer = (state, action) => {
    switch(action.type){
        case "clear": return (state=initialState)
        default :return allReducers(state, action);
    }
};


export default rootReducer;


