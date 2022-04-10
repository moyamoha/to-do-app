import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todos",
	initialState: {
		data: [],
	},
	reducers: {
		addTodo(state, action) {
			state.data.push(action.payload);
		},
		removeTodo(state, action) {
			const indOfTodo = state.data.map((t) => t._id).indexOf(action.payload);
			state.data.splice(indOfTodo, 1);
		},
		completeTodo: (state, action) => {
			const indOfTodo = state.data.map((t) => t.id).indexOf(action.payload);
			state.data[indOfTodo].dateCompleted = new Date(Date.now()).toISOString();
			state.data[indOfTodo].state = "completed";
		},
		changeTodo: (state, action) => {
			const indOfTodo = state.data
				.map((t) => t.title)
				.indexOf(action.payload.id);
			state.data[indOfTodo] = action.payload.data;
		},
		setTodos: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { addTodo, removeTodo, setTodos, completeTodo, changeTodo } =
	todoSlice.actions;
export default todoSlice.reducer;
