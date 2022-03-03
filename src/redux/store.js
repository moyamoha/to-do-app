import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import todoReducer from "./slices/todos";

const rootReducer = {
	user: userReducer,
	todos: todoReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
