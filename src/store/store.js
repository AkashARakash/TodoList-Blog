import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import authReducer from './authSlice';

var store = configureStore({
    reducer:{
        todos: todoReducer,
        auth: authReducer
    }
});
export default store;