import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "@/redux/rootReducers";

export const store = configureStore({
    reducer: rootReducer,
});

export default store;
